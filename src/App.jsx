import React from 'react'
import { Icon } from '@iconify/react';
import moon from "./assets/moon.png"
import Feel from "./assets/Feel.png"
import Good from "./assets/Good.png"
import BeGood from "./assets/BeGood.png"




function App() {
  return (

<>

<div className='container-fluid  flex py-3 bg-gray-50 '>
{/* side bar start */}
<div className='lg:block hidden  w-[20%]  bg-black rounded-3xl py-2 mx-1 h-full '>

<div className='text-[35px] p-8 text-white font-bold'>lifeswurk</div>




<div className='flex xl:px-8 px-5 justify-between items-center'>

<div className='flex items-center gap-4'>
  <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
  alt="..."
  className='rounded-full w-12 h-12' />

<div className='text-white'>
  <h1 className='text-[13px] text-gray-300'>Company</h1>
  <h1>Finalytic</h1>

</div>

</div>

<Icon  icon="ph:caret-up-down-light"  className='h-6 w-6 text-gray-300'/>

</div>



<div className='text-gray-300 px-7 py-10  '>
  <ul className=' space-y-4 cursor-pointer font-semibold items-start '>

    <li className='flex hover:bg-gray-600 hover:bg-opacity-50  rounded-full p-1.5 hover:p-1.5 items-center gap-3 '><Icon icon="teenyicons:compass-outline" className='text-gray-300 w-[22px] h-[22px]'/><p>Home</p></li>

    <li className='flex hover:bg-gray-600 hover:bg-opacity-50  rounded-full p-1.5 hover:p-1.5  items-center gap-3'><Icon icon="fontisto:world-o"  className='text-gray-300 w-5 h-5'/> <p>Missions</p> </li>

    <li   className='flex hover:bg-gray-600 hover:bg-opacity-50  rounded-full p-1.5 hover:p-1.5  items-center gap-3'> <Icon icon="mynaui:users-group" className='text-gray-300 w-6 h-6' /> <p>People</p></li>

    <li   className='flex hover:bg-gray-600 hover:bg-opacity-50  rounded-full p-1.5 hover:p-1.5  items-center gap-3'><Icon icon="icon-park-outline:leaves"rotate={1}   className='text-gray-300 w-5 h-5' />  <p>Impact</p></li>

    <li className='flex hover:bg-gray-600 hover:bg-opacity-50  rounded-full p-1.5 hover:p-1.5  items-center gap-3'><Icon icon="uil:setting" rotate={1}  className='text-gray-300 w-6 h-6' />  Settings</li>


  </ul>
</div>



<div className=' mx-5  w-full   rounded-xl'>
  <div className=' bg-gray-500  lg:h-40  lg:w-[85%] rounded-xl'></div>
</div>


</div>
{/* side bar end */}
{/* Main section start */}
<div className='lg:w-[80%] w-[100%] container-fluid bg-gray-50 '>


{/* navbar satrt */}
<div className='flex flex-wrap justify-between mx-5 '>

<Icon icon="ci:menu-alt-03" color="black" width="24" height="24"  className='lg:hidden md:block'/>


  <div className='flex p-0.5 bg-zinc-100 rounded-3xl items-center gap-2'>



    <div className='flex items-center gap-3 px-2'>
      <div className='bg-gray-300 rounded-full p-1'>
      <Icon icon="jam:world" rotate={1} /> 
      </div>
    
    <p>Home</p>
    </div>

<h1 className='text-[20px] text-neutral-700'>/</h1>

    <div className='flex items-center gap-3 bg-neutral-700 rounded-full py-1.5 px-2'> 
    <div className='bg-neutral-500 rounded-full p-1'>
    <Icon  icon="teenyicons:compass-outline" rotate={1} className='text-white' /> 

    </div>
    <p className='text-[#fff] font-semibold'>Mission</p>
    </div>


  </div>



  <div className='flex gap-5'>
<div className='flex rounded-full border items-center px-3 gap-1 '>
<Icon icon="ph:star" className='w-4 h-4 text-gray-400' />
<p className='text-neutral-700 text-[15px]'>Recommend</p>
</div>

<div className='flex rounded-full border items-center px-3 gap-1 '>
<Icon  icon="material-symbols:help-outline" className='w-4 h-4 text-gray-400' />
<p className='text-neutral-700 text-[15px]'>Help</p>
</div>


  </div>

</div>
{/* navbar satrt */}


{/* company name  section start */}
<div className='mx-5 lg:flex-row flex-col mt-10 flex lg:gap-2 gap-0'>




<div className='lg:w-[80%] w-[100%] rounded-xl border '>

<div className='flex sm:flex-row flex-col gap-5 justify-between w-full p-5'>


<div className='flex'>
<div className='flex items-center gap-4'>
  <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
  alt="..."
  className='rounded-full w-16 h-16' />

<div className='text-white'>
  <h1 className='text-2xl font-semibold  text-black'>Company Name</h1>
  <h1 className='text-black text-sm'>Design Studio, United States </h1>

</div>

</div>


</div>


<div className='flex items-center'>
  <button className='px-16  h-12 text-center bg-zinc-700 text-white rounded-full text-lg'>Post</button>
</div>
</div>


<div className='w-full relative'>

<img className='mx-auto relative' src={moon} alt="Item Image" />

<div className='absolute top-0'>
<p className='m-5 font-semibold text-sm text-zinc-700 text-left'>People count <br />
<span className='text-2xl font-bold'>100</span>    
</p>
</div>


<div className='flex justify-center mt-3 gap-2'>
  <button className='w-8 h-8 text-lg items-center border-2 rounded-full'>-</button>
  <button className='w-8 h-8 text-lg items-center border-2 rounded-full'>+</button>
</div>

<div className='w-72 px-2 rounded-full my-2  items-center mx-auto flex justify-around text-sm border-2  '>
  <p>People</p>
  <p className='bg-zinc-700  p-2 rounded-full text-center text-white w-24'>Post</p>
  <p>Time</p>
</div>
<br />


</div>



</div>




<div className='lg:w-[20%] w-[100%] items-center lg:justify-start 
 justify-between  flex lg:flex-col flex-row  lg:space-y-10 space-y-0 lg:py-0 py-5 '> 

<div className='border rounded-xl '>
  <img src={Feel} alt="" className='h-full w-full' />
</div>

<div className='border rounded-xl'>
  <img src={Good} alt="" className='h-full w-full' />
</div>


<div className='border rounded-xl'>
  <img src={BeGood} alt="" className='h-full w-full' />
</div>





</div>

</div>
{/* company name  section end */}

{/* serch bar start  */}
<div className='mx-5 flex py-5'>
 <div className='flex items-center gap-2 p-2 rounded-full border-2 border-black lg:w-[50%] md:w-[70%] w-[100%] '> 
 <Icon icon="majesticons:search-line" className='text-neutral-700 w-7 h-7' />
<input type="search" name="" id="" placeholder='Post search' className='w-[100%]  outline-none bg-transparent'/>
 </div>

 <div className='bg-black rounded-full p-3'>
 <Icon icon="mi:switch" color="white" width="24" height="24" />
 </div>
</div>
{/* serch bar end  */}


{/* Post Section start */}

<div>

</div>

{/* Post Section end */}



</div>

{/* Main section end*/}
</div>



</>


  )
}

export default App
