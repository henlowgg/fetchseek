import { toast } from "react-toastify";
import ENDPOINT from "./constants";
import makeRequest from "./makeRequest";

const api = (() => {
	let expiredSessionFunction = null;

	const expiredSessionHandler = async (func) => {
		expiredSessionFunction = func;
	};

	const showToast = (message, type = "error") => {
		toast[type](message, {
			position: toast.POSITION.TOP_RIGHT,
			autoClose: 3000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
		});
	};

	const LoginReq = async (name, email) => {
		try {
			const url = ENDPOINT.login;
			const method = "POST";
			const data = { name, email };

			const response = await makeRequest(url, method, data);
			return Promise.resolve(response.data);
		} catch (error) {
			showToast("Login failed");
			return Promise.reject("Login failed");
		}
	};

	const LogoutReq = async () => {
		try {
			const url = ENDPOINT.logout;
			const method = "POST";

			const response = await makeRequest(url, method, {});
			return Promise.resolve(response.data);
		} catch (error) {
			showToast("Logout failed");
			return Promise.reject("Logout failed");
		}
	};

	const searchDogsReq = async (filter) => {
		try {
			const url = ENDPOINT.searchDogs;
			const method = "GET";

			const response = await makeRequest(url, method, undefined, filter);
			return Promise.resolve(response.data);
		} catch (error) {
			if (error.response.status === 401) {
				if (expiredSessionFunction) {
					expiredSessionFunction();
				}
				showToast("Please login again");
				return Promise.reject("Please login again");
			}
			showToast("Error fetching");
			return Promise.reject("Error fetching");
		}
	};

	const getDogsReq = async (dogIds) => {
		try {
			const url = ENDPOINT.dogs;
			const method = "POST";

			const response = await makeRequest(url, method, dogIds);
			return Promise.resolve(response.data);
		} catch (error) {
			showToast("Failed to fetch dogs");
			return Promise.reject("Failed to fetch dogs");
		}
	};

	const fetchBreeds = async () => {
		try {
			const url = ENDPOINT.getBreeds;
			const method = "GET";

			const response = await makeRequest(url, method);
			return Promise.resolve(response.data);
		} catch (error) {
			if (error.response.status === 401) {
				if (expiredSessionFunction) {
					expiredSessionFunction();
				}
				showToast("Please login again");
				return Promise.reject("Please login again");
			}
			showToast("Failed to fetch breeds");
			return Promise.reject("Failed to fetch breeds");
		}
	};

	const dogMatchReq = async (dogIds) => {
		try {
			const url = ENDPOINT.getMatch;
			const method = "POST";

			const response = await makeRequest(url, method, dogIds);
			return Promise.resolve(response.data);
		} catch (error) {
			showToast("Failed to find a match");
			return Promise.reject("Failed to find a match");
		}
	};

	return {
		expiredSessionHandler,
		LoginReq,
		LogoutReq,
		searchDogsReq,
		getDogsReq,
		fetchBreeds,
		dogMatchReq,
	};
})();

export default api;
