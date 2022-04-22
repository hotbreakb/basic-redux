// (1) 액션
const INCREASE = 'counter/INCREASE' as const;
const DECREASE = 'counter/DECREASE' as const;
const INCREASE_BY = 'counter/INCREASE_BY' as const;

// (2) 액션 생성함수
export const increase = () => ({ type: INCREASE });
export const decrease = () => ({ type: DECREASE });
export const increaseBy = (diff: number) => ({ type: INCREASE_BY, payload: diff });

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