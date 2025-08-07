// App.js (buggy)
import Counter from './Counter';
import Header from './Header';
import TodoList from './TodoList';
import { useState } from 'react';

function App() {
  const [title, setTitle] = useState('Bienvenue');
  // pas de todos définis, ou passe une valeur non-tableau
  const todos = undefined; // BUG

  return (
    <div>
      <Header title={title} />
      <Counter />
      <TodoList todos={todos} />
      <button onClick={() => setTitle('Titre mis à jour')}>Changer le titre</button>
    </div>
  );
}

export default App;
