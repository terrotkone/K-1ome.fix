'use client'
import { useState, useEffect } from 'react'

const QUESTIONS = [
  { q:"根據香港電力條例，低壓裝置的絕緣電阻測試，最低應為多少兆歐(MΩ)？", opts:{A:"0.5 MΩ",B:"1.0 MΩ",C:"2.0 MΩ",D:"5.0 MΩ"}, a:"B", tip:"依據《電力(接線)規例》第20條，不少於 1.0 MΩ" },
  { q:"住宅配電箱安裝時必須進行的測試？", opts:{A:"導通測試",B:"絕緣電阻測試",C:"接地電阻測試",D:"RCD測試"}, a:"B", tip:"絕緣電阻測試為法定必須" },
  { q:"香港單相標準電壓？", opts:{A:"110V",B:"200V",C:"220V",D:"380V"}, a:"C", tip:"香港單相 220V" },
  { q:"RCD 全寫？", opts:{A:"Residual Current Device",B:"Remote Control Device",C:"Rated Current Device",D:"Resistance Device"}, a:"A", tip:"漏電斷路器" },
]

export default function Page(){
  const [logged,setLogged]=useState(false)
  const [phone,setPhone]=useState('52828378')
  const [i,setI]=useState(0)
  const [pick,setPick]=useState(null)

  useEffect(()=>{
    if(typeof window!=='undefined' && localStorage.getItem('kone_phone')) setLogged(true)
  },[])

  const login = ()=>{
    localStorage.setItem('kone_phone', phone)
    setLogged(true)
  }

  if(!logged){
    return (
      <div style={{minHeight:'100vh', background:'#f6f6f6', display:'flex', alignItems:'center', justifyContent:'center'}}>
        <div style={{width:360, background:'white', borderRadius:20, padding:24}}>
          <div style={{textAlign:'center'}}>
            <div style={{width:100,height:100, margin:'0 auto', borderRadius:'50%', border:'1px solid #ddd', display:'flex', alignItems:'center', justifyContent:'center', fontWeight:900, fontSize:28}}>
              <span style={{color:'#8B4513'}}>S</span><span style={{color:'black'}}>S</span><span style={{color:'#888'}}>S</span>
            </div>
            <div style={{fontWeight:900, marginTop:8}}>K-ONE 建一電工培訓中心</div>
            <h2>建一電工寶</h2>
          </div>
          <div>電話號碼</div>
          <input value={phone} onChange={e=>setPhone(e.target.value)} style={{width:'100%', padding:12, borderRadius:10, border:'1px solid #ddd', marginTop:6}}/>
          <div style={{marginTop:12}}>密碼</div>
          <input type="password" placeholder="請輸入密碼" style={{width:'100%', padding:12, borderRadius:10, border:'1px solid #ddd', marginTop:6}}/>
          <button onClick={login} style={{width:'100%', marginTop:20, padding:14, borderRadius:12, background:'#16a34a', color:'white', border:0, fontWeight:700}}>登入</button>
          <div style={{fontSize:11, color:'#888', marginTop:10, textAlign:'center'}}>啡黑灰保留版</div>
        </div>
      </div>
    )
  }

  const cur = QUESTIONS[i]
  return (
    <div style={{maxWidth:460, margin:'0 auto', background:'#f5faf6', minHeight:'100vh'}}>
      <div style={{background:'white', padding:14, display:'flex', justifyContent:'space-between', alignItems:'center'}}>
        <div style={{fontWeight:900}}><span style={{color:'#8B4513'}}>S</span><span style={{color:'black'}}>S</span><span style={{color:'#888'}}>S</span> K-ONE</div>
        <span>👤</span>
      </div>
      <div style={{margin:12, background:'linear-gradient(90deg,#1aaf5d,#2ecc71)', borderRadius:14, padding:16, color:'white', display:'flex', justifyContent:'space-between'}}>
        <div><div style={{fontSize:20, fontWeight:900}}>練習測驗</div><div style={{fontSize:12}}>低壓裝置 · 電力條例模擬測試</div></div>
        <div style={{background:'white', color:'#0f9d58', borderRadius:20, padding:'6px 12px'}}>{i+1} / {QUESTIONS.length} 題</div>
      </div>
      <div style={{margin:12, background:'white', borderRadius:12, padding:12}}>
        <div style={{display:'flex', justifyContent:'space-between', fontWeight:700}}><span>答題進度</span><span style={{color:'#0f9d58'}}>{i+1}/{QUESTIONS.length} · {Math.round((i+1)/QUESTIONS.length*100)}% 完成</span></div>
        <div style={{height:8, background:'#e0f2e9', borderRadius:8, marginTop:8}}><div style={{width:`${(i+1)/QUESTIONS.length*100}%`, height:'100%', background:'#0f9d58'}}/></div>
      </div>
      <div style={{margin:12, background:'white', border:'1.5px solid #a5d6a7', borderRadius:14, padding:14}}>
        <div style={{fontWeight:800}}>第 {i+1} 題</div>
        <p style={{fontWeight:600}}>{cur.q}</p>
        {Object.entries(cur.opts).map(([k,v])=>(
          <button key={k} onClick={()=>setPick(k)} style={{width:'100%', textAlign:'left', padding:12, marginTop:8, borderRadius:10, border: pick===k? '2px solid #0f9d58':'1px solid #ddd', background: (pick && k===cur.a)?'#e8f5e9':'white', display:'flex', justifyContent:'space-between'}}>
            <span>{k}. {v}</span>{pick && k===cur.a && <span style={{background:'#0f9d58', color:'white', fontSize:10, borderRadius:10, padding:'2px 8px'}}>正確答案 ✓</span>}
          </button>
        ))}
        {pick && <div style={{marginTop:10, background:'#f1f8e9', borderRadius:8, padding:10, fontSize:13}}>💡 提示：{cur.tip}</div>}
        <div style={{display:'flex', gap:10, marginTop:14}}>
          <button onClick={()=>{if(i>0){setI(i-1); setPick(null)}}} style={{flex:1, padding:12, borderRadius:10, border:'1px solid #0f9d58', background:'white', color:'#0f9d58'}}>← 上一題</button>
          <button onClick={()=>{if(i<QUESTIONS.length-1){setI(i+1); setPick(null)}}} style={{flex:1, padding:12, borderRadius:10, background:'#0f9d58', color:'white', border:0}}>下一題 →</button>
        </div>
      </div>
    </div>
  )
}
