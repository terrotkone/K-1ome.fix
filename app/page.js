'use client'
import { useState, useEffect } from 'react'
export default function Page(){
 const [logged,setLogged]=useState(false)
 const [phone,setPhone]=useState('52828378')
 useEffect(()=>{ if(localStorage.getItem('kone_phone')) setLogged(true)},[])
 if(!logged){
  return <div style={{minHeight:'100vh', background:'#f6f6f6', display:'flex', justifyContent:'center', paddingTop:50}}>
   <div style={{width:380, background:'white', borderRadius:20, padding:28, textAlign:'center'}}>
    <div style={{width:140,height:140,margin:'0 auto',borderRadius:'50%',border:'1px solid #ddd',display:'flex',alignItems:'center',justifyContent:'center',flexDirection:'column'}}>
     <div style={{fontWeight:900,fontSize:36}}><span style={{color:'#8B4513'}}>S</span><span style={{color:'black'}}>S</span><span style={{color:'#888'}}>S</span></div>
     <div style={{fontWeight:900}}>K-ONE</div>
    </div>
    <div style={{fontWeight:900,marginTop:16,fontSize:22}}>建一電工寶</div>
    <input value={phone} onChange={e=>setPhone(e.target.value)} style={{width:'100%',padding:14,borderRadius:12,border:'1px solid #ddd',marginTop:20}}/>
    <button onClick={()=>{localStorage.setItem('kone_phone',phone); setLogged(true)}} style={{width:'100%',marginTop:20,padding:14,borderRadius:12,background:'#16a34a',color:'white',border:0,fontWeight:700}}>登入</button>
   </div>
  </div>
 }
 return <div style={{padding:20,textAlign:'center'}}>登入成功！練習頁稍後加返</div>
}
