import React from 'react'
import { useLocation } from 'react-router-dom';
import { CircleCheckBig } from 'lucide-react'

const SuccessPage = () => {
    const location = useLocation();
    const {match,selectedSeat} = location.state;
  return (
    <div className='min-h-screen bg-primary flex items-center justify-center text-white'>
        <div className='bg-secondary p-10 rounded-xl w-[400px] text-center flex flex-col items-center justify-center'>
            <CircleCheckBig size={60} color='green'/>
            <h1 className='text-3xl font-bold mt-4'>
                Booking Confirmed
            </h1>
            <p className='text-text-secondary mt-3'>
                Your ticket has been booked successfully
            </p>
            <div className='bg-primary rounded-xl p-5 mt-6 text-left'>
                <h2 className='font-semibold'>
                    {match.team1} vs {match.team2}
                </h2>
                <p className='text-sm mt-2'>
                    {match.date}
                </p>
                <p className='text-sm'>
                    {match.venue}
                </p>
                <p className='text-sm mt-2'>
                    Seat: {selectedSeat.type}
                </p>
                <p className='text-sm'>
                    Price: {selectedSeat.price}
                </p>
            </div>
        </div>
    </div>
  )
}

export default SuccessPage