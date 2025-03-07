import { FormEvent, useState } from 'react';
import { addTodo } from '../store';
import { useDispatch } from 'react-redux';

export function AddTodo() {
  const [newTodo, setNewTodo] = useState('');
  const dispatch = useDispatch();

  function handleNewTodo(e: FormEvent) {
    e.preventDefault();

    dispatch(addTodo({ newTodo }));

    setNewTodo('');
  }

  return (
    <form onSubmit={handleNewTodo}>
      <input type="text" placeholder="Novo to-do" value={newTodo} onChange={(e) => setNewTodo(e.target.value)} />

      <button type="submit">Adicionar</button>
    </form>
  );
}
