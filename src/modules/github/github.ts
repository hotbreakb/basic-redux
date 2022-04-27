
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ActionType } from "typesafe-actions";
import { getUserProfile, GithubProfile } from "../../api/github";
import * as actions from "./actions";
import { GET_USER_PROFILE, GET_USER_PROFILE_ERROR, GET_USER_PROFILE_SUCCESS } from "./actions";

export const getUserProfileThunk = createAsyncThunk(
    `github/getUserProfile`, async (username: string) => {
        const response = await getUserProfile(username);
        return response;
    }
)

// types
export type GithubAction = ActionType<typeof actions>;

export type GithubState = {
    userProfile: {
        loading: boolean;
        error: Error | null;
        data: GithubProfile | null;
    }
}

const initialState: GithubState = {
    userProfile: {
        loading: false,
        error: null,
        data: null
    }
};

// action, reducer
export const githubSlice = createSlice({
    name: "github",
    initialState,
    reducers: {
        [GET_USER_PROFILE]: (
            { userProfile }: GithubState
        ) => {
            userProfile.loading = true;
        },
        [GET_USER_PROFILE_SUCCESS]: (
            { userProfile }: GithubState, { payload }: PayloadAction<{ data: GithubProfile }>
        ) => {
            userProfile.data = payload.data;
        },
        [GET_USER_PROFILE_ERROR]: (
            { userProfile }: GithubState, { payload }: PayloadAction<{ error: Error }>
        ) => {
            userProfile.error = payload.error;
        },
    }
})