import axios from 'axios';
import { useEffect, useState } from 'react';

export default function Dashboard(){
  const [data,setData]=useState(null);

  useEffect(()=>{
    axios.get("http://localhost:5000/api/dashboard").then(r=>setData(r.data));
  },[]);

  return (
    <div className="container">
      <h2>Dashboard</h2>
      {data && <pre className="card">{JSON.stringify(data,null,2)}</pre>}
    </div>
  );
}
