"use client";
import { useState } from "react";
const Q = [
 {q:"5 x 6 =?",a:["30","26","35"],c:0},
 {q:"8 + 7 =?",a:["14","15","16"],c:1},
 {q:"12 - 5 =?",a:["7","8","6"],c:0},
 {q:"Which is a noun?","a":["run","apple","quick"],c:1},
 {q:"2 x 9 =?",a:["18","19","20"],c:0},
 {q:"Cat 嘅中文係?",a:["狗","貓","雀"],c:1},
 {q:"10 / 2 =?",a:["4","5","6"],c:1},
 {q:"Opposite of hot?",a:["cold","warm","big"],c:0},
 {q:"3 x 3 x 3 =?",a:["9","27","18"],c:1},
 {q:"I __ a student.",a:["am","is","are"],c:0},
 {q:"15 + 15 =?",a:["30","25","35"],c:0},
 {q:"Apple 係咩顏色常見?",a:["Red","Blue","Black"],c:0},
 {q:"7 x 7 =?",a:["47","49","42"],c:1},
 {q:"She __ to school.",a:["go","goes","going"],c:1},
 {q:"20 - 12 =?",a:["8","10","7"],c:0},
 {q:"Dog 嘅叫聲?",a:["Meow","Woof","Moo"],c:1},
 {q:"9 x 4 =?",a:["36","32","40"],c:0},
 {q:"How many days in a week?",a:["5","7","6"],c:1},
 {q:"6 x 8 =?",a:["48","42","56"],c:0},
 {q:"I like __.",a:["apples","appleing","appled"],c:0},
];
export default function Page(){
 const [login,setLogin]=useState(false);
 const [i,setI]=useState(0);
 const [score,setScore]=useState(0);
 if(!login) return <div style={{padding:40,textAlign:"center"}}><h1>K-1ONE 復修版</h1><p>登記後即有20題，不再空白</p><button onClick={()=>setLogin(true)} style={{padding:"12px 24px",background:"black",color:"white",borderRadius:8}}>按此登入試做</button></div>
 return <div style={{padding:20,maxWidth:500,margin:"0 auto"}}><h3>題 {i+1}/20 分數 {score}</h3><h2>{Q[i].q}</h2>{Q[i].a.map((x,idx)=><button key={idx} onClick={()=>{if(idx===Q[i].c)setScore(score+1); if(i<19)setI(i+1); else alert("完成! 得分 "+(score+(idx===Q[i].c?1:0))+"/20")}} style={{display:"block",width:"100%",padding:12,margin:"8px 0"}}>{x}</button>)}</div>
}
