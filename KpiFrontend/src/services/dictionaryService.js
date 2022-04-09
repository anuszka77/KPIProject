/* eslint-disable import/prefer-default-export */
import { getApi } from '../api/apiRequest';

export const loadDimensions = async () => {
    try {
        return await getApi('/Dictionary/GetDictDimensions')
            .then((res) => {
                if (res.status === 200) {
                    return Promise.resolve(res.data);
                }
                return Promise.resolve([]);
            })
            .catch((error) => {
                const responseMsg = error.message;
                console.log(responseMsg);
                return Promise.reject(responseMsg);
            });
    } catch (e) {
        return Promise.reject(e);
    }
};


export const loadTierList = async (idDimension) => {
    try {
        return await getApi('/Dictionary/GetTierDictionaryToDimension/'+idDimension)
            .then((res) => {
                if (res.status === 200) {
                    return Promise.resolve(res.data);
                }
                return Promise.resolve([]);
            })
            .catch((error) => {
                const responseMsg = error.message;
                console.log(responseMsg);
                return Promise.reject(responseMsg);
            });
    } catch (e) {
        return Promise.reject(e);
    }
};
