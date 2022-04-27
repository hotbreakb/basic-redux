
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getUserProfile, GithubProfile } from "../../api/github";

export const getUserProfileThunk = createAsyncThunk(
    `github/getUserProfile`, async (username: string) => {
        const response = await getUserProfile(username);
        return response;
    }
)

// types
// export type GithubAction = ActionType<typeof actions>;

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
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getUserProfileThunk.pending, ({ userProfile }) => {
                userProfile.error = null;
                userProfile.loading = true;
            })
            .addCase(getUserProfileThunk.fulfilled, ({ userProfile }, { payload }) => {
                userProfile.error = null;
                userProfile.loading = false;
                userProfile.data = payload;
            })
            .addCase(getUserProfileThunk.rejected, ({ userProfile }, { payload }) => {
                userProfile.error = payload;
                userProfile.loading = false;
            });
    },
    // extraReducers: {
    //     [getUserProfileThunk.pending.type]: (
    //         { userProfile }: GithubState
    //     ) => {
    //         userProfile.loading = true;
    //         userProfile.data = null;
    //         userProfile.error = null;
    //     },
    //     [getUserProfileThunk.fulfilled.type]: (
    //         { userProfile }: GithubState, { payload }: PayloadAction<{ data: GithubProfile }>
    //     ) => {
    //         userProfile.loading = false;
    //         // userProfile.data = payload;
    //         userProfile.error = null;
    //         console.log(payload);
    //         console.log(payload.data);
    //     },
    //     [getUserProfileThunk.rejected.type]: (
    //         { userProfile }: GithubState, { payload }: PayloadAction<{ error: Error }>
    //     ) => {
    //         userProfile.loading = false;
    //         userProfile.data = null;
    //         userProfile.error = payload.error;
    //     },
    // }
})


// export const { setUserData } = githubSlice.actions;