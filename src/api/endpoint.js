const API_BASE_URL = 'http://127.0.0.1:8000/api';

const API_IMAGE = 'http://127.0.0.1:8000';

export {API_BASE_URL,API_IMAGE};

const endpoint = {
    //users
    USERS: `${API_BASE_URL}/user/`,
    USERSCREATE: `${API_BASE_URL}/user/create/`, //register
    USER_DETAIL: (userId) => `${API_BASE_URL}/user/${userId}/`,
    USER_UPDATE: (userId) => `${API_BASE_URL}/user/${userId}/update/`,
    login: `${API_BASE_URL}/login/`,
}
