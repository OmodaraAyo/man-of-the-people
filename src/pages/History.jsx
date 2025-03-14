import React, { useState } from 'react'
import { RiInformation2Line } from "react-icons/ri";
import bankHistory from '../assets/bankHistory'
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md';

const History = () => {
    const [showAccountNumber, setShowAccountNumber] = useState(false)
  return (
    <div className="pt-42 pb-15 w-full max-w-screen-md mx-auto">
        <h1 className='text-[0.67rem] font-semibold flex justify-end px-8 pb-1'>Provided by Bank of America</h1>
        <div className='bg-gray-100 h-full w-full pb-6 flex flex-col justify-center gap-7'>
            <div className='flex justify-between px-8 text-[1.04rem] items-center'>
                <h1 className='w-full max-w-[12rem] font-semibold mt-6 text-[1.188rem]'>ADV PLUS BANKING - 3324</h1>
                <button className='text-blue-800 cursor-pointer'>EDIT</button>
            </div>
            <h1 className='flex flex-col items-center font-semibold text-[1.788rem]'>$54.19 <span className='text-[0.7rem] font-normal flex items-center justify-center gap-1'>Available balance <RiInformation2Line size={19} color='#1e40af'/></span></h1>
            <div className='w-full h-full max-w-[20rem] sm:max-w-[38rem] lg:max-w-[43rem] place-self-center bg-white flex flex-col rounded-lg drop-shadow-lg px-4 py-2'>
                <h1 className='flex items-center justify-between'>Account & Routing # 
                    <button className='cursor-pointer'>{showAccountNumber ? <MdKeyboardArrowUp size={24} color='gray' onClick={() => setShowAccountNumber(false)}/>: <MdKeyboardArrowDown size={24} color='gray' onClick={() => setShowAccountNumber(true)}/>}</button>
                </h1>
                {showAccountNumber && (
                    <div className='flex flex-col gap-1'>
                        <div className='border-b border-gray-300 py-3 flex flex-col gap-3'>
                            <h1 className='flex justify-between font-bold'>Account Number <span className='font-normal text-gray-700'>139176481314</span></h1>
                            <h1 className='flex justify-between font-bold'>Routing Numbers</h1>
                            <h1 className='flex justify-between'>Paper & Electronic <span className='font-normal text-gray-700'>123107717</span></h1>
                            <p className='text-[0.678rem] text-gray-700'>Use this routing number to order checks, set up direct deposits and outgoing payments to other financial institutions.</p>
                        </div>
                        <div className='border-b py-3 border-gray-300 flex flex-col gap-2'>
                            <h1 className='flex justify-between'>Wires<span className='font-normal text-gray-700'>026011649</span></h1>
                            <p className='text-[0.678rem] text-gray-700'>Use this routing number for all incoming wire transfers.</p>
                        </div>
                        <div className='py-3 flex flex-col gap-2 items-start'>
                            <p className='text-[0.678rem] text-gray-700'>For an international wire, you'll need one of our</p>
                            <button className='text-[0.678rem] text-blue-700'>SWIFT <span>codes</span></button> 
                        </div>
                    </div>
                )}
            </div>
            {/* history */}
            <div className='w-full h-full max-w-[22rem] sm:max-w-[38rem] lg:max-w-[43rem] place-self-center bg-white flex flex-col rounded-lg drop-shadow-lg px-[0.300rem]'>
                <h1 className='flex items-center justify-between px-4 py-2 text-gray-700 text-[0.818rem] font-semibold'>RECENT TRANSACTIONS</h1>
                {bankHistory.map((transaction, index) => (
                    <div key={index} className='flex justify-between px-4 py-2 border-b border-gray-300'>
                        {/* date & type */}
                       <div className='flex flex-col'>
                        <h1 className='text-[0.778rem] text-gray-700'>{transaction.date}</h1>
                        <h1 className='w-full max-w-[12rem] text-[1.043rem]'>{transaction.type}</h1>
                       </div>
                       {/* amount & current balance*/}
                       <div className='text-center py-2'>
                        <h1 className='text-blue-800 font-semibold text-[1.097rem] text-end'>{transaction.amount}</h1>
                        <h1 className='text-gray-700 text-[0.802rem] text-end'>${transaction.currentBalance}</h1>
                       </div>
                    </div>
                ))}
                <button className='w-full py-2 text-center text-blue-800'>Load More Transactions</button>
            </div>
        </div>
    </div>
  )
}

export default History
