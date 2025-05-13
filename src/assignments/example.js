import { useEffect, useState } from "react";
import './example.css'


function App() {
  // 과제1-1: 7-1, 7-2강을 듣고 이곳에 투두리스트 컴포넌트를 작성해주세요.
  const [toDo, SettoDo] = useState("");
  const [toDoes,SetoDoes]=useState([]);

  useEffect(()=>{
    console.log(toDoes);
  },[toDoes]);

  function onSubmit(event){
      event.preventDefault();
  
  SetoDoes([ toDo, ...toDoes] );
  SettoDo("");
  }

  return (
    <div className="center">
      <form className="form" onSubmit={onSubmit}>
        <h1>My To Dos  ({toDoes.length })</h1>
        <div className="input-container">
        <input className="inp" type="text" placeholder="Write your to do " 
               onChange={(e)=>SettoDo(e.target.value)}
               value={toDo}
        />
        <button className="btn">Add To DO</button> 
        </div>
        <hr/>
        <ul>
      {toDoes.map((itm, index)=>{
        return(
        <li className="list" key={index}>itm:{itm} , index:{index}
         <button onClick={()=>{
      
          const tmpDoes=toDoes.filter((toDo,id) =>index!==id)
          SetoDoes(tmpDoes );
         }}

         style={{color:"red"} }>X</button></li>)

      })}
      </ul>
      </form>


      
    </div>
  );
}

export default App;
