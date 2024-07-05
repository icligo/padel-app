import axios from 'axios';

const padelApiClient = axios.create({
    baseURL: "https://api.astrapadel.pt/api/v1"
});

export const getClients = async (data) => {
    const res = await padelApiClient.get(`/clients/?name=${data?.name}&email=${data?.email}&phone=${data?.phone}`);
    return res.data;
};

export const createClient = async (data) => {
   //  const res = await padelApiClient.post('/clients', data);
    const res2 = await axios.post('https://api.astrapadel.pt/api/v1/clients', data);

    return res2.data;
};
