import axios from 'axios';

const padelApiClient = axios.create({
    baseURL: "https://api.astrapadel.pt/api/v1"
});

export const getClients = async (data) => {
    const res = await padelApiClient.get(`/clients/?name=${data?.name}&email=${data?.email}&phone=${data?.phone}`);
    return res.data;
};

export const createClient = async (data) => {
    let config = {
        headers: {
            "Access-Control-Allow-Origin": "*"
        }
    }
    const res = await padelApiClient.post('/clients', data, config);

    return res.data;
};
