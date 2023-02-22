import React from 'react'
import './Card.css'
import { useState } from 'react';
import { data } from '../../data.js';
import { FaRegImage, FaRegFileVideo, FaSchool, FaCiLocationOn } from 'react-icons/fa';
import {CiLocationOn } from 'react-icons/ci';
import { HiBadgeCheck,HiClipboardCheck,HiOutlineDownload } from "react-icons/hi";
import InfiniteScroll from "react-infinite-scroll-component";

function Card(props) {
    const search =props.value;
    
    
    // console.log(search);
  return (
    <div className='inside-Section'>
        
        {
            
            data.filter((item)=>{
                return search.toLowerCase() === '' ? item : item.college_name.toLowerCase().includes(search)
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
                        
                        <span className='fee'>{ele.college_fee}/-</span>
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
    </div>
  )
}

export default Card