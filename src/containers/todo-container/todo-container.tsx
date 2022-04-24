import { useDispatch, useSelector } from "react-redux";
import { TodoInsert } from "../../components/todo/todo-insert";
import { TodoList } from "../../components/todo/todo-list";
import { RootState } from "../../modules/store";
import { addTodo, toggleTodo, removeTodo } from "../../modules/todos/todos";

export const TodoContainer = () => {
  const todos = useSelector((state: RootState) => state.todos);
  const dispatch = useDispatch();

  const onInsert = (text: string) => {
    dispatch(addTodo({ text }));
  };

  const onToggle = (id: number) => {
    dispatch(toggleTodo({ id }));
  };

  const onRemove = (id: number) => {
    dispatch(removeTodo({ id }));
  };

  return (
    <>
      <TodoInsert onInsert={onInsert} />
      <TodoList todos={todos} onToggle={onToggle} onRemove={onRemove} />
    </>
  );
};
