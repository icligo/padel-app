import axios from 'axios';

const padelApiClient = axios.create({
    baseURL: "https://padel-api-x3i0.onrender.com/api/v1/clients"
});

export const getClients = async (data) => {
    const res = await padelApiClient.get(`/?name=${data?.name}&email=${data?.email}&phone=${data?.phone}`);
    return res.data;
};

export const createClient = async (data) => {
    const res = await padelApiClient.post(`/`, data);

    return res.data;
};
