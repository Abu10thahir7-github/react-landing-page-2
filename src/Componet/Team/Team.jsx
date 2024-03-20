import React from 'react'
import './Team.css'
import img2 from './portfolio-2/img2.jpg'
import person1 from '../imgs/person-1.jpg'
import person2 from '../imgs/person-2.jpg'
import person3 from '../imgs/person-3.jpg'
import person4 from '../imgs/person-4.jpg'
function Team() {
  return (
    <div className='team'>
      <div className="team-title text-center ">
        <h2>MEET THE TEAM</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, amet.</p>
      </div>
      

      <div className="img-contai ">
           <div className="team-img text-center px-4">
            <img src={person1} alt="" />
            <h3>Karen Doe</h3>
            <p>Senior Desginer</p>
           </div>
           <div className="team-img text-center px-4">
            <img src={person2} alt="" />
            <h3>Sulaiman</h3>
            <p>Director</p>
           </div>
           <div className="team-img text-center px-4">
            <img src={person3} alt="" />
            <h3>Abu Thahir</h3>
            <p>Senior Desginer</p>
           </div>
           <div className="team-img text-center px-4">
            <img src={person4} alt="" />
            <h3> Jane Doe</h3>
            <p>Project Manager</p>
           </div>
      </div>
    </div>
  )
}

export default Team
