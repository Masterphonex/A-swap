import React, { useState } from 'react';

const ReviewCarousel = ({ reviews }) => {
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);

  const prevReview = () => {
    const newIndex = (currentReviewIndex - 1 + reviews.length) % reviews.length;
    setCurrentReviewIndex(newIndex);
  };

  const nextReview = () => {
    const newIndex = (currentReviewIndex + 1) % reviews.length;
    setCurrentReviewIndex(newIndex);
  };

  return (
    <div className="review-carousel  flex flex-col gap-5 items-center">
      <button onClick={prevReview} className='font-bold text-2xl'>Review</button>
      <div className="review flex flex-col gap-3">
        <h3>{reviews[currentReviewIndex].title}</h3>
        <p>{reviews[currentReviewIndex].content}</p>
        <p className='text-sm font-bold'>- {reviews[currentReviewIndex].author}</p>
      </div>
      <button onClick={nextReview} className='bg-blue-800 px-6 py-2 rounded-md'>Next</button>
    </div>
  );
};

export default ReviewCarousel;
