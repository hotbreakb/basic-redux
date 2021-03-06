
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getUserProfile, GithubProfile } from "../../api/github";

export const getUserProfileThunk = createAsyncThunk(
    `github/getUserProfile`, async (username: string) => {
        const response = await getUserProfile(username);
        return response;
    }
)

export type GithubState = {
    userProfile: {
        loading: boolean;
        error: Error | null | unknown;
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
        GET_USER_PROFILE: (
            { userProfile }: GithubState
        ) => {
            userProfile.loading = true;
            userProfile.data = null;
            userProfile.error = null;
        },
        GET_USER_PROFILE_SUCCESS: (
            { userProfile }: GithubState, { payload }
        ) => {
            userProfile.loading = false;
            userProfile.data = payload;
            userProfile.error = null;
        },
        GET_USER_PROFILE_ERROR: (
            { userProfile }: GithubState, { payload }
        ) => {
            userProfile.loading = false;
            userProfile.data = null;
            userProfile.error = payload;
        },
    }
    // extraReducers: (builder) => {
    //     builder
    //         .addCase(getUserProfileThunk.pending, ({ userProfile }) => {
    //             userProfile.error = null;
    //             userProfile.loading = true;

    //         })
    //         .addCase(getUserProfileThunk.fulfilled, ({ userProfile }, { payload }) => {
    //             userProfile.error = null;
    //             userProfile.loading = false;
    //             userProfile.data = payload;
    //         })
    //         .addCase(getUserProfileThunk.rejected, ({ userProfile }, { payload }) => {
    //             userProfile.error = payload;
    //             userProfile.loading = false;
    //         });
    // },
})