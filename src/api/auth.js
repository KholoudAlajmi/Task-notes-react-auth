import instance from ".";
import jwtDecode from "jwt-decode";
import axios from "axios";

const storeToken = (token) => {
  localStorage.setItem("token", token);
};

const login = async (userInfo) => {
  try {
    const { data } = await instance.post("/auth/login", userInfo);
    storeToken(data.token); // <--- This
    return data;
  } catch (error) {
    console.log(error);
  }
};

const register = async (userInfo) => {
  try {
		// This is for seding the request with files 
    const formData = new FormData();
    for (const key in userInfo) formData.append(key, userInfo[key]);
		// END
    const { data } = await instance.post("/auth/register", formData);
    storeToken(data.token);  // <--- This
    return data;
  } catch (error) {
    console.log(error);
  }
};


const checkToken = () => {
  const token = localStorage.getItem("token");
  if (token) {
    const decode = jwtDecode(token);
    const cureentTime = Date.now() / 1000;
    if (decode.exp < cureentTime) {
      localStorage.removeItem("token");
      return false;
    }
    return true;
  }
  return false;
};


const logout = () => {
  localStorage.removeItem("token");
};



const me = async () => {
  const { data } = await instance.get("/auth/me");
  return data;
};

const getAllUsers = async () => {
  const { data } = await instance.get("/auth/users");
  return data;
};

export {checkToken, login, register, me, getAllUsers };
