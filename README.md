## 동작 미리보기

- Counter
![화면 기록 2022-04-22 오후 10 44 14](https://user-images.githubusercontent.com/64337152/164727059-b2adeafe-3c94-4437-a114-2ed125a8fce6.gif)

- Todo
![화면 기록 2022-04-24 오후 2 08 19](https://user-images.githubusercontent.com/64337152/164957622-4e335bb5-1059-4f75-a112-2d21a55fe8e6.gif)

<br>

## Redux Setting

### RTK(Redux Toolkit)

#### `configureStore`
- `createStore`를 사용할 수 있지만 Redux에서는 좋아하지 않는 방식이다.
  - 작성법: `export const store = createStore(rootReducer);`
  - Redux Toolkit에 있는 `configureStore`를 권장한다.
  - 나의 오해를 풀어준 [stack overflow](https://stackoverflow.com/questions/71944111/redux-createstore-is-deprecated-cannot-get-state-from-getstate-in-redux-ac)
- 이걸 사용하면 `combineReducer`를 사용하지 않아도 된다.
   - `rootState`를 만들 때: `export type RootState = ReturnType<typeof store.getState>;`
- 프로퍼티와 값이 같을 때만 값을 생략할 수 있다. (ES6)

```
export const store = configureStore({
    reducer: rootReducer
});
```

#### `CreateSlice`

- action, action creator를 따로 만들지 않아도 된다. 코드가 확! 줄어든다.
- state를 변경해도 된다. (mutate)

### Component

#### CounterContainer

- `Container`를 만들지 않고 `onIncrease()`일 때 `dispatch(action)`으로 바로 실행할 수도 있다. [➡️ commit](https://github.com/hotbreakb/basic-redux/commit/5cd4c7e9dfbae4dbe015e2c024d4e7e6bee82871)
  - Ducks 패턴으로 만들기 위해 Container로 분리한다.

### Hooks

#### `useSelector`와 `useDispatch`
- Function Component에서는 `useSelector`를 이용해 store의 값을 가져오고, `useDispatch`로 dispatch reference를 받는다.
  - Functional 아님
- Class Component에서는 `mapStateToProps`로 state를 props로 전달하고, `mapDispatchToProps`로 action을 props로 전달하며, `connect`로 store와 state를 연결한다.
  - [공식문서](https://react-redux.js.org/api/hooks)에서는 `connect`보다는 `hook`을 사용하는 것이 `Typescript`와 더 잘 어울린다고 말한다.

**`useSelector`**
- `mapStateToProps`와 거의 유사하다.
  - `useSelector`에서는 `ownProps`를 직접 받을 수 없다.
- component가 렌더링될 때마다 호출된다.
- `store`를 `subscribe`하고 `dispatch`되었을 때 실행된다.

**`useDispatch`**
- 하위 컴포넌트가 `React.memo`처럼 최적화를 하고 있다면 `useCallback()`으로 불필요한 렌더링을 줄일 수 있다.

<br>

## Ducks 패턴
- 리덕스와 연동된 Component는 Container Component, props를 전달해주면 보여주기만 하는 Component는 Presentational Component라고 한다.
- Smart Component / Dumb Component라고도 부른다.

<br>

## Thunk

1. `src/api`에 axios(fetch) 함수 작성
2. module 작성
  - actions `createAsyncAction`
  - types `Action type`
  - thunk `ThunkAction`
  - reducers `createReducer`
3. store
  - `combineReducers`
4. container 만들기
  - `useSelector`, `useDispatch`

## 참고자료

### 공식문서
- [React-Redux](https://react-redux.js.org/)

### 블로그
- [벨로퍼트의 블로그](https://react.vlpt.us) 강추👍
  - 리액트와 리덕스의 관계를 이해할 수 있도록 도와주는 기초 문서이다.
  - 2020년쯤 작성된 문서이지만 2022년인 지금 보는 데도 큰 문제가 없다.
- [Todo에 리덕스 툴킷 적용](https://velog.io/@jwisgenius/Redux-Toolkit-withReact-Typescript)
  - `createSlice`
- [Redux (3) 리덕스를 리액트와 함께 사용하기](https://velog.io/@velopert/Redux-3-%EB%A6%AC%EB%8D%95%EC%8A%A4%EB%A5%BC-%EB%A6%AC%EC%95%A1%ED%8A%B8%EC%99%80-%ED%95%A8%EA%BB%98-%EC%82%AC%EC%9A%A9%ED%95%98%EA%B8%B0-nvjltahf5e)
