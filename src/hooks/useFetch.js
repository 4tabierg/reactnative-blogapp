import { useEffect, useState } from 'react';
import { env } from '../library/network/env/env';

const useFetch = () => {
    
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState();
    const [apiUrl, setApiUrl] = useState(env.api)

    useEffect(() => {
        const controller = new AbortController()
        const fetchData = async () => {
            try {
                setIsLoading(true);
                const url = `${apiUrl}blogs/`
                const response = await fetch(url, { signal: controller.signal })
                if (response.status === 200) {
                    const _data = await response.json();
                    setData(_data)
                }
                else {
                    throw new Error("Could not fetch the data\nurl: " + url)
                }
                setIsLoading(false);
            } catch (error) {
                setIsLoading(false);
                setError(error)
            }
        }

        fetchData()
        return () => controller.abort();
    }, []);


    return { data, isLoading, error }


}

export default useFetch