import { FaPlus } from 'react-icons/fa' 

const AddItem = ({ newItem, setNewItem, handleSubmit }) => {
    return (
      <form onSubmit={handleSubmit} className='addForm'>
        <label htmlFor="addItem">Add Item</label>
        <input 
            autoFocus
            id='addItem'
            type="text" 
            onChange={ (e) => setNewItem(e.target.value)}
            value={newItem}
            placeholder='Add Item'
            required
        />
        <button 
            type="submit"
            aria-label='Add Item'>
                <FaPlus />
            
        </button>

      </form>
    )
}

export default AddItem;