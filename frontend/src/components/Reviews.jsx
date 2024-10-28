import React from 'react'
import ReviewCarousel from '../components/ReviewCarousel'


const reviews = [
    {
      title: 'Great Service!',
      content: 'I had an amazing experience. The staff was friendly and helpful.',
      author: 'Stephanie'
    },
    {
      title: 'Excellent Product!',
      content: 'The product exceeded my expectations. It works flawlessly.',
      author: 'Kelvin'
    },
    {
      title: 'Great Website!',
      content: 'This is One of the best Website i have ever seen',
      author: 'Jones'
    },
    // Add more review objects as needed
  ]; 


const Reviews = () => {

  return (
    <div className="w-[300px] flex flex-col text-white items-center gap-10 bg-blue-950 p-8 rounded-md shadow-lg">
      <ReviewCarousel reviews={reviews} />
    </div>

    // <div className='w-[300px] flex flex-col text-white items-center gap-10 bg-blue-950 p-8 rounded-md shadow-lg'>
    //     <h1 className='font-bold text-lg'>Reviews</h1>
    //     <p>This are all my reviews Concerning this Website, Please Read Well</p>
    // </div>
  )
}

export default Reviews