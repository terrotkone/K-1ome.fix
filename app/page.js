'use client'
import { useState, useEffect } from 'react'

const QUESTIONS = [
 {q:"根據香港電力條例，低壓裝置的絕緣電阻測試，最低應為多少兆歐 (MΩ)？", opts:["0.5 MΩ","1.0 MΩ","2.0 MΩ","5.0 MΩ"], a:1, tip:"依據《電力(接線)規例》第20條，低壓裝置的絕緣電阻值應不少於 1.0 MΩ"},
 {q:"香港單相標準電壓是？", opts:["110V","200V","220V","380V"], a:2, tip:"香港單相 220V，三相 380V"},
 {q:"RCD 的全寫是？", opts:["Residual Current Device","Remote Control Device","Rated Current Device","Resistance Current Device"], a:0, tip:"漏電斷路器，30mA"},
 {q:"接地線的標準顏色是？", opts:["紅色","黑色","黃綠雙色","藍色"], a:2, tip:"黃綠雙色為保護接地"},
 {q:"MCB 的作用是？", opts:["過載及短路保護","漏電保護","防雷保護","隔離作用"], a:0, tip:"微型斷路器，過載+短路"},
 {q:"13A 插座的熔絲應為？", opts:["3A","5A","13A","30A"], a:2, tip:"13A插座用13A熔絲"},
 {q:"電纜截面積 2.5mm² 銅線，約可承載？", opts:["10A","20A","32A","45A"], a:1, tip:"2.5mm² 約 20-24A"},
 {q:"總開關掣應安裝在？", opts:["水喉旁","易觸及及乾燥位置","地台下","浴室內"], a:1, tip:"必須易於操作及安全位置"},
 {q:"接地電阻值住宅應低於？", opts:["1Ω","10Ω","100Ω","1000Ω"], a:1, tip:"一般要求少於100Ω，理想少於10Ω"},
 {q:"電力裝置應每隔多久檢查？", opts:["1年","5年","10年","20年"], a:1, tip:"《電力條例》規定5年一次定期檢查"},
 {q:"相線顏色新色制是？", opts:["紅黃藍","啡黑灰","紅黑綠","黃綠藍"], a:1, tip:"新色制相線為啡、黑、灰"},
 {q:"中性線顏色新色制是？", opts:["黑色","藍色","白色","黃綠"], a:1, tip:"新色制中性線為藍色"},
 {q:"A牌電工可做？", opts:["低壓固定裝置","高壓裝置","發電機裝置","全部"], a:0, tip:"A牌限低壓固定裝置"},
 {q:"RCD應多久按一次測試掣？", opts:["每日","每月","每年","從不"], a:1, tip:"建議每月按一次T掣"},
 {q:"浴室Zone 2內可否裝插座？", opts:["可以","不可以","有RCD就可以","只有13A"], a:1, tip:"Zone 0,1,2內不可裝一般插座"},
 {q:"電線接駁必須在？", opts:["直接埋牆","接線盒內","隨意包膠布","地台下"], a:1, tip:"所有接駁必須在接線盒/箱內"},
 {q:"1.5mm²照明線路MCB應選？", opts:["6A","16A","32A","63A"], a:0, tip:"照明一般用6A或10A"},
 {q:"金屬外殼電器必須？", opts:["接地","接中性","雙重絕緣","不用處理"], a:0, tip:"Class I必須有效接地"},
 {q:"電錶後第一個保護裝置是？", opts:["MCB","總掣","RCD","Fuse"], a:1, tip:"主開關掣作總隔離"},
 {q:"電纜直埋地底深度不少於？", opts:["100mm","300mm","500mm","1000mm"], a:2, tip:"直埋需不少於0.5m深並加保護"},
]

function HeaderLogo(){
  return (
    <div style={{display:'flex', alignItems:'center', gap:10}}>
      <img src="/logo-circle.png" style={{width:52, height:52, borderRadius:'50%', objectFit:'cover', border:'2px solid #000'}} alt="K-ONE" />
      <div>
        <div style={{fontWeight:900, fontSize:22, lineHeight:1}}>K-ONE</div>
        <div style={{fontSize:11, fontWeight:700}}>建一電工培訓中心</div>
      </div>
    </div>
  )
}

export default function Page(){
 const [logged,setLogged]=useState(false)
 const [i,setI]=useState(0)
 const [pick,setPick]=useState(null)
 const [phone,setPhone]=useState('52828378')
 useEffect(()=>{ if(typeof window!=='undefined' && localStorage.getItem('kone_phone')) setLogged(true)},[])
 const cur = QUESTIONS[i]
 const pct = Math.round((i+1)/QUESTIONS.length*100)

 if(!logged){
  return (
   <div style={{minHeight:'100vh', background:'#f6f6f6', display:'flex', justifyContent:'center', paddingTop:60, fontFamily:'sans-serif'}}>
    <div style={{width:380, background:'white', borderRadius:20, padding:28, textAlign:'center', boxShadow:'0 10px 30px rgba(0,0,0,0.08)'}}>
     <div style={{display:'flex', justifyContent:'center'}}><HeaderLogo/></div>
     <div style={{fontWeight:900, marginTop:18, fontSize:22}}>建一電工寶</div>
     <input value={phone} onChange={e=>setPhone(e.target.value)} style={{width:'100%', padding:14, borderRadius:12, border:'1px solid #ddd', marginTop:20}}/>
     <button onClick={()=>{localStorage.setItem('kone_phone',phone); setLogged(true)}} style={{width:'100%', marginTop:20, padding:14, borderRadius:12, background:'#16a34a', color:'white', border:0, fontWeight:700}}>登入</button>
    </div>
   </div>
  )
 }

 return (
  <div style={{maxWidth:480, margin:'0 auto', background:'#f8faf8', minHeight:'100vh', fontFamily:'sans-serif', paddingBottom:20}}>
   <div style={{background:'white', padding:'12px 16px', display:'flex', justifyContent:'space-between', alignItems:'center', position:'sticky', top:0, zIndex:10, borderBottom:'1px solid #eee'}}><HeaderLogo/><div style={{display:'flex', gap:12, fontSize:20}}>☺ 🔔</div></div>
   <div style={{margin:12, background:'linear-gradient(135deg,#4caf50,#2e7d32)', borderRadius:16, padding:18, color:'white', display:'flex', justifyContent:'space-between', alignItems:'center'}}><div><div style={{fontSize:28, fontWeight:900}}>練習測驗</div><div style={{fontSize:13, opacity:0.9, marginTop:2}}>低壓裝置 · 電力條例模擬測試</div></div><div style={{background:'white', color:'#2e7d32', borderRadius:24, padding:'8px 14px', fontWeight:800, fontSize:14}}>{i+1}/{QUESTIONS.length} 題</div></div>
   <div style={{margin:'0 12px', background:'white', borderRadius:14, padding:16}}><div style={{display:'flex', justifyContent:'space-between', fontWeight:800}}><span>答題進度</span><span style={{color:'#2e7d32'}}>{pct}% 完成</span></div><div style={{height:10, background:'#e8f5e9', borderRadius:10, marginTop:12}}><div style={{width:`${pct}%`, height:'100%', background:'#2e7d32', borderRadius:10}}/></div></div>
   <div style={{margin:12, background:'white', border:'1.5px solid #c8e6c9', borderRadius:16, padding:16, minHeight:420}}>
     <div style={{fontWeight:900, fontSize:20}}>第 {i+1} 題 <span style={{background:'#f1f8e9', border:'1px solid #c5e1a5', borderRadius:20, padding:'2px 10px', fontSize:12, marginLeft:8}}>單選題 · 1分</span></div>
     <div style={{fontWeight:700, fontSize:17, marginTop:12}}>{cur.q}</div>
     {cur.opts.map((o,idx)=>{
       const isPick = pick===idx
       const isCorrect = cur.a===idx
       const show = pick!==null
       let st={width:'100%', textAlign:'left', padding:'14px', borderRadius:12, border:'1.5px solid #ddd', background:'white', marginTop:10, display:'flex', justifyContent:'space-between', cursor:'pointer'}
       if(show && isCorrect) st={...st, border:'1.5px solid #2e7d32', background:'#e8f5e9'}
       if(isPick &&!isCorrect) st={...st, border:'1.5px solid #e53935', background:'#ffebee'}
       return <button key={idx} onClick={()=>setPick(idx)} style={st}><span><span style={{width:28,height:28,borderRadius:'50%',border:'2px solid #999',display:'inline-flex',alignItems:'center',justifyContent:'center',marginRight:8,background:isPick?'#2e7d32':'white',color:isPick?'white':'#555'}}>{String.fromCharCode(65+idx)}</span>{o}</span>{show&&isCorrect&&<span style={{background:'#2e7d32',color:'white',borderRadius:20,padding:'4px 10px',fontSize:12}}>正確 ✓</span>}</button>
     })}
     {pick!==null && <div style={{marginTop:14, background:'#f1f8e9', borderRadius:12, padding:12, fontSize:13}}>💡 提示：{cur.tip}</div>}
     <div style={{display:'flex', gap:12, marginTop:18}}><button onClick={()=>{if(i>0){setI(i-1); setPick(null); window.scrollTo({top:0,behavior:'smooth'})}}} style={{flex:1, padding:14, borderRadius:12, border:'2px solid #2e7d32', background:'white', color:'#2e7d32', fontWeight:700}}>← 上一題</button><button onClick={()=>{if(i<QUESTIONS.length-1){setI(i+1); setPick(null); window.scrollTo({top:0,behavior:'smooth'})}else{alert('已完成！')}}} style={{flex:1, padding:14, borderRadius:12, background:'#2e7d32', color:'white', border:0, fontWeight:700}}>{i===QUESTIONS.length-1?'完成':'下一題 →'}</button></div>
   </div>
  </div>
 )
}
