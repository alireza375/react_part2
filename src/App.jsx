import './App.css'
import Counter from './Counter';
import Team from './Team';
import Users from './Users';
import Friends from './Friends';

function App() {

  function handleClick() {
    alert('button clicked');
  }

  const handleClick2 = () => {
    alert('button clicked 2');
  }

  const addToFive = (num) => {
    alert(num + 5);
  }

  return (
    <>
      
      <h3>React Core Concept part 2</h3>

      <Users></Users>
      <Friends></Friends>

      {/* For HTML */}
      {/* <button onClick="handleClick()">Click Me</button> */}
      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClick2}>Click2 Me</button>
      <button onClick={() => addToFive(4)}>Click Four</button>
      <Team></Team>
      <Counter></Counter>
    </>
  )
}

export default App
