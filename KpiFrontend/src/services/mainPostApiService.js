import {postApi } from '../api/apiRequest';

export const mainPostApiService = async (apiPath) => {

    try {
        return await postApi(apiPath)
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
