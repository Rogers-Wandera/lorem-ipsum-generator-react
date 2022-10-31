import React, { useState } from 'react';
import data from './data';

function App() {
  const [count,setCount] = useState(0);
  const [text, setText] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let amount = parseInt(count);
    let lastIndex = data.length - 1;
    if(count <=0) {
      amount = 1;
    }
    if(count > lastIndex) {
      amount = lastIndex;
    }
    setText(data.slice(0,amount));
    console.log(text)
  }

  return (
    <section className='section-center'>
      <h2>Lorem ipsum generator</h2>
      <form className='lorem-form' onSubmit={handleSubmit}>
        <label htmlFor='amount'>
          paragraphs:
        </label>
        <input 
          type="number" 
          id='amount' 
          name='amount' 
          value={count}
          onChange={(e) =>setCount(e.target.value) }
        />
        <button type='submit' className='btn'>generate</button>
      </form>
      <article className='lorem-text'>
        {
          text.map((item,index) => {
           return  <p key={index}>{item}</p>
          })
        }
      </article>
    </section>
  )
}

export default App;
