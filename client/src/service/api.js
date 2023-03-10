import axios from 'axios';

const URL = 'http://localhost:3001';

export const addUser = async (data) => {
    try {
        return await axios.post(`${URL}/add`, data);
    } catch (error) {
        console.log(error);
    }
}

export const getUsers = async () => {
    try {
        return await axios.get(`${URL}/all`);
    } catch (error) {
        console.log(error);
    }
}

export const getUser = async (id) => {
    try {
        return await axios.get(`${URL}/${id}`);
    } catch (error) {
        console.log(error);
    }
}

export const editUser = async (id, user) => {
    try {
        return await axios.put(`${URL}/${id}`, user);
    } catch (error) {
        console.log(error);
    }
}

export const deleteUser = async (id) => {
    try {
        return await axios.delete(`${URL}/${id}`);
    } catch (error) {
        console.log(error);
    }
}