import React from 'react';
import './Home.css';
import { useState } from 'react';
import { data } from '../../data.js';
import Card from '../Card/Card';

function Home() {
  const [search, setSearch] = useState('');

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
  // console.log(search);
  return (
    <div className="main-Section">
      <div className="header">
        <div className="log">Logo</div>
        <div className="functionalities">
          <input
            className='search-Input'
            type="text"
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Enter College Name"
          ></input>
          <form className='dropdown'>
            <select className='opts' value={selectedId} onChange={handleSelectChange}>
              <option value=""> Filter By </option>
              <option value="Collegedunia_Rating"> Collegedunia Rating </option>
              <option value="Fees"> Fees </option>
              <option value="Users_Rating"> Users Rating </option>
              <option value="Ascending"> Ascending </option>
              <option value="Descending"> Descending </option>
            </select>
          </form>
        </div>
      </div>
      <div className="hero-Section">
        <Card value={search} />
      </div>
    </div>
  );
}

export default Home;
