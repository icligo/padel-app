import { useMutation } from 'react-query';
import { createClient } from './padelApi';
import { padelKeys } from './padelKeysFactory';

const createClientFn = async (client) => {
    return createClient(client);
};

const useMutateClient = () => {
    const createClientMutate = useMutation(padelKeys.create(), createClientFn, {});

    return { createClientMutate };
};

export default useMutateClient;
