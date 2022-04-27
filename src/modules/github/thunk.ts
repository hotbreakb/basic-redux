import { ThunkAction } from 'redux-thunk';
import { getUserProfile } from '../../api/github';
import { RootState } from '../store';
import { getUserProfileAsync } from './actions';
import { GithubAction } from './types';

// ReturnType, State, ExtraThunkArg, BasicAction
export function getUserProfileThunk(username: string): ThunkAction<void, RootState, null, GithubAction> {
  return async dispatch => {
    const { request, success, failure } = getUserProfileAsync;

    dispatch(request());
    try {
      const userProfile = await getUserProfile(username);
      dispatch(success(userProfile));
    } catch (e: any) {
      dispatch(failure(e));
    }
  };
}