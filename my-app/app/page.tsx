'use client'

import { useEffect, useState } from 'react';

export default function Home() {
  const [responseBody, setResponseBody] = useState([]);
  const [requestValue, setRequestValue] = useState('');
  const BASE_URL = 'http://localhost:5555';

  const handleInputChange = (event : any) => {
    let whiteList = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    let requestValid = true;

    for (let i in event.target.value) {
      if (!whiteList.includes(event.target.value[i])) {
        requestValid = false;
      }
    }

    if (requestValid) {
      setRequestValue(event.target.value);
    }
  }

  const handleSubmit = (type: string) => {
    fetch(`${BASE_URL}${type}`, {
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        input: requestValue
      }),
      method: 'POST'
    })
    .then(response => response.json())
    .then((res) => {
      alert(res.message);
      if (res.data) {
        console.log(res.data);
        setResponseBody(res.data);
      }
    })
  }

  useEffect(() => {
  }, [responseBody])

  return (
    <main>
      <input type="text" value={requestValue} onChange={handleInputChange}/>
      <br />
      <br />
      <button type="button" onClick={() => handleSubmit('/segitiga')}>
        Generate Segitiga
      </button>
      <span/>
      <button type="button" onClick={() => handleSubmit('/bilangan-ganjil')}>
        Generate Bilangan Ganjil
      </button>
      <span/>
      <button type="button" onClick={() => handleSubmit('/bilangan-prima')}>
        Generate Bilangan Prima
      </button>
      <br />
      <h1>Result:</h1>
      {
        responseBody.length > 0 && responseBody.map((row) => {
          return (
            <div key={row}>
              {row}
            </div>
          )
        })
      }
    </main>
  );
}
