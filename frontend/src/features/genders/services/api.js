import RequestManager from "../../../utils/RequestManager";

export const read = async () => {
    const requestManager = new RequestManager();
    return requestManager
        .doGet('/genders')
        .then((response) => {
            return response;
        })
        .catch((error) => {
            throw error;
        });
}