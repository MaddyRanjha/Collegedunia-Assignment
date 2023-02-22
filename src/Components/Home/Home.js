import React from 'react';
import './Home.css';
import { useState } from 'react';
import { data } from '../../data.js';
import { FaRegImage, FaRegFileVideo, FaSchool, FaCiLocationOn } from 'react-icons/fa';
import {CiLocationOn } from 'react-icons/ci';
import { HiBadgeCheck,HiClipboardCheck,HiOutlineDownload } from "react-icons/hi";
import InfiniteScroll from "react-infinite-scroll-component";

function Home() {
  const [search, setSearch] = useState('');

  const [selectedId, setSelectedId] = useState("");
  const [check, setCheck] = useState(false)

  const handleSelectChange = (event) => {
    setSelectedId(event.target.value);
    setCheck(true);
    
  };

  
  const [dataScroll,setDataScroll] = useState(data.slice(0,3))
  
  

  const fetchMoreData = ()=>{

      
      var dataToBeAdded = data.slice(dataScroll.length,dataScroll.length+3)
      var newData = dataScroll.concat(dataToBeAdded);
      setDataScroll(newData);
  }

  
  if(check){
    const cd_rating =data.map((a)=>{
      return a.collegedunia_rating
    })
    if(selectedId===`Collegedunia_Rating`){

      dataScroll.sort((a,b)=> (parseFloat(a.collegedunia_rating) < parseFloat(b.collegedunia_rating)) ? 1 : -1)
      
      console.log(data);

    }
    if(selectedId===`Fees`){
      dataScroll.sort((a,b)=> (parseInt(a.college_fee) < parseInt(b.college_fee)) ? 1 : -1)
      
      console.log(data);

    }
    if(selectedId===`Users_Rating`){
      dataScroll.sort((a,b)=> (parseFloat(a.user_rating) < parseFloat(b.user_rating)) ? 1 : -1)
      
      console.log(data);

    }
    if(selectedId===`Ascending`){
      dataScroll.sort((a,b)=> (a.college_name > b.college_name) ? 1 : -1)
      
      console.log(data);

    }
    if(selectedId===`Descending`){
      dataScroll.sort((a,b)=> (a.college_name < b.college_name) ? 1 : -1)
      
      console.log(data);

    }

  }
  
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
        
        <div className='inside-Section'>
        
        <InfiniteScroll className='inside-Section1' dataLength={dataScroll.length} next={fetchMoreData} hasMore={dataScroll.length!=data.length ? true : false} endMessage={
            <p style={{ textAlign: 'center' }}>
              <b>Yay! You have seen it all</b>
            </p>
          } > 
        {
            
            dataScroll.filter((item)=>{
                return  item.college_name.toLowerCase().includes(search.toLowerCase())
              }).map((ele)=>(
                <div className='card'>
            <div className='image-Section'>
            <img src={ele.college_img} className='bg-Image'></img>
            <div className='top-left-icon'>
                <div className='img-icon'><FaRegImage /> 42</div>
                <div className='vdo-icon'><FaRegFileVideo />2</div>
            </div>
            <div className="top-right-icon">
                <div className='college-icon'><FaSchool /></div>
                <div className='cd-rating'>
                    <p className='cd'>COLLEGEDUNIA RATING</p>
                    <p className='rating'>{ele.collegedunia_rating}</p>
                </div>
            </div>
                
            <div className="college-logo">
                <img src={ele.college_logo}></img>
            </div>

            <div className="college-name">{ele.college_name}</div>
            
            </div>
            <div className='content'>
                <div className='address'>
                    <span><CiLocationOn />{ele.address}  </span>
                    <span><HiBadgeCheck />  {ele.approval}</span>

                </div>
                <div className='fee-user-rating'>
                    <div className='fee-info'>
                        
                        <span className='fee'>₹{ele.college_fee}/-</span>
                        <span>BE/B.TECT-FIRST YEAR</span>
                        <span>FEE</span>
                    </div>
                    <div className='user-rating'>
                        <span className='fee'>{ele.user_rating}</span>
                        <span>BASED ON 416 USERS</span>
                        <span>REVIEW</span>
                    </div>

                </div>
                <div className='ranking'>
                    <div className='nirf-rank rank'>
                        <span>RANKED 50 OUT OF 300 NIRF</span>
                    </div>
                    <div className='weekly-rank rank'>
                    <span>RANKED 26 OUT OF 16 THE WEEK</span>
                    </div>
                </div>
                <div className='addtional-info'>
                    <span>ADMISSION 2022</span>
                    <span>REVIEWS</span>
                    <span>COURSE & FEE</span>

                </div>
                <div className='apply-brochure-button'>
                    <button className='btn apply'><HiClipboardCheck />APPLY NOW</button>
                    <button className='btn brochure'><HiOutlineDownload />BROCHURE</button>
                </div>

            </div>

        </div>

            ))
        
    }

     </InfiniteScroll>
        
    </div>
      </div>
    </div>
  );
}

export default Home;
