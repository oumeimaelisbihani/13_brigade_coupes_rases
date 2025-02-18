import {
	type LoginRequest,
	type User,
	userSchema,
} from "@/features/user/store/user";
import { api } from "@/shared/api";
import { createTypedDraftSafeSelector } from "@/shared/store/selector";
import type { RootState } from "@/shared/store/store";
import {
	type PayloadAction,
	createAsyncThunk,
	createSlice,
} from "@reduxjs/toolkit";
const USER_KEY = "user";

function setStoredUser(user: User | undefined) {
	if (user) {
		localStorage.setItem(USER_KEY, JSON.stringify(user));
	} else {
		localStorage.removeItem(USER_KEY);
	}
}
export function getStoredUser(): User | undefined {
	const user = localStorage.getItem(USER_KEY);
	if (user !== null) {
		return userSchema.safeParse(JSON.parse(user)).data;
	}
}
export const loginThunk = createAsyncThunk(
	"users/login",
	async (loginRequest: LoginRequest) => {
		const result = await api.post<User>("login", { json: loginRequest }).json();
		const user = userSchema.parse(result);
		setStoredUser(user);
		return user;
	},
);
const initialState: Partial<User> = {};
export const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		setUser: (state, { payload: user }: PayloadAction<User>) => {
			state.role = user.role;
			if (user.role === "volunteer" && state.role === "volunteer") {
				state.departments = user.departments;
			}
			state.email = user.email;
			state.login = user.login;
			state.avatarUrl = user.avatarUrl;
		},
		logoutUser: (state) => {
			state.avatarUrl = undefined;
			state.email = undefined;
			state.login = undefined;
			state.role = undefined;
			setStoredUser(undefined);
		},
	},
	extraReducers: (builder) => {
		builder.addCase(loginThunk.fulfilled, (state, { payload: user }) => {
			state.role = user.role;
			if (user.role === "volunteer" && state.role === "volunteer") {
				state.departments = user.departments;
			}
			state.email = user.email;
			state.login = user.login;
			state.avatarUrl = user.avatarUrl;
		});
	},
});
const selectState = (state: RootState) => state.user;
export const selectLoggedUser = createTypedDraftSafeSelector(
	selectState,
	(user) => userSchema.safeParse(user).data,
);
