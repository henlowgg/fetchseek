import axios from 'axios';
import { toast } from 'react-toastify';

async function makeRequest(url, method, data, params) {
  try {
    const config = {
      url,
      method,
      data,
      params,
      withCredentials: true, // Include credentials (cookies) with the request
    };

    const response = await axios(config);
    return response;
  } catch (error) {
    const errorMessage = error.response?.data?.message || 'An error occurred';
    showToast(errorMessage, 'error');
    return Promise.reject(error);
  }
}

const showToast = (message, type = 'error') => {
  toast[type](message, {
    position: toast.POSITION.TOP_RIGHT,
    autoClose: 3000, 
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
  });
};

export default makeRequest;
