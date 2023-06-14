import { AxiosRequestConfig, CanceledError } from "axios";
import { useEffect, useState } from "react";
import apiClient from "../services/api-client";

interface Data {
    created: number;
    data: [{
        url:string;
    }]
}

interface Prompt {
    prompt: string;
    input_arr: string[];
}

const useSearch = ({prompt, input_arr}: Prompt, requestConfig?: AxiosRequestConfig,) => {
    const [data, setData] = useState<Data>()
    const [error, setError] = useState('')
    const [isLoading, setLoading] = useState(false);

    const input = {
        prompt: prompt,
        n: 1,
        size: "1024x1024"
      };      

    useEffect(() => {
        const controller = new AbortController();

        setLoading(true);
        //console.log('running a request');
        apiClient.post('', input, {signal:controller.signal, ...requestConfig})
        .then(res => {
            setData(res.data)
            setLoading(false)
    })
        .catch(err => {
            if (err instanceof CanceledError) return;
            setError(err.message)
            setLoading(false);
        })

        return () => controller.abort();

    }, [input_arr])

    return {data, error, isLoading}
}

export default useSearch;