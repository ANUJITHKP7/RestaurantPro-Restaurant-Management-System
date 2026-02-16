import axios from 'axios';
import { useEffect, useState } from 'react';

export default function Menu(){
  const [data,setData]=useState(null);

  useEffect(()=>{
    axios.get("http://localhost:5000/api/menu").then(r=>setData(r.data));
  },[]);

  return (
    <div className="container">
      <h2>Menu</h2>
      {data && <pre className="card">{JSON.stringify(data,null,2)}</pre>}
    </div>
  );
}
