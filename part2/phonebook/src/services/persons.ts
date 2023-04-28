import axios from "axios";
import personType from "../types/person.type";

const baseURL = '/api/persons';

const getAll = async () => {
    const request = axios.get(baseURL);
    const response = await request;
    return response.data;
}

const postPerson = async (newPost: personType) => axios.post(baseURL, newPost);

const deletePerson = async (personId: number) => axios.delete(`${baseURL}/${personId}`);

const updatePerson = async (id: number, changedPerson: personType) => axios.put(`${baseURL}/${id}`, changedPerson);

export default { getAll, postPerson, deletePerson, updatePerson };