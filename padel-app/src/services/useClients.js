import { useQuery } from 'react-query';
import { getClients } from "./padelApi";

const useClients = ({ name = '', email = '', phone = '' } = {}, options = {}) => {
    return useQuery(['clients', { name, email, phone }], () => getClients({ name, email, phone }), {
        refetchOnWindowFocus: false,
        keepPreviousData: true,
        ...options
    });
};

export default useClients;
