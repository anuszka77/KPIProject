import { getApi } from "../api/apiRequest";

export const loadDetails = async ()  => {

	try {		
		return await getApi("/Menu/GetLastStatusOfTask")
			.then((res) => {
				if (res.status === 200) {
					return Promise.resolve(res.data);
				}
				return Promise.resolve([]);
			})
			.catch((error) => {
				const responseMsg = "fffff";
				console.log(responseMsg);
				return Promise.reject(responseMsg);
			});
	} catch (e) {
		return Promise.reject(e);
	}
};