import { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import './style.css';

// from 45:45 to 55:51

type Props = {
  numberOfStars: number;
}

function StarRating({numberOfStars = 5}:Props) {

  const [rating, setRating] = useState<number>(0);
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  

  const handleOnClick = (index: number):undefined => {
    // setSelectedIndex(index);
    setRating(index);
    // console.log("click: ", index);
  }

  // const handleMouseMove = (index: number):undefined => {
  //   // console.log("mouseMove: ", index);
  //   setSelectedIndex(index);
  //   setRating(index);
  // }
  const handleMouseEnter = (index: number): undefined => {
    setSelectedIndex(index);
  }

  // const handleMouseOut = ():undefined => {
  //   // console.log('mouseOut: ');
  //   setSelectedIndex(rating);
  //   // setRating(0);
  // }

  const handleMouseLeave = () => {
    setSelectedIndex(rating)
  }
  console.log(rating, selectedIndex);

  return (
    <div className='sr-container'>
      <h3 className='sr-title'>Project 3. Star Rating</h3>

      <div className="sr-stars">
        {
          Array.from({length: numberOfStars}).map((_, index)=>{
            index += 1;
            return (
              <div className="sr-star" key={index}>
                <FaStar onClick={()=>handleOnClick(index)} 
                onMouseEnter={()=>handleMouseEnter(index)}                
                onMouseLeave={()=>handleMouseLeave()} className={index <= ( selectedIndex || rating) ? "active" : "inactive"}/>
              </div>
            )
          })
        }
      </div>

      <p style={{textAlign: "center"}}>You chose: <b>{rating} Stars</b>. {rating ? (rating > 7 ? "Thanks, You liked our collection." : (rating < 4 ? "Oh! How can we improve our collection?" : "Thanks for your Opinion. We hope you will come back.")) : null}</p>
    </div>
  )
}

export default StarRating

// onMouseMove={()=>handleMouseMove(index)} 
// onMouseOut={handleMouseOut} color={ index <= rating || index <= selectedIndex ? 'gold': ""}