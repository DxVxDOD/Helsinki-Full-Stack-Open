import axios from 'axios';
import type PersonType from '../types/person.type';

const basUrl = '/api/persons';

const getAll = async () => {
	const request = axios.get(basUrl);
	const response = await request;
	// eslint-disable-next-line @typescript-eslint/no-unsafe-return
	return response.data;
};

const postPerson = async (newPost: PersonType) => axios.post(basUrl, newPost);

const deletePerson = async (personId: number) => axios.delete(`${basUrl}/${personId}`);

const updatePerson = async (id: number, changedPerson: PersonType) => axios.put(`${basUrl}/${id}`, changedPerson);

export default {getAll, postPerson, deletePerson, updatePerson};
