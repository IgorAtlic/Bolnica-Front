import { LOGIN, LOGOUT } from "../actionTypes";
import * as api from "../../api/index.js";
import jwt from "jwt-decode";

export const login = (formData, navigate) => async (dispatch) => {
  try {
    const { data } = await api.login(formData);
    const user = jwt(data);
    const roles = user.roles.split(",");
    localStorage.setItem("token", data);
    localStorage.setItem("loggedUser", JSON.stringify(user));
    dispatch({ type: LOGIN, payload: user });
    if (roles.includes("ROLE_ADMIN")) navigate("/admin");
    else if (roles.includes("ROLE_DR_SPEC_POV")) navigate("/");
    else navigate("/nurse");
  } catch (error) {
    console.log(error);
  }
};

export const logout = (navigate) => async (dispatch) => {
  try {
    localStorage.removeItem("token");
    dispatch({ type: LOGOUT });
    navigate("/login");
  } catch (error) {
    console.log(error);
  }
};

export const resetUser = () => async (dispatch) => {
  try {
    const data = localStorage.getItem("token");
    const user = jwt(data);
    dispatch({ type: LOGIN, payload: user });
  } catch (error) {
    console.log(error);
  }
};
