const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

app.get('/api/dashboard', (req,res)=>{
  res.json({ revenue:12450, orders:38, reservations:14, customers:120 });
});

app.get('/api/orders', (req,res)=>{
  res.json([{ id:1, item:'Pizza', status:'Preparing' }]);
});

app.get('/api/reservations', (req,res)=>{
  res.json([{ id:1, name:'John', time:'7:30 PM', guests:4 }]);
});

app.get('/api/menu', (req,res)=>{
  res.json([{ id:1, name:'Pizza', price:350 }]);
});

app.get('/api/payments', (req,res)=>{
  res.json([{ id:1, amount:850, status:'Paid' }]);
});

app.get('/api/profile', (req,res)=>{
  res.json({ name:'Demo User', role:'Admin', loyalty:120 });
});

app.listen(5000, ()=>console.log('Backend running on 5000'));
