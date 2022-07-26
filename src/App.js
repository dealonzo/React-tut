import Header from './Header';
import SearchItem from './SearchItem'
import Content from './Content';
import Footer from './Footer';
import AddItem from './AddItem'
import {  useState, useEffect } from 'react'

function App() {
  const API_URL = 'http://localhost:3500/items'
  
  const [items, setItems] = useState(JSON.parse(localStorage.getItem('shoppingList')) || []);
  const [newItem, setNewItem] = useState('')
  const [search, setSearch] = useState('')

  useEffect( () => {
    localStorage.setItem('shoppingList', JSON.stringify(items));
  },[items])

  const addItem = (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1
    const myNewItem = {id, checked:false, item}
    const listItems = [...items, myNewItem];
    setItems(listItems)
  }

  const handleCheck = (id) => {
    const listItems = items.map((item) => item.id === id ? { ...item, check: !item.check } : item );
    setItems(listItems)
  }

  const handleDelete = (id) => {
    const listItems = items.filter( (item)=> item.id !== id)
    setItems(listItems)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    addItem(newItem)
    setNewItem('');
  }

  return (
    <div className="App">
      <Header title="Groceries"/>
      <AddItem 
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}/>
      <SearchItem 
        search={search}
        setSearch={setSearch}
      />
      <Content 
        items={items.filter((item)=> ((item.item.toLowerCase()).includes(search.toLocaleLowerCase())))} 
        setItems={setItems} 
        handleCheck={handleCheck} 
        handleDelete={handleDelete}/>
      <Footer length={items.length}/>
    </div>
  );
}

export default App;
