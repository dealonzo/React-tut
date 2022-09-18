import { FaPlus } from 'react-icons/fa';
import { useRef } from 'react'

const AddItem = ({ newItem, setNewItem, handleSubmit }) => {
    
  const inputRef = useRef()

    return (
      <form onSubmit={handleSubmit} className='addForm'>
        <label htmlFor="addItem">Add Item</label>
        <input 
            autoFocus
            ref={inputRef}
            id='addItem'
            type="text" 
            onChange={ (e) => setNewItem(e.target.value)}
            value={newItem}
            placeholder='Add Item'
            required
        />
        <button 
            type="submit"
            aria-label='Add Item'
            onClick={()=> inputRef.current.focus()}>
                <FaPlus />
            
        </button>

      </form>
    )
}

export default AddItem;