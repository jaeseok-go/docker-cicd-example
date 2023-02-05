import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';

function App() {

  const [lists, setLists] = useState([]);
  const [value, setValue] = useState("");

  useEffect(() => {
    axios.get('/api/values')
        .then(response => {
          console.log('response', response.data);
          setLists(response.data);
        })
  }, [])

  const changeHandler = (event) => {
    setValue(event.currentTarget.value);
  }

  const submitHandler = (event) => {
    event.preventDefault();

    axios.post('/api/value', { value : value })
        .then(response => {
          if (response.data.success) {
            console.log('response.data', response.data);
            setLists([...lists, response.data]);
            setValue("");
          }
          else {
            alert("Fail to insert on DB");
          }
        })
  }

  return (
    <div className="App">
      <header className="App-header">
        <div className="container">

          {lists && lists.map((list, index) => (
            <li key={index}>
              {list.value}
            </li>
          ))}

          <form className="example" onSubmit={submitHandler}>
            <input type="text" placeholder="입력해주세요." onChange={changeHandler} value={value}/>
            <button type="submit">확인</button>
          </form>
        </div>
      </header>
    </div>
  );
}

export default App;
