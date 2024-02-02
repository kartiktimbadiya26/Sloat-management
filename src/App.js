import { useState } from 'react';
import './App.css';

function App() {

  let [val1, setval1] = useState('');
  let [val2, setval2] = useState('');
  let [v3, setv3] = useState([]);
  let arr = [];

  const calc = () => {
    arr = []
    let temp, temp1, temp2, temp3, temp4, temp5, temp6, te, i;
    temp = val1.split(":");
    temp1 = Number(temp[0]);
    if (temp.length === 1) {
      temp2 = Number('00');
    }
    else {
      temp2 = Number(temp[1]);
    }
    temp2 = String(temp2);
    temp = temp2.split('');
    temp3 = Number(temp[temp.length - 1])
    temp = val2.split(":");
    temp4 = Number(temp[0]);
    if (temp.length === 1) {
      temp5 = Number('00');
    }
    else {
      temp5 = Number(temp[1]);
    }
    temp5 = String(temp5);
    temp = temp5.split('');
    temp6 = Number(temp[temp.length - 1])
    temp2 = Number(temp2);
    temp5 = Number(temp5);
    for (i = temp1; i <= temp4; i++) {
      for (let j = 0; j <= 5; j++) {
        te = Number(String(j) + String(temp3))
        if (i == temp1 && temp2 > te) {
          continue;
        }
        else if (i == temp4 && temp5 < te) {
          break;
        } else {
          if (te < 10) {
            arr.push(i + ':' + '0' + te)
          }
          else {
            arr.push(i + ':' + te)
          }
        }
      }
    }
    if (temp2 != temp5) {
      if ((te - 10) != temp5) {
        if (te < 50) {
          arr.push((i - 1) + ':' + te)
        }
        else {
          arr.push((i) + ':' + String('0' + temp3))
        }
      }
    }
    setv3(arr)
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
              <br />
              {i}
            </>
          )
        })
      }
    </>
  );
}

export default App;
