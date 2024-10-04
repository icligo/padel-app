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

export const getClientByVoucher = async (params) => {
    const { voucher } = params;
    const res = await padelApiClient.get(`/public/voucher/${voucher}`);
    return res.data;
};

export const createClient = async (data) => {
    const res = await padelApiClient.post('/clients', data);

    return res.data;
};

export const readVoucher = async (params) => {
    const { voucherToken } = params;
    const res = await padelApiClient.post(`/clients/${voucherToken}`);

    return res.data;
};
