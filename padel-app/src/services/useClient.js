import { useQuery } from 'react-query';
import { getClientByVoucher } from "./padelApi";

const useClient = (voucher, options = {}) => {
    console.log('test voucher 2: ', voucher);

    return useQuery(['client', { voucher }], () => getClientByVoucher({ voucher }), {
        refetchOnWindowFocus: false,
        keepPreviousData: true,
        ...options
    });
};

export default useClient;
