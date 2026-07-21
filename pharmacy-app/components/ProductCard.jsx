'use client';
import {useRouter} from 'next/navigation';
export default function ProductCard({name,price}){
 const r=useRouter();
 return <div style={{border:"1px solid #ccc",padding:"10px"}}>
 <h3>{name}</h3><p>{price}</p>
 <button onClick={()=>r.push('/checkout')}>Buy</button>
 </div>;
}