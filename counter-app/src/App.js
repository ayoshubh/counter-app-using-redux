import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { addText, deleteText } from './store/action';

function App() {
  const [name, setName] = useState('')
  // const [list, setList] = useState([])
  // const counter = useSelector((state) => state.counter);
  const list = useSelector((state)=> state)
  const dispatch = useDispatch()
  const increment = () =>{
    dispatch({ type: 'INC'});
  }
  const decrement = () =>{
    dispatch({ type: 'DEC'});
  }


  const handleSubmit = (e) =>{
    e.preventDefault();
    // const data={name}
    dispatch(addText(name))

    setName('')
  }

  
  console.log(list)
  return (
    <div style={{backgroundColor:'black', color:'white', height:'100vh'}}>
    {/* <h1>Counter App</h1>
    <h2>{counter}</h2>
    <button onClick={increment}>Increment</button>
    <button onClick={decrement}>Decrement</button>
    <br/><br/> */}
    <h1>Task Manager</h1>
    <form onSubmit={handleSubmit}>
    <input name="name" type="text" placeholder="enter text" value={name}  onChange={(e) => setName(e.target.value)}/>
    <button >Add</button>
    </form>
    
    {
      list.map((a)=><div>
        <li>
          {a}
          <button onClick={()=>dispatch(deleteText(a))}>Delete </button>
          </li>
      </div>)
    }
    
    </div>

  );
}

export default App;
