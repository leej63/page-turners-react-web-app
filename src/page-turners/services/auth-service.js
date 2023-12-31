import axios from 'axios';
const SERVER_API_URL = process.env.REACT_APP_SERVER_API_URL;
// const USERS_URL = `${SERVER_API_URL}/users`;
const USERS_URL = `https://page-turner-node-18efed809441.herokuapp.com/api/users`;
// const USERS_URL = `http://localhost:4000/api/users`;
const api = axios.create({ withCredentials: true });


export const login = async ({ username, password, role }) => {
    const response = await api.post(`${USERS_URL}/login`, { username, password, role });
    const user = response.data;
    return user;
};

export const logout = async () => {
    const response = await api.post(`${USERS_URL}/logout`);
    return response.data;
};

export const profile = async (userId) => {
    if (userId) {
        const response = await api.get(`${USERS_URL}/profile/${userId}`);
        const user = response.data;
        return user;
      }

};

export const updateUser = async (user) => {
    const response = await api.put(`${USERS_URL}/${user.profile._id}`, user.profile);
    return response.data;
};

export const register = async (user) => {
    const response = await api.post(`${USERS_URL}/register`, user);
    const responseUser = response.data;
    return responseUser;
}
