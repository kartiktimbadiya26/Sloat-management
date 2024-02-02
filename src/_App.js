import { useState } from 'react';
import './App.css';

function App() {

  let [val1, setval1] = useState('0');
  let [val2, setval2] = useState('0');
  let [v3, setv3] = useState([]);
  let arr = [];

  const calc = () => {
    arr = []
    let temp = val1.split(":");
    let temp1 = Number(temp[0]);
    let temp2 = Number(temp[1]);
    temp = val2.split(":");
    let temp3 = Number(temp[0]);
    let temp4 = Number(temp[1]);
    if (temp2 > 60 || temp4 > 60) {
      alert("enter valid data");
    }
    else {
      for (let i = temp1; i <= temp3; i++) {
        for (let j = 10; j <= 60; j += 10) {
          if (i == temp1 && (j <= temp2)) {
            continue
          }
          else if (i == temp3 && j > temp4) {
            break;
          }
          else {
            arr.push(String(i + ':' + j))
          }
        }
      }
      setv3(arr)
      console.log([...v3])
      console.log(arr)
    }
  }

  return (
    <>
      <input type="text" value={val1} onChange={(e) => { setval1(e.target.value) }} />
      <input type="text" value={val2} onChange={(e) => { setval2(e.target.value) }} />
      <input type="button" value="Click Me" onClick={calc} />
      {
        v3.map((i) => {
          return (
            <>
              <br/>
              {i}
            </>
          )
        })
      }
    </>
  );
}

export default App;
