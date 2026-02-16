import axios from 'axios';
import { useEffect, useState } from 'react';

export default function Payments(){
  const [data,setData]=useState(null);

  useEffect(()=>{
    axios.get("http://localhost:5000/api/payments").then(r=>setData(r.data));
  },[]);

  return (
    <div className="container">
      <h2>Payments</h2>
      {data && <pre className="card">{JSON.stringify(data,null,2)}</pre>}
    </div>
  );
}
