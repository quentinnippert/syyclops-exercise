import RequestManager from "../../../utils/RequestManager";

export const read = async () => {
    const requestManager = new RequestManager();

    return requestManager
        .doGet('/users')
        .then((response) => {
            return response;
        })
        .catch((error) => {
            throw error;
        });
}

export const update = async (userId, data) => {
    const requestManager = new RequestManager();

    return requestManager
        .doPut(`/users/${userId}`, data)
        .then((response) => {
            return response;
        })
        .catch((error) => {
            throw error;
        });
}