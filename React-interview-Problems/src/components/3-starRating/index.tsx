import { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import './style.css';

// started at 45:45 and ended at 55:51

type Props = {
  numberOfStars: number;
}

function StarRating({numberOfStars = 5}:Props) {

  const [rating, setRating] = useState<number>(0);
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  

  const handleOnClick = (index: number):undefined => {
    setSelectedIndex(index);
    setRating(index);
    // console.log("click: ", index);
  }

  const handleMouseMove = (index: number):undefined => {
    // console.log("mouseMove: ", index);
    setSelectedIndex(index);
    setRating(index);
  }

  const handleMouseOut = ():undefined => {
    // console.log('mouseOut: ');
    // setSelectedIndex(0);
    setRating(rating);
  }

  // console.log(rating, selectedIndex);

  return (
    <div className='sr-container'>
      <h3 className='sr-title'>Project 3. Star Rating</h3>

      <div className="sr-stars">
        {
          Array.from({length: numberOfStars}).map((_, index)=>{
            index += 1;
            return (
              <div className="sr-star" key={index}>
                <FaStar onClick={()=>handleOnClick(index)} onMouseMove={()=>handleMouseMove(index)} onMouseOut={handleMouseOut} color={ index <= rating ? 'gold': ""}/>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default StarRating