import { user_service } from "../../../services/user.service";
import { SET_USER } from "./types";

export const login = (user, password) => (dispatch, getState) => {
  return new Promise((resolve, reject) => {
    const result = user_service.login(user, password);

    if (result) {
      dispatch({
        type: SET_USER,
        payload: result,
      });
      resolve(result)
    }
    
    reject(false)
    
  });
};
