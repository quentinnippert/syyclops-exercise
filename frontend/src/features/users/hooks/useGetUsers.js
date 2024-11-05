import { useCallback, useEffect, useState } from "react";
import { read } from "../services/api";

const useGetUsers = () => {

    const [users, setUsers]     = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError]     = useState(null);

    const fetchUsers = useCallback(async () => {
        setLoading(true);
        setError(null);

        try
        {
            const response = await read();
            setUsers(response);
        } catch (error)
        {
            console.error(error, 'on catch');
            setError(error);
        } finally
        {
            setLoading(false);
        }

    }, []);

    const updateUserData = useCallback(async (userId, data) => {
        setUsers(prev => prev.map(user => {
            if(user.id === userId)
            {
                return {
                    ...user,
                    ...data
                };
            }

            return user;
        }));
    }, []);

    useEffect(() => {
        fetchUsers();
    }, [fetchUsers]);

    return {
        users,
        loading,
        error,
        refresh: fetchUsers,
        updateUserData
    };
}

export default useGetUsers;