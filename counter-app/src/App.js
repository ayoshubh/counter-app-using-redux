import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { addText } from './store/action';

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
    const data={name}
    dispatch(addText(data))

    setName('')
  }

  return (
    <div style={{backgroundColor:'black', color:'white', height:'100vh'}}>
    <h1>Counter App</h1>
    {/* <h2>{counter}</h2> */}
    <button onClick={increment}>Increment</button>
    <button onClick={decrement}>Decrement</button>
    <br/><br/>
    <form onSubmit={handleSubmit}>
    <input name="name" type="text" placeholder="enter text" value={name}  onChange={(e) => setName(e.target.value)}/>
    <button >Add</button>
    </form>
    
    {
      list.map((a)=><div>
        <li>{a.name}</li>
      </div>)
    }
    
    </div>

  );
}

export default App;
