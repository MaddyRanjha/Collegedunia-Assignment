import {data} from "./data.js"
import './App.css';
import { useState } from "react";
import Home from "./Components/Home/Home.js";

function App() {
  const [search, setSearch] = useState("");
  const [selectedId, setSelectedId] = useState("");
  const [check, setCheck] = useState(false)

  const handleSelectChange = (event) => {
    setSelectedId(event.target.value);
    setCheck(true);
    
  };
  // if(!selectedId && check){
    
  //   setCheck(!check);
    
  // }
  // console.log(check)
  
  if(check){
    const cd_rating =data.map((a)=>{
      return a.collegedunia_rating
    })
    if(selectedId===`Collegedunia_Rating`){

      // data.sort((a, b) => (a > b) ? 1 : -1);
      data.sort((a,b)=> (parseFloat(a.collegedunia_rating) < parseFloat(b.collegedunia_rating)) ? 1 : -1)
      
      console.log(data);

    }
    if(selectedId===`Fees`){
      data.sort((a,b)=> (parseInt(a.college_fee) < parseInt(b.college_fee)) ? 1 : -1)
      
      console.log(data);

    }
    if(selectedId===`Users_Rating`){
      data.sort((a,b)=> (parseFloat(a.user_rating) < parseFloat(b.user_rating)) ? 1 : -1)
      
      console.log(data);

    }
    if(selectedId===`Ascending`){
      data.sort((a,b)=> (a.college_name > b.college_name) ? 1 : -1)
      
      console.log(data);

    }
    if(selectedId===`Descending`){
      data.sort((a,b)=> (a.college_name < b.college_name) ? 1 : -1)
      
      console.log(data);

    }

  }
  
  
  return (
    <div className="App">
      {/* <h1>Hello There!!</h1>
      <input type="text" onChange={(e)=> setSearch(e.target.value)} placeholder="Enter College Name"></input>
      <div>
      <select value={selectedId} onChange={handleSelectChange}>
      <option value=""> Filter By </option>
              <option value="Collegedunia_Rating"> Collegedunia Rating </option>
              <option value="Fees"> Fees </option>
              <option value="Users_Rating"> Users Rating </option>
              <option value="Ascending"> Ascending </option>
              <option value="Descending"> Descending </option>
      </select>
      {selectedId && <p>You selected {selectedId}</p>}
    </div>
     

      {
        
        data.filter((item)=>{
          return search.toLowerCase() === '' ? item : item.college_name.toLowerCase().includes(search)
        })
        .map((item)=>(
          <div>
          <h2 key={item.id}>{item.college_name}</h2>
          <img src={item.college_img}></img>

          </div>
        ))
      } */}
      <Home /> 
    </div>
  );
}

export default App;
