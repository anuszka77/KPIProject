/* eslint-disable import/prefer-default-export */
import { getApi } from '../api/apiRequest';

export const loadDetails = async () => {
    try {
        return await getApi('/ProcessBook/GetProcessBook')
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


export const loadColumnToShow = async (idDatabaseObject, roleId ) => {
    try {
        return await getApi('/ProcessBook/GetListOfColumnToShow/'+idDatabaseObject+"/"+roleId)
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



export const loadListOfProcessBookActivity = async () => {
    try {
        return await getApi('/ProcessBook/GetListOfProcessActivity')
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


export const loadListOfProcessLayers = async () => {
    try {
        return await getApi('/ProcessBook/GetListOfProcessLayers')
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