import { apiViaCep } from './api';

export const address = {
    findAddressByZipCode: async (zipCode) => {
        const result = await apiViaCep.get(`${zipCode}/json`);
        return result.data;
    },
};