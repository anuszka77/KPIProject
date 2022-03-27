import axios from "axios";

export const api = {
	//  address: "https://localhost:7145/",
	//  apiAddress: "https://localhost:7145/api",
	
//local IIS
	address: "https://your-kpi-process-api.herokuapp.com/",
	apiAddress: "https://your-kpi-process-api.herokuapp.com/api",

	apiPrefix: "/api"
	
};

const withc = false;

const requestConfig = (params) => {
	const config = {
		headers: {}
	};
	if (params) {
		for (const key in params) {
			config[key] = params[key];
		}
	}
	return config;
};

const anonymousRequestConfig = (params) => {
	const config = {
		headers: {}

	};
	if (params) {
		for (const key in params) {
			config[key] = params[key];
		}
	}
	return config;
};

const instanceAnonymous = axios.create(
	anonymousRequestConfig({
		baseURL: api.address,
		withCredentials: true

	})
);

const instance = axios.create(
	anonymousRequestConfig({
		baseURL: api.address,
		withCredentials: true

	})
);

export const getApiAddress = () => {
	return api.address;
};

export const getApiAnonymous = async (request, requestParameters) => {
	const requestToServer = api.apiPrefix + request;
	try {
		return instanceAnonymous.get(
			requestToServer,
			anonymousRequestConfig(requestParameters)
		);
	} catch (err) {
		return Promise.reject(err.message);
	}
};

export const postApiAnonymous = async (request, params, requestParameters) => {
	const requestToServer = api.apiPrefix + request;
	try {
		return instanceAnonymous.post(
			requestToServer,
			params === undefined ? null : params,
			anonymousRequestConfig(requestParameters)
		);
	} catch (err) {
		return Promise.reject(err.message);
	}
};

export const post = async (request, params, requestParameters) => {
	try {
		const pr = params === undefined ? null : params;
		return instance.post(request, pr, requestConfig(requestParameters));
	} catch (err) {
		return Promise.reject(err.message);
	}
};

export const get = async (request, requestParameters) => {
	try {
		return instance.get(request, requestConfig(requestParameters));
	} catch (err) {
		return Promise.reject(err.message);
	}
};

export const put = async (request, params, requestParameters) => {
	try {
		return instance.put(
			request,
			params === undefined ? null : params,
			requestConfig(requestParameters)
		);
	} catch (err) {
		return Promise.reject(err.message);
	}
};

export const postApi = async (request, params, requestParameters) => {
	const requestToServer = api.apiPrefix + request;
	return post(requestToServer, params, requestParameters);
};

export const getApi = async (request, requestParameters) => {
	const requestToServer = api.apiPrefix + request;
	return get(requestToServer, requestParameters);
};

export const putApi = async (request, params, requestParameters) => {
	const requestToServer = api.apiPrefix + request;
	return put(requestToServer, params, requestParameters);
};

export const getPingApi = async (request, requestParameters) => {
	const requestToServer = api.apiPrefix + request;
	try {
		return instance.get(requestToServer, pingRequestConfig(requestParameters));
	} catch (err) {
		return Promise.reject(err.message);
	}
};

const pingRequestConfig = (params) => {
	const config = {
		headers: {},
	};
	/*const token = getToken();

	if (token) {
		if (token.access_token) {
			config.headers.Authorization = `Bearer ${token.access_token} a`;
		} else {
			config.withCredentials = true;
		}
	}*/

	if (params) {
		for (const key in params) {
			config[key] = params[key];
		}
	}
	return config;
};
