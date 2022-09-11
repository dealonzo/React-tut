import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import {  useState } from 'react'

function App() {

  const [items, setItems] = useState([
    {
        id: 1,
        check: false,
        item: 'One half pound bag'
    },
    {
        id: 2,
        check: true,
        item: 'item 2'
    },
    {
        id: 3,
        check: false,
        item: 'item 3'
    }
  ]);

  const handleCheck = (id) => {
    const listItems = items.map((item) => item.id === id ? { ...item, check: !item.check } : item );
    setItems(listItems)
    localStorage.setItem('shoppingList', JSON.stringify(listItems));
  }

  const handleDelete = (id) => {
      const listItems = items.filter( (item)=> item.id !== id)
      setItems(listItems)
      localStorage.setItem('shoppingList', JSON.stringify(listItems));
  }

  return (
    <div className="App">
      <Header title="Groceries"/>
      <Content 
        items={items} 
        setItems={setItems} 
        handleCheck={handleCheck} 
        handleDelete={handleDelete}/>
      <Footer length={items.length}/>
    </div>
  );
}

export default App;
