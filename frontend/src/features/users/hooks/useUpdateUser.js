import { useCallback, useState } from "react";
import { update } from "../services/api";

const useUpdateUser = () => {

    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState(null);

    const updateUser = useCallback(async (userId, data, onUpdate) => {
        setLoading(true);
        setErrors(null);

        try
        {
            const response = await update(userId, data);
            onUpdate && onUpdate(response);
            setErrors(null);
        } catch (error)
        {
            setErrors(error?.data?.detail);
        } finally
        {
            setLoading(false);
        }
    }, []);

    return {
        loading,
        errors,
        updateUser
    };
}

export default useUpdateUser;