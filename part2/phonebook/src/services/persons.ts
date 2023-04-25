import axios from "axios";
import personType from "../types/person.type";

const baseURL = 'http://localhost:3001/persons';

const getAll = async () => {
    const request = axios.get(baseURL);
    const response = await request;
    return response.data;
}

const postPerson = async (newPost: personType) => {
    const request = axios.post(baseURL, newPost);
    const response = await request;
    return response.data;
} 

const deletePerson = async (personId: number) => {
    const request = axios.delete(`${baseURL}/${personId}`);
    const response = await request;
    return response;
}

export default { getAll, postPerson, deletePerson };