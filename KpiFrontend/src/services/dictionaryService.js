/* eslint-disable import/prefer-default-export */
import { getApi, postApi } from '../api/apiRequest';
import {mainGetApiService} from '../services/mainGetApiService'

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
        return await getApi('/Dictionary/GetTierDictionaryToDimension/' + idDimension)
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

export const loadDictSystem = async () => {
    try {
        return await getApi('/Dictionary/GetDictSystem')
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

export const saveLayers = async (layersToAdd, systemId) => {

    try {
        return await postApi("/Dictionary/SaveLayers/" + systemId, layersToAdd)
            .then((res) => {
                if (res.status === 200) {
                    return Promise.resolve(res.data);
                }
                return Promise.resolve([]);
            })
            .catch((error) => {
                const responseMsg = error.response?.data || error.message;
                if (error.response?.status === 400)
                    return Promise.resolve(responseMsg);
            });
    } catch (e) {
        return Promise.reject(e);
    }
};


export const loadDictListOfSimpleDictionary = async () => {
    return await mainGetApiService('/Dictionary/GetDictListOfNameSimpleDictionary');
};

export const loadDictKpi = async () => {
    return await mainGetApiService('/Dictionary/GetDictKpi');
};

export const loadDictActivityHierarchy = async () => {
    return await mainGetApiService('/Dictionary/GetDictActivityHierarchy');
};

export const loadDictBussinesValueAdded = async () => {
    return await mainGetApiService('/Dictionary/GetDictBussinesValueAdded');
};

export const loadDictDepartment = async () => {
    return await mainGetApiService('/Dictionary/GetDictDepartment');
};

export const loadDictCriticalTo = async () => {
    return await mainGetApiService('/Dictionary/GetDictCriticalTo');
};
