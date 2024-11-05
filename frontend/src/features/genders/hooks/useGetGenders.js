import { useCallback, useEffect, useState } from "react";
import { read } from "../services/api";

const useGetGenders = () => {
    
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [genders, setGenders] = useState([]);

    const fetchGenders = useCallback(async () => {
        setLoading(true);
        setError(null);

        try
        {
            const response = await read();
            setGenders(response);
        } catch (error)
        {
            console.error(error, 'on catch');
            setError(error);
        } finally
        {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        fetchGenders();
    }, [fetchGenders]);

    return {
        loading,
        error,
        genders,
        refresh: fetchGenders,
    };
}

export default useGetGenders;