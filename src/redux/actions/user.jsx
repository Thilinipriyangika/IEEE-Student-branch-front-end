import HttpInterceptor from "../../service/http-interceptor";
import Cookies from "js-cookie";
import { userData } from "../reducers/userSlice";

const http = new HttpInterceptor();

export const userLogin = (body, callback) => (dispatch) => {
  const endpoint = `${import.meta.env.VITE_API_HOST}auth/authenticate`;

  try {
    http
      .post(endpoint, body)
      .then((response) => {
        callback(response);
        if (response.status === 200) {
          // console.log("Response" + response);
          const cookieOptions = {
            path: "/",
          };
          console.warn("cookie");
          Cookies.set(
            "token",
            response?.data?.data?.access_token,
            cookieOptions
          );
        }
      })
      .catch((error) => {
        callback(error.response);
      });
  } catch (error) {
    callback(error.response);
  }
};

export const userRegistration = (body, callback) => (dispatch) => {
  const endpoint = `${import.meta.env.VITE_API_HOST}auth/register`;

  try {
    http
      .post(endpoint, body)
      .then((response) => {
        callback(response);
      })
      .catch((error) => {
        callback(error.response);
      });
  } catch (error) {
    callback(error.response);
  }
};


export const getCurrentUser = (callback) => {
  const endpoint = `${import.meta.env.VITE_API_HOST}user/currentuser`;

  try {
    http
      .get(endpoint)
      .then((response) => {
        callback(response);
      })
      .catch((error) => {
        callback(error.response);
      });
  } catch (error) {
    callback(error.response);
  }
};


export const logout = () => {
  Cookies.remove("token", { path: "/" });
};


export const verifyOTP = (body, callback) => (dispatch) => {
  const endpoint = `${import.meta.env.VITE_API_HOST}auth/otp/check`;

  try {
    http
      .post(endpoint, body)
      .then((response) => {
        callback(response);
        if (response.status === 200) {
          // console.log("Response" + response);
          const cookieOptions = {
            path: "/",
          };
          console.warn("cookie");
          Cookies.set(
            "token",
            response?.data?.data?.access_token,
            cookieOptions
          );
        }
      })
      .catch((error) => {
        callback(error.response);
      });
  } catch (error) {
    callback(error.response);
  }
};

export const getAllUsers = (page, search, callback) => {
  const endpoint = `${import.meta.env.VITE_API_HOST}user?search=${search}&page=${page}`;

  try {
    http
      .get(endpoint)
      .then((response) => {
        callback(response);
      })
      .catch((error) => {
        callback(error.response);
      });
  } catch (error) {
    callback(error.response);
  }
};

export const editUsers = (data, callback) => {
  const endpoint = `${import.meta.env.VITE_API_HOST}user/updateUser`;

  try {
    http
      .put(endpoint, data)
      .then((response) => {
        callback(response);
      })
      .catch((error) => {
        callback(error.response);
      });
  } catch (error) {
    callback(error.response);
  }
};

