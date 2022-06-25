import { createContext, useState, useEffect, useReducer } from "react";
import { getUsers, registerUser } from "../library/network/requests/users";
import { getData, storeData } from './../library/helpers/asyncStorage';

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {

    // const [isLoggedIn, setIsLoggedIn] = useState(false);
    // const [isLoading, setIsLoading] = useState(false);
    // const [error, setError] = useState("");

    const initialLoginState = {
        isLoading: false,
        isLoggedIn: false,
        userData: {},
        error: "",
    }

    const loginReducer = (state, action) => {
        switch (action.type) {
            case "login":
                return {
                    ...state,
                    userData: action.userData,
                    isLoggedIn: true,
                    isLoading: false,
                    error: ""
                };
            case "register":
                return {
                    ...state,
                    userData: action.userData,
                    isLoggedIn: true,
                    isLoading: false,
                    error: ""
                }
            case "logout":
                return {
                    ...state,
                    isLoggedIn: false,
                    isLoading: false,
                    error: ""
                }
            case "error":
                return {
                    ...state,
                    isLoading: false,
                    error: action.error
                }
            case "loading":
                return {
                    ...state,
                    isLoading: true,
                    error: "",
                }
            default:
                return { ...state }
        }
    }

    const [loginState, dispatch] = useReducer(loginReducer, initialLoginState)

    useEffect(() => {
        console.log("useEffect");
        const getLoggedInData = async () => {
            dispatch({ type: "loading" })
            //setIsLoading(true);
            const _isRememberChecked = await getData("isRememberChecked");
            _isRememberChecked &&
                dispatch({ type: "login" })
            //setIsLoggedIn(true);
            //setIsLoading(false);
        }
        getLoggedInData();
    }, [])


    const handleLogin = async (loginData, isRememberChecked) => {
        dispatch({ type: "loading" })
        // setIsLoading(true);
        // setError("");
        const res = await getUsers();

        const filterFunction = (user) => {
            if (user.username === loginData.username) {
                if (user.password === loginData.password) {
                    return user
                }
                else {
                    dispatch({ type: "error", error: "User name and password are not matching!" })
                    //setError("User name and password are not matching!")
                }
            }
            else {
                dispatch({ type: "error", error: "User could not found!" })
                //setError("User name could not found!")
            }
        }

        if (res.data) {
            const user = res.data.filter(filterFunction)
            if (user[0]) {
                if (isRememberChecked) {
                    await storeData("isRememberChecked", isRememberChecked)
                }
                dispatch({ type: "login", userData: { ...user[0] } })
                //setIsLoggedIn(true)
            }
        }
        //setIsLoading(false);
    }

    const handleRegister = async (registerData) => {
        // setIsLoading(true);
        // setError("");
        dispatch({ type: "loading" })
        const usersResponse = await getUsers();
        const user = usersResponse.data.filter(user => user.username === registerData.username)

        if (user[0]) {
            dispatch({ type: "error", error: "This username is already in use!" })
            //setError("This username is already in use!")
        }
        else {
            const registerResponse = await registerUser(registerData);
            if (registerResponse.status !== 201) {
                dispatch({ type: "error", error: "Something went wrong!" })
                //setError("Something went wrong!")
            }
            else {
                dispatch({ type: "register", userData: { ...registerData } })
                //setIsLoggedIn(true);
            }
        }
    }

    const handleLogout = () => dispatch({ type: "logout" });

    return (
        <AuthContext.Provider value={{ isLoggedIn: loginState.isLoggedIn, isLoading: loginState.isLoading, error: loginState.error, handleLogin, handleLogout, handleRegister }}>
            {children}
        </AuthContext.Provider>
    )

}