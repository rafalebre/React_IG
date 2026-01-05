export const api = "https://react-ig.onrender.com/api"
export const uploads = "https://react-ig.onrender.com/uploads"

// Helper to get image URL (Cloudinary or local)
export const getImageUrl = (imagePath, folder = 'photos') => {
    // If it's already a full URL (Cloudinary), return as is
    if (imagePath && (imagePath.startsWith('http://') || imagePath.startsWith('https://'))) {
        return imagePath
    }
    // Otherwise, use local uploads folder
    return `${uploads}/${folder}/${imagePath}`
}

export const requestConfig = (method, data, token = null, image = null) => {

    let config

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