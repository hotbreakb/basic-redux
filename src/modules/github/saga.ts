import { call, put, takeEvery } from 'redux-saga/effects';
import { getUserProfile, GithubProfile } from './../../api/github';
import { getUserProfileAsync, GET_USER_PROFILE } from "./actions";

function* getUserProfileSaga(action: { type: typeof GET_USER_PROFILE, payload: any }) {
    try {
        const userProfile: GithubProfile = yield call<typeof getUserProfile>(getUserProfile, action.payload);
        yield put(getUserProfileAsync.success(userProfile));
    } catch (e) {
        yield put(getUserProfileAsync.failure(e as any));
    }
}

export function* githubSaga() {
    yield takeEvery(GET_USER_PROFILE, getUserProfileSaga);
}