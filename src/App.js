import React from 'react'
import { IoSettingsOutline } from "react-icons/io5";
import { MdPhoneInTalk } from "react-icons/md";
import { MdOutlineAttachEmail } from "react-icons/md";
import { MdOutlineSpeakerPhone } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import logo from '../src/asstes/logoo.png'

const App = () => {
  return (
    <div>
      <div className=''>

<h1 className=' font-semibold text-4xl p-12'>MATERIAL REQUISTION</h1>

<div className=' border-t-2 border-b-2 border-b-cyan-600'>
<div className=' p-8 pl-12'>
<img src={logo} className=' w-52 h-16' alt="" />


<div className=' flex flex-col'>
<h2 className=' font-semibold text-xl mt-4'>Westfield Subsea Limited</h2>
<p className=' font-medium text-gray-500'>Plot 23 Providence Street. Lekki Phase 1 Lagos, Nigeria, West Africa</p>
</div>








</div>

</div>

<div className='flex  w-full mt-7 p-8 pl-12'>
<div className=' gap-x-32 gap-y-6 grid grid-cols-3'>

<div>
<h2 className=' font-semibold'>Indent No</h2>
<p className=' text-gray-500'>MAT - 0918</p>
</div>

<div>
<h2 className=' font-semibold'>Project</h2>
<p className=' text-gray-500'>Westfield 2024</p>
</div>



<div>
<h2 className=' font-semibold'>Date</h2>
<p className=' text-gray-500'>08/07/2024</p>
</div>


<div>
<h2 className=' font-semibold'>Name of Vessel</h2>
<p className=' text-gray-500'>DLB Kenenna</p>
</div>


<div>
<h2 className=' font-semibold'>Location</h2>
<p className=' text-gray-500'>Eko Support</p>
</div>


<div>
<h2 className=' font-semibold'>Requirement</h2>
<p className=' text-gray-500'>N/A</p>
</div>


</div>


</div>
<div className=' border-b-2  mx-8 mt-8'></div>


<div className=' mx-8 mb-2'>
<table className="w-full z-30 border-r-[1px] mt-10 border-t-[1px] border-l-[1px] border-gray-400">
    <thead className=" bg-gray-300 border-b-[1px] border-gray-400">
      <tr>
        <th className="p-3 font-semibold tracking-wide text-left">
          S/N
        </th>
        <th className="p-3 font-semibold tracking-wide text-left">
          Equipment
        </th>
        <th className="p-3  font-semibold tracking-wide text-left">
         Quantity
        </th>
        <th className="p-3  font-semibold tracking-wide text-left">
          Model
        </th>
        <th className="p-3  font-semibold tracking-wide text-left">
        Description
        </th>
        <th className="p-3 text-sm font-semibold tracking-wide text-left ">
          Part No
        </th>
      </tr>
    </thead>
    <tbody className="relative">
      <tr className="border-b-[1px] border-gray-400">
        <td className="p-3  text-white-100">
         1
        </td>
        <td className="p-3 text-white-100">
        MainStore
        </td>
        <td className="p-3  text-white-100">
        10
        </td>

        <td
      
          className="p-3  cursor-pointer"
        >
         M-2024
        </td>

        <td className="p-3  text-white-100">
        BOLT AND <br /> NUT, SIZE 40"
        </td>
        <td className="p-3  cursor-pointer">
          C098
        </td>


        
      </tr>

    
      <tr className="border-b-[1px] border-gray-500">
        <td className="p-3  text-white-100">
         2
        </td>
        <td className="p-3 text-white-100">
        MainStore
        </td>
        <td className="p-3  text-white-100">
        10
        </td>

        <td
      
          className="p-3  cursor-pointer"
        >
         M-2024
        </td>

        <td className="p-3  text-white-100">
        BOLT AND <br /> NUT, SIZE 40"
        </td>
        <td className="p-3  cursor-pointer">
          C098
        </td>


        
      </tr>
      
   
      <tr className="border-b-[1px] border-gray-500">
        <td className="p-3  text-white-100">
         3
        </td>
        <td className="p-3 text-white-100">
        MainStore
        </td>
        <td className="p-3  text-white-100">
        10
        </td>

        <td
      
          className="p-3  cursor-pointer"
        >
         M-2024
        </td>

        <td className="p-3  text-white-100">
        BOLT AND <br /> NUT, SIZE 40"
        </td>
        <td className="p-3  cursor-pointer">
          C098
        </td>


        
      </tr>
    </tbody>
  </table>
</div>

<div className=' grid gap-24 mt-10 px-12 grid-cols-3 md:grid-cols-5 '>
<p className=' text-base font-medium'>Requested By:</p>
<p className=' text-base font-medium'>Checked By:</p>
<p className=' text-base font-medium'>Acknowledged By:</p>
<p className=' text-base font-medium'>Approved By:</p>
<p className=' text-base font-medium'> Released By:</p>
</div>



<div className=' flex px-10 mt-8 gap-10'>
<div className=' bg-gray-300 w-fit px-2 text-center'>
<h2 className=' text-base font-semibold'>DP Analytics</h2>
<p className=' text-gray-500'>General User</p>
<p className=' text-sm text-gray-500'>2024-05-08 14:04:12</p>
</div>

<div className=' bg-gray-300 w-fit px-2 text-center'>
<h2 className=' text-base font-semibold'>Whendi Hod</h2>
<p className=' text-gray-500'>Engine Dept.</p>
<p className=' text-sm text-gray-500'>2024-05-08 14:04:12</p>
</div>

<div className=' bg-gray-300 w-fit px-2 text-center'>
<h2 className=' text-base font-semibold'>Rasheed Okunola</h2>
<p className=' text-gray-500'>Company Rep. Onboard</p>
<p className=' text-sm text-gray-500'>2024-05-08 14:04:12</p>
</div>


<div className=' bg-gray-300 w-fit px-2 text-center'>
<h2 className=' text-base font-semibold'>Jay BM</h2>
<p className=' text-gray-500'> Barge Master</p>
<p className=' text-sm text-gray-500'>2024-05-08 14:04:12</p>
</div>


<div className=' bg-gray-300 w-fit px-2 text-center'>
<h2 className=' text-base font-semibold'>Leo sk</h2>
<p className=' text-gray-500'>Store Keeper</p>
<p className=' text-sm text-gray-500'>2024-05-08 14:04:12</p>
</div>
</div>



<div className='grid grid-cols-2 md:grid-cols-4 gap-12 mt-20 ml-2'>
<div className=' flex items-center gap-2'>
<MdPhoneInTalk className=' text-white text-3xl p-1 rounded-full bg-teal-700' />
+1 (123) 456-7890
</div>

<div className=' flex items-center gap-2'>
<MdOutlineAttachEmail className=' text-white text-3xl p-1 rounded-full bg-teal-700' />
info@dpanalyiscsolution.com
</div>


<div className=' flex items-center gap-2'>
<MdOutlineSpeakerPhone className=' text-white text-3xl p-1 rounded-full bg-teal-700' />
www.dpanalyiscsolution.com
</div>


<div className=' flex items-center gap-2'>
<CiLocationOn className=' text-white text-3xl p-1 rounded-full bg-teal-700' />
123 Sugariand T x
</div>



</div>

<div className=' border-b-4 border-teal-700 '></div>

</div>
    </div>
  )
}

export default App