export const padelKeys = {
    all: [{ scope: 'clients' }],
    client: (voucherToken) => [{ ...padelKeys.all[0], entity: 'client', voucherToken }],
    create: () => [{ ...padelKeys.all[0], entity: 'create' }],
    scan: () => [{ ...padelKeys.all[0], entity: 'scan' }]
};
