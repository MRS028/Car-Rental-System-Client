import React, { useContext, useEffect } from "react";
import axios from "axios";
import { AuthContext } from "../Provider/AuthProvider";
import { useNavigate } from "react-router-dom";

const axiosInstance = axios.create({
  baseURL: "http://localhost:3000",
  withCredentials: true,
});

const useAxios = () => {
  const { logOut } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    axiosInstance.interceptors.response.use(
      (response) => {
        return response;
      },
      (error) => {
        console.log("error caugh in interceptor", error);
        logOut()
            .then(() => {
              console.log("Logged Out User");
              navigate("/auth/login");
            })
            .catch((err) => console.log(err));

        if (error.status === 401 || error.status === 403) {
          console.log("Logged Out The User.");
          
        }
        return Promise.reject(error);
      }
    );
  }, []);

  return axiosInstance;
};

export default useAxios;
