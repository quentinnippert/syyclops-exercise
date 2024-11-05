export default class RequestManager {

    constructor() {
        const {
            REACT_APP_API_URL
        } = process.env;

        this.REACT_APP_API_URL = REACT_APP_API_URL;
    }

    doGet = async (endpoint, params, headers) => {
        try {
            const p = new URLSearchParams(params);
            const h = new Headers(headers);

            const url = this.REACT_APP_API_URL + endpoint + (p.toString() ? '?' + p.toString() : '');

            const response = await fetch(
                url,
                {
                    method: 'GET',
                    headers: h
                }
            );

            const responseText = await response.text();

            if (response.ok) {
                try {
                    return JSON.parse(responseText);
                } catch (error) {
                    throw new Error('Response is not a valid JSON: ' + responseText);
                }
            } else {
                let errorMessage = 'GET Request failed with status: ' + response.status;
                try {
                    errorMessage += ' - ' + JSON.parse(responseText).message;
                } catch (error) {
                    errorMessage += ' - ' + responseText;
                }
                throw new Error(errorMessage);
            }

        } catch (error) {
            throw error;
        }
    }

    doPut = async (endpoint, body, headers) => {
        try {
            const h = new Headers({
                'Content-Type': 'application/json',
                ...headers
            });

            const response = await fetch(
                this.REACT_APP_API_URL + endpoint,
                {
                    method: 'PUT',
                    headers: h,
                    body: JSON.stringify(body)
                }
            );

            if (response.ok) {
                return response.json();
            } else {
                let errorMessage = `PUT Request failed with status: ${response.status}`;
                let errorData;

                try {
                    errorData = await response.json();
                    errorMessage += ` - ${errorData.detail}`;
                } catch {
                    const errorText = await response.text();
                    errorMessage += ` - ${errorText}`;
                }

                const error = new Error(errorMessage);
                error.data = errorData;
                throw error;
            }

        } catch (error) {
            throw error;
        }
    }
}