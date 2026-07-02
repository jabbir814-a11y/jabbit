import React, { useEffect, useState } from 'react'
import './movie.css'

function Movie() {




  const images=[ 
  "https://assets-in-gm.bmscdn.com/promotions/cms/creatives/1772200374412_blr.jpg",
    "https://assets-in-gm.bmscdn.com/promotions/cms/creatives/1776145195207_freeaccessweb.jpg",
    "https://assets-in-gm.bmscdn.com/promotions/cms/creatives/1776147401672_popwebnew.jpg",
  

  ]
  const [image ,setimage]=useState(0)
  useEffect(()=>{
const interval=setInterval(()=>{
setimage((prev)=>{
if(prev===images.length-1){
return 0;
}
else{
return prev+1
}
})
},5000)
  return()=>clearInterval(interval)
  },[])
  return (
    <div>
    <div className="nav">
   <img src='data:image/jpeg;base64,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' className='image'></img>

     <input type='text'></input>
     <ul>
     <a href=''> <li>movie</li></a>
    <a href=''> <li>streams</li></a>
    <a href=''>  <li>events</li></a>
     <a href=''> <li>plays</li></a>
      <a href=''><li>activites</li></a>
     </ul>
      

  
     <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
      <img src={images [image]}></img>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img className="d-block w-100" src="https://assets-in-gm.bmscdn.com/promotions/cms/creatives/1772200374412_blr.jpg" alt="First slide"></img>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src="https://assets-in-gm.bmscdn.com/promotions/cms/creatives/1776145281629_thebrideweb.jpg" alt="Second slide"></img>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src="https://assets-in-gm.bmscdn.com/promotions/cms/creatives/1776147401672_popwebnew.jpg" alt="Third slide"></img>
    </div>
  </div>
</div>
    </div>
    <div className="sec-1">
    <h3>recommended movie</h3>
    <div className="grid">

      <div className="grid-item">
     <a href="/board"> <img src='https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC,e-usm-2-2-0.5-0.008:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OS40LzEwICA3LjdLKyBWb3Rlcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00492948-kyusvfmfqn-portrait.jpg'></img></a>
      </div>
      <div className="grid-item">
    <a href="/Clock"> <img src='https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC,e-usm-2-2-0.5-0.008:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OS40LzEwICA1NjZLKyBWb3Rlcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00478890-gseacbrsej-portrait.jpg'></img></a> 
      </div>
      <div className="grid-item">
     <a href='/ghost'><img src='https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC,e-usm-2-2-0.5-0.008:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@like_202006280402.png,lx-24,ly-617,w-29,l-end:l-text,ie-MTc3SysgTGlrZXM%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00411383-ktyhcmthpv-portrait.jpg'></img></a> 
      </div>
      <div className="grid-item">
   <a href='hailey'> <img src='https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC,e-usm-2-2-0.5-0.008:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OS8xMCAgNTYuN0srIFZvdGVz,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00451760-bqrmlwxxqs-portrait.jpg'></img></a>
      </div>
      <div className="grid-item">
    <a href='hailey'><img src='https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC,e-usm-2-2-0.5-0.008:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OS8xMCAgNTYuN0srIFZvdGVz,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00451760-bqrmlwxxqs-portrait.jpg'></img></a>  
      </div>
      <div className="grid-item">
    <a href='ask'>  <img src='https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC,e-usm-2-2-0.5-0.008:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OS4zLzEwICAyLjRLKyBWb3Rlcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00494120-dqfpcyrjre-portrait.jpg'></img></a>
      </div>
    <a href='sunny'>  <img src='https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/stream-leadin-web-collection-202210241242.png' className='pop'></img></a>
    </div>
      
      </div>
      <div className="sec-3">
   <div
  id="carouselExampleSlidesOnly"
  className="carousel slide"
  data-bs-ride="carousel"
>
  <div className="carousel-inner">
    <div className="carousel-item active">
     
    </div>

    <div className="carousel-item">
      
    </div>

    <div className="carousel-item">
  
   
    </div>
  </div>
<div className='sec-4'>
<div className='live events'>
<h3 style={{textTransform:'capitalize', marginLeft:-900}}>the best of live events</h3>
<img src='https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:l-text,ie-NSBFdmVudHM%3D,co-FFFFFF,ff-Roboto,fs-64,lx-48,ly-320,tg-b,pa-8_0_0_0,l-end:w-300/comedy-shows-collection-202211140440.png' style={{marginLeft:-200}}></img>
<img src="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:l-text,ie-MyBFdmVudHM%3D,co-FFFFFF,ff-Roboto,fs-64,lx-48,ly-320,tg-b,pa-8_0_0_0,l-end:w-300/kids-banner-desktop-collection-202503251132.png" style={{marginLeft:700}}></img>
<img src='https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:l-text,ie-MyBFdmVudHM%3D,co-FFFFFF,ff-Roboto,fs-64,lx-48,ly-320,tg-b,pa-8_0_0_0,l-end:w-300/kids-banner-desktop-collection-202503251132.png'style={{marginTop:-300}}></img>
</div>
</div>
<div className='sec-5'>
<h3 style={{marginLeft:-850}}>outdoor events</h3>
<div className='shock'>
<div className='shock-item'>
<a href='dash'> <img src='https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC,e-usm-2-2-0.5-0.008:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-VGh1LCAzMCBBcHIgb253YXJkcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00495907-lsabxtpenm-portrait.jpg'></img></a>
<a href='event'> <img src='https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC,e-usm-2-2-0.5-0.008:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U2F0LCAxNiBNYXk%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00441260-tejanecujq-portrait.jpg'></img></a>
<a href='rot'> <img src='https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC,e-usm-2-2-0.5-0.008:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U3VuLCAzIE1heSBvbndhcmRz,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00450456-wssumwmatb-portrait.jpg'></img></a>
<a href='time'> <img src='https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC,e-usm-2-2-0.5-0.008:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U2F0LCAyMCBKdW4%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00494998-puzswhetll-portrait.jpg'></img></a>
<a href='ent'> <img src='https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC,e-usm-2-2-0.5-0.008:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U2F0LCAyIE1heSBvbndhcmRz,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00396691-xxfqrvpyuy-portrait.jpg'></img></a>
<a href='sunny'> <img src='https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC,e-usm-2-2-0.5-0.008:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-RnJpLCAxIE1heQ%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00493719-mxyqnrxdka-portrait.jpg'></img></a>

</div>
<div className='sec-6'>
   <h3 style={{marginLeft:-800}}> laughter theraphy</h3>
 <div className='the'>
 
<a href='Ind'> <img src='https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC,e-usm-2-2-0.5-0.008:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U2F0LCAyIE1heSBvbndhcmRz,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00355125-qexksrrcdz-portrait.jpg'></img></a>
<a href='Zoo'> <img src='https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC,e-usm-2-2-0.5-0.008:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-RnJpLCAxMiBKdW4gb253YXJkcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00484157-halxserwxb-portrait.jpg'></img></a>
<a href='comedy'> <img src='https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC,e-usm-2-2-0.5-0.008:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-VGh1LCAzMCBBcHIgb253YXJkcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end:l-image,i-discovery-catalog@@icons@@bundle-icon-shadow-4x.png,lx-15,ly-15,w-50,l-end/et00135711-bujpamswgy-portrait.jpg'></img></a>
<a href='comedy'> <img src='https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC,e-usm-2-2-0.5-0.008:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-VGh1LCAzMCBBcHIgb253YXJkcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end:l-image,i-discovery-catalog@@icons@@bundle-icon-shadow-4x.png,lx-15,ly-15,w-50,l-end/et00135711-bujpamswgy-portrait.jpg'></img></a>
 <a href='cty'> <img src='https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC,e-usm-2-2-0.5-0.008:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-V2VkLCA2IE1heSBvbndhcmRz,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end:l-image,i-discovery-catalog@@icons@@bundle-icon-shadow-4x.png,lx-15,ly-15,w-50,l-end/et00135461-lcbcngympm-portrait.jpg'></img></a>
 <a href='oml'> <img src='https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC,e-usm-2-2-0.5-0.008:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-RnJpLCAxIE1heSBvbndhcmRz,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end:l-image,i-discovery-catalog@@icons@@bundle-icon-shadow-4x.png,lx-15,ly-15,w-50,l-end/et00312421-urjhmsfjdz-portrait.jpg'></img></a>
 </div>
</div>
<div className='sec-6'>
<div className='footer'>
  <h5 style={{color:'grey', marginLeft:-900 ,textTransform:'capitalize'}}>list your show</h5>
  <img className='dot' src='https://assets-in.bmscdn.com/webin/common/icons/hut.svg' ></img>
  <p className='batman' style={{color:'grey', }}>got a show event,activity event,or great experience,partners with us&get listed on book my show</p>
   <a href='contact'><button className='joker'style={{color:'white',backgroundColor:'red'}}>contact today</button></a>
</div>
</div>
</div>
</div>
</div>
</div>
   
      </div>
    
  
  )
}

export default Movie