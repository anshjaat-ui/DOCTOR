'use client';
import {useState} from 'react';
export default function AIForm(){
 const [problem,setProblem]=useState("");const [res,setRes]=useState("");
 const submit=async(e)=>{e.preventDefault();
 const r=await fetch('/api/ai-test',{method:'POST',body:JSON.stringify({problem})});
 const d=await r.json();setRes(d.result);}
 return <div><form onSubmit={submit}>
 <input value={problem} onChange={e=>setProblem(e.target.value)} placeholder="Problem"/>
 <button>Analyze</button></form>
 <p>{res}</p></div>;
}