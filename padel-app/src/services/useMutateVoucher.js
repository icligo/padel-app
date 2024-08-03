import { useMutation } from 'react-query';
import { readVoucher } from './padelApi';
import { padelKeys } from './padelKeysFactory';

const readVoucherFn = async (voucher) => {
    return readVoucher(voucher);
};

const useMutateVoucher = () => {
    const readVoucherMutate = useMutation(padelKeys.scan(), readVoucherFn, {});

    return { readVoucherMutate };
};

export default useMutateVoucher;
