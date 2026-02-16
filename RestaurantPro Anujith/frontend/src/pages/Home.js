import axios from 'axios';
import { useEffect, useState } from 'react';

export default function Home(){
  const [data,setData]=useState(null);

  useEffect(()=>{
    
  },[]);

  return (
    <div className="container">
      <h2>Home</h2>
      {data && <pre className="card">{JSON.stringify(data,null,2)}</pre>}
    </div>
  );
}
