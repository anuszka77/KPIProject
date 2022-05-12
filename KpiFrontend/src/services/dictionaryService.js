/* eslint-disable import/prefer-default-export */
import { getApi, postApi } from '../api/apiRequest';
import { mainGetApiService } from '../services/mainGetApiService'
import { mainPostApiService } from '../services/mainPostApiService'

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

export const loadDictActivityHierarchy = async () => {
    return await mainGetApiService('/Dictionary/GetDictActivityHierarchy');
};

export const loadDictBussinesValueAdded = async () => {
    return await mainGetApiService('/Dictionary/GetDictBussinesValueAdded');
};

export const loadDictCriticalTo = async () => {
    return await mainGetApiService('/Dictionary/GetDictCriticalTo');
};

export const loadDictDepartment = async () => {
    return await mainGetApiService('/Dictionary/GetDictDepartment');
};

export const loadDictKpi = async () => {
    return await mainGetApiService('/Dictionary/GetDictKpi');
};


export const addElementToSystemDictionary = async (id, name) => {
    return await mainPostApiService("/Dictionary/AddElementToSystemDictionary/" + id + "/" + name);
};

export const addElementToActivityHierarchyDictionary = async (idSystem, systemName) => {
    return await mainPostApiService("/Dictionary/AddElementToActivityHierarchyDictionary/" + idSystem + "/" + systemName);
};

export const addElementToDepartmentDictionary = async (idSystem, systemName) => {
    return await mainPostApiService("/Dictionary/AddElementToDepartmentDictionary/" + idSystem + "/" + systemName);
};

export const addElementToBussinesValueAddedDictionary = async (idSystem, systemName) => {
    return await mainPostApiService("/Dictionary/AddElementToBussinesValueAddedDictionary/" + idSystem + "/" + systemName);
};

export const addElementToCriticalToDictionary = async (idSystem, systemName) => {
    return await mainPostApiService("/Dictionary/AddElementToCriticalToDictionary/" + idSystem + "/" + systemName);
};

export const addElementToKpiDictionary = async (idSystem, systemName) => {
    return await mainPostApiService("/Dictionary/AddElementToKpiDictionary/" + idSystem + "/" + systemName);
};

