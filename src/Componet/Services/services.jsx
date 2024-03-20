import React from "react";
import "./services.css";
import WbAutoIcon from '@mui/icons-material/WbAuto';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import TranslateIcon from '@mui/icons-material/Translate';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import DataSaverOffIcon from '@mui/icons-material/DataSaverOff';
function services() {
  return (
    <div className="services">
      <div className="ser-head container">
        <h2>OUR SERVICES</h2>
        <p>
     iam iusto unde at. ipsum dolor sit amet consectetur adipisicing elit. Iusto,
          dolorem?
        </p>
      </div>
      <div className="ser-content1 container mb-3">
      <div className="col px-4 ">
   <WbAutoIcon className='icon' />
    <h3 className=''>lorem ipusm</h3>
     <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum deleniti et aperiam iusto unde at. ipsum dolor sit amet consectetur adipisicing elit. Harum, in.</p>
   </div>
   <div className="col px-4">
   <ShoppingCartIcon className='icon' />
    <h3 className=''>Consecettur</h3>
     <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum deleniti et aperiam iusto unde at. ipsum dolor sit amet consectetur adipisicing elit. Harum, in.</p>
   </div>
   <div className="col px-4">
   <CloudDownloadIcon className='icon' />
    <h3 className=''>lorem ipusm dolor</h3>
     <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum deleniti et aperiam iusto unde at. ipsum dolor sit amet consectetur adipisicing elit. Harum, in.</p>
   </div>
      </div>
      <div className="ser-content2 container">
      <div className="col px-4">
   <TranslateIcon className='icon' />
    <h3 className=''>Conselutuer ipusm</h3>
     <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum deleniti et aperiam iusto unde at. ipsum dolor sit amet consectetur adipisicing elit. Harum, in.</p>
   </div>
   <div className="col px-4">
   <FlightTakeoffIcon className='icon' />
    <h3 className=''>lorem ipusm</h3>
     <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum deleniti et aperiam iusto unde at. ipsum dolor sit amet consectetur adipisicing elit. Harum, in.</p>
   </div>
   <div className="col px-4">
   <DataSaverOffIcon className='icon' />
    <h3 className=''>lorem consectetur</h3>
     <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum deleniti et aperiam iusto unde at. ipsum dolor sit amet consectetur adipisicing elit. Harum, in.</p>
   </div>
      </div>
    </div>
  );
}

export default services;
