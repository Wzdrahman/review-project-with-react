import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  const [index,setIndex] = useState(0);
  const {id,image,name,job,text} = people[index];

  const cheakNumber = (number) => {
    if (number > people.length -1) {
      return 0;
    }
    if (number < 0) {
      return people.length -1;
    }
    return number;

  }
  const prevBtn = ()=> {
   setIndex((index) => {
      let newPrevBtn = index -1;
      return cheakNumber(newPrevBtn);
   });
  }
  const nextBtn = ()=> {
   setIndex((index) => {
      let newNextBtn = index +1;
      return cheakNumber(newNextBtn);
   });
  }
  const randomPeople = ()=> {

      let randomPeopleIndex = Math.floor(Math.random() * people.length);
      if (randomPeopleIndex === index) {
        randomPeopleIndex = index + 1;
      }
      setIndex(cheakNumber(randomPeopleIndex));

  }

return <article className='review'>
            <div className="img-container">
              <img src={image} alt={name} className='person-img'/>
              <span className='quote-icon'>
                <FaQuoteRight />
              </span>
            </div>
            <h4 className='author'>{name}</h4>
            <p className='job'>{job}</p>
            <p className="info">{text}</p>
            <div className="button-container">
              <button className='prev-btn' onClick={prevBtn}>
                <FaChevronLeft />
              </button>
              <button className='next-btn' onClick={nextBtn}>
                <FaChevronRight />
              </button>
            </div>
              <button className='random-btn' onClick={randomPeople} >Suprise Me</button>
    </article>;
};

export default Review;
