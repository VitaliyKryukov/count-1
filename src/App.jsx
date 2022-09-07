import React from 'react'
import './index.scss';

function App() {


const [count,setCount]=React.useState(0);

const onClickPlus = () => {
   setCount(count +1)
}
const onClickMinus = () => {
   setCount(count -1)
}
const onClickPlusTwo = () => {
   setCount(count +2)
}
const onClickMinusTwo = () => {
   setCount(count -2)
}


   return (
      <div className="App">
         <div>
            <h2>Счетчик</h2>
            <h1>{count}</h1>
            <button  onClick={onClickMinus} className='minus'>- Минус</button>
            <button onClick={onClickMinusTwo}  className='minusTwo'>- Четное </button>
            <button onClick={onClickPlus}  className='plus'>+ Плюс</button>
            <button onClick={onClickPlusTwo}  className='plusTwo'>+ Четное </button>
 
         </div>
      </div>
   );
}

export default App;
