import axios from 'axios';

const padelApiClient = axios.create({
    baseURL: "https://api.astrapadel.pt/api/v1",
    headers: {
        'auth-token': import.meta.env.NEXT_PUBLIC_PADEL_API_TOKEN
    }
});

export const getClients = async (params) => {
    const { name, email, phone } = params;
    const res = await padelApiClient.get(`/clients?name=${name}&email=${email}&phone=${phone}`);
    return res.data;
};

export const createClient = async (data) => {
    const res = await padelApiClient.post('/clients', data);

    return res.data;
};
