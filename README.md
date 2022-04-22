### configureStore
- 현재 createStore를 사용할 수 없다.
- 프로퍼티와 값이 같을 때만 값을 생략할 수 있다.

```
export const store = configureStore({
    reducer: rootReducer
});
```