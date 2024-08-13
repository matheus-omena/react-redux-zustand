import { Provider as ReduxProvider } from 'react-redux';

import { AddTodo } from './components/add-todo';
import { TodoList } from './components/todo-list';
import { store } from './store';

export default function App() {
  return (
    <ReduxProvider store={store}>
      <AddTodo />
      <TodoList />
    </ReduxProvider>
  );
}
