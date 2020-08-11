import React from 'react';
import './App.css';
import List from './components/List';
import Counter from './components/Counter';

const data = [
  { id: 1, name: 'Quan', age: 20 },
  { id: 2, name: 'Minh', age: 17 },
  { id: 3, name: 'Nghia', age: 17 },
]
function App() {
  return (
    <div className="App">
      <List
        data={data}
        render={(item) => (
          <div>{item.name} <span>{item.age}</span></div>
        )}
      />
      <Counter>
        {({count})=>(<h1>{count}</h1>)}
      </Counter>
    </div>
  );
}

export default App;
