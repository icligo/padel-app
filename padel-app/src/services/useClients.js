import { useQuery } from 'react-query';
import {getClients} from "./padelApi";

const useClients = ({ name = '', email = '', phone = '' } = {}) => {
    return useQuery(['clients', { name, email, phone }], () => getClients({ name, email, phone }), {
        refetchOnWindowFocus: false,
        keepPreviousData: true
    });
};

export default useClients;
