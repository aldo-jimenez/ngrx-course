import { createAction, props } from "@ngrx/store";
import { User } from "../model/user.model";

const ACTIONTYPE_LOGIN = "[Login Page] User Login";
const ACTIONTYPE_LOGOUT = "[Top Menu] Logout";

export const login = createAction(ACTIONTYPE_LOGIN, props<{ user: User }>());

export const logout = createAction(ACTIONTYPE_LOGOUT);
