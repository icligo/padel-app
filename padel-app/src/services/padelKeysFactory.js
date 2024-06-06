export const padelKeys = {
    all: [{ scope: 'clients' }],
    create: () => [{ ...padelKeys.all[0], entity: 'create' }],
    scan: () => [{ ...padelKeys.all[0], entity: 'scan' }]
};
