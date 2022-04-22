## Redux Setting

### configureStore
- 현재 `createStore`를 사용할 수 없다.
- 프로퍼티와 값이 같을 때만 값을 생략할 수 있다.

```
export const store = configureStore({
    reducer: rootReducer
});
```

### `useSelector`와 `useDispatch`
- Function Component에서는 `useSelector`를 이용해 store의 값을 가져오고, `useDispatch`로 dispatch reference를 받는다.
  - Functional 아님
- Class Component에서는 `mapStateToProps`로 state를 props로 전달하고, `mapDispatchToProps`로 action을 props로 전달하며, `connect`로 store와 state를 연결한다.
  - [공식문서](https://react-redux.js.org/api/hooks)에서는 `connect`보다는 `hook`을 사용하는 것이 `Typescript`와 더 잘 어울린다고 말한다.

#### `useSelector`
- `mapStateToProps`와 거의 유사하다.
- component가 렌더링될 때마다 호출된다.
- `store`를 `subscribe`하고 `dispatch`되었을 때 실행된다.

#### `useDispatch`
- 하위 컴포넌트가 `React.memo`처럼 최적화를 하고 있다면 `useCallback()`으로 불필요한 렌더링을 줄일 수 있다.

<br>

## Ducks 패턴
- 리덕스와 연동된 Component는 Container Component, props를 전달해주면 보여주기만 하는 Component는 Presentational Component라고 한다.
- Smart Component / Dumb Component라고도 부른다.

<br>

## 구현

### CounterContainer

- `Container`를 만들지 않고 `onIncrease()`일 때 `dispatch(action)`으로 바로 실행할 수도 있다. [➡️ commit](https://github.com/hotbreakb/basic-redux/commit/5cd4c7e9dfbae4dbe015e2c024d4e7e6bee82871)
  - Ducks 패턴으로 만들기 위해 Container로 분리한다.
![화면 기록 2022-04-22 오후 10 44 14](https://user-images.githubusercontent.com/64337152/164727059-b2adeafe-3c94-4437-a114-2ed125a8fce6.gif)


### 참고자료
- [Redux (3) 리덕스를 리액트와 함께 사용하기](https://velog.io/@velopert/Redux-3-%EB%A6%AC%EB%8D%95%EC%8A%A4%EB%A5%BC-%EB%A6%AC%EC%95%A1%ED%8A%B8%EC%99%80-%ED%95%A8%EA%BB%98-%EC%82%AC%EC%9A%A9%ED%95%98%EA%B8%B0-nvjltahf5e)
