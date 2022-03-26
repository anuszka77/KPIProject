

import { getApi, postApi } from "../api/apiRequest";

/*

	Taka konstrukcja - funkcja zwracająca funkcję, ponieważ ta metoda powinna być dispatchowana
	czyli jesli jest na niej dispatch to następnie wywołuje ją metoda z middleware (asyncFunctionMiddleware)

*/



export const loadDetails = async (storeId)  => {

	try {		
		return await getApi("/Menu/GetLastStatusOfTask")
			.then((res) => {
				if (res.status === 200) {
					return Promise.resolve(res.data);
				}
				return Promise.resolve([]);
			})
			.catch((error) => {
				const responseMsg = error.response?.data || error.message;

				console.log(responseMsg);
				return Promise.reject(responseMsg);
			});
	} catch (e) {
		return Promise.reject(e);
	}
};


export const execChecksCalculation = async ()  => {

	try {		
		return await postApi("/Checks/ExecChecksCalculation/"+0)
			.then((res) => {
				if (res.status === 200) {
					console.log(res.data);
					console.log("Przeliczenie checków");
					return Promise.resolve(res.data);
				}
				return Promise.resolve([]);
			})
			.catch((error) => {
				const responseMsg = error.response?.data || error.message;
				console.log(responseMsg);
				return Promise.reject(responseMsg);
			});
	} catch (e) {
		return Promise.reject(e);
	}
};

export const getActualCalculationDate = async (teamdailyTaskId)  => {

	try {		
		return await getApi("/Checks/GetActualProcessCalculationDate/"+teamdailyTaskId)
			.then((res) => {
				if (res.status === 200) {
					console.log(res.data);
					return Promise.resolve(res.data);
				}
				return Promise.resolve([]);
			})
			.catch((error) => {
				const responseMsg = error.response?.data || error.message;
				console.log(responseMsg);
				return Promise.reject(responseMsg);
			});
	} catch (e) {
		return Promise.reject(e);
	}
};

export const getChecksCalculationIsInProgress = async ()  => {

	try {		
		return await getApi("/Checks/GetChecksCalculationIsInProgress")
			.then((res) => {
				if (res.status === 200) {
					console.log(res.data);
					return Promise.resolve(res.data);
				}
				return Promise.resolve([]);
			})
			.catch((error) => {
				const responseMsg = error.response?.data || error.message;
				console.log(responseMsg);
				return Promise.reject(responseMsg);
			});
	} catch (e) {
		return Promise.reject(e);
	}
};

export const getLastStatusOfTask = async (teamdailyTaskId)  => {

	try {		
		return await getApi("/Checks/GetLastStatusOfTask/"+teamdailyTaskId)
			.then((res) => {
				if (res.status === 200) {
					console.log(res.data);
					return Promise.resolve(res.data);
				}
				return Promise.resolve([]);
			})
			.catch((error) => {
				const responseMsg = error.response?.data || error.message;
				console.log(responseMsg);
				return Promise.reject(responseMsg);
			});
	} catch (e) {
		return Promise.reject(e);
	}
};


export const processingCalculationTableTrading = async ()  => {

	try {		
		return await postApi("/Broker/ServiceBrokerActivation/")
			.then((res) => {
				if (res.status === 200) {
					console.log("broker")
					return Promise.resolve(res.data);
				}
				return Promise.resolve([]);
			})
			.catch((error) => {
				const responseMsg = error.response?.data || error.message;
				console.log(responseMsg);
				return Promise.reject(responseMsg);
			});
	} catch (e) {
		return Promise.reject(e);
	}
};