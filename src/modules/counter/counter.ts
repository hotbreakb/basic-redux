import { delay, put, takeEvery, takeLatest } from 'redux-saga/effects';

// (1) 액션
const INCREASE = 'counter/INCREASE' as const;
const DECREASE = 'counter/DECREASE' as const;
const INCREASE_BY = 'counter/INCREASE_BY' as const;
const INCREASE_ASYNC = 'counter/INCREASE_ASYNC';
const DECREASE_ASYNC = 'counter/DECREASE_ASYNC';

// (2) 액션 생성함수
export const increase = () => ({ type: INCREASE });
export const decrease = () => ({ type: DECREASE });
export const increaseBy = (diff: number) => ({ type: INCREASE_BY, payload: diff });
export const increaseAsync = () => ({ type: INCREASE_ASYNC });
export const decreaseAsync = () => ({ type: DECREASE_ASYNC });

function* increaseSaga() {
    yield delay(1000);
    yield put(increase());
}

function* decreaseSaga() {
    yield delay(1000);
    yield put(decrease());
}

export function* counterSaga() {
    yield takeEvery(INCREASE_ASYNC, increaseSaga);
    yield takeLatest(DECREASE_ASYNC, decreaseSaga);
}

// (3) 액션 타입
type CounterActionType = ReturnType<typeof increase> | ReturnType<typeof decrease> | ReturnType<typeof increaseBy>

// (4) 초기 상태 선언
type State = {
    count: number,
}

const initialState: State = {
    count: 0,
}

// (5) 리듀서 선언
export default function counter(state = initialState, action: CounterActionType) {
    switch (action.type) {
        case INCREASE: return { count: state.count + 1 };
        case DECREASE: return { count: state.count - 1 };
        case INCREASE_BY: return { count: state.count + action.payload };
        default: return state;
    }
}