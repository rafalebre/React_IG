const API_BASE_URL = process.env.REACT_APP_API_URL || "http://localhost:3100";

export const api = `${API_BASE_URL}/api`;
export const uploads = `${API_BASE_URL}/uploads`;

export const requestConfig = (method, data, token = null, image = null) => {
    let config;

    if (image) {
        config = {
            method,
            body: data,
            headers: {}
        }
    } else if (method === "DELETE" || data === null) {
        config = {
            method,
            headers: {}
        }
    } else {
        config = {
            method,
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        }
    }

    if (token) {
        config.headers.Authorization = `Bearer ${token}`
    }

    return config
}