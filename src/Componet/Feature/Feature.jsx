import React from 'react'
import './Feature.css'
import CommentIcon from '@mui/icons-material/Comment';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import GroupsIcon from '@mui/icons-material/Groups';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
function Feature() {
  return (
    <section id='feature'>
    <div className='feature'>
      <div id="text">

      <h2 className='feture'>FEATURES</h2>
      </div>
   <div className="icons container">
   <div className="col">
   <CommentIcon className='icon' />
    <h3 className='h3'>lorem ipusm</h3>
     <p className='p'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, in.</p>
   </div>
   <div className="col">
   <VolumeUpIcon className='icon' />
    <h3 className='h3'>lorem ipusm</h3>
     <p className='p'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, in.</p>
   </div>
   <div className="col">
   <GroupsIcon className='icon' />
    <h3 className='h3'>lorem ipusm</h3>
     <p className='p'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, in.</p>
   </div>
   <div className="col">
   <AutoFixHighIcon className='icon' />
    <h3 className='h3'>lorem ipusm</h3>
     <p className='p'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, in.</p>
   </div>
 
   </div>
    </div>
    </section>
  )
}

export default Feature
