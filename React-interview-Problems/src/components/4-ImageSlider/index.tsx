import { useEffect, useState } from 'react';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';
import './style.css';

// from 56:51 to 1:20:35

type Props = {
  url: string;
  limit: number;
  page: number;
}
type ImageObjectType = {
  author: string;
  download_url: string;
  height: number;
  id: string;
  url: string;
  width: number;
}

function ImageSlider({url, limit=5, page=1}: Props) {
  const [images , setImages] = useState<ImageObjectType[]>([]);
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [indicator, setIndicator] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const handlePrevious = ():undefined => {
    setCurrentSlide(currentSlide === 0 ? images.length -1 : currentSlide -1);
    setIndicator(indicator === 0 ? images.length -1 : indicator-1);
  }

  const handleNext = ():undefined => {
    setCurrentSlide(currentSlide === images.length -1 ? 0 : currentSlide +1);
    setIndicator(indicator === images.length -1 ? 0 : indicator+1);
  }

  const handleIndicator = (index: number):undefined => {
    setCurrentSlide(index)
    setIndicator(index);
  }

  // console.log(currentSlide, indicator)
  const fetchImages = async (getUrl: string) => {
    try {
      setLoading(true);
      const response = await fetch(`${getUrl}?limit=${limit}&page=${page}`);
    const data = await response.json();
    // console.log(data)
    setImages(data);
    setLoading(false);
    } catch (error) {
      // console.log(error.message)
      setError(error?.message as string);
      setLoading(false);
    }
    
  }

  useEffect(()=>{
    if(url !== "") fetchImages(url);
  }, [url]);

  if(loading) return <div className='is-loading'>Loading images, Please wait...</div>

  if(error) return <div className='is-error'>Error:- {error}</div>

  return (
    <div className='is-container'>
      <h3 className="is-title">Project 4. Image Slider</h3>
      <div className="is-image-container">
        <div className="arrow arrow-left">
          <BsArrowLeft onClick={handlePrevious}/>
        </div>
        {images?.map((image, index)=>{
          return (
            currentSlide === index && <img src={image.download_url} alt={image.download_url} className='is-image'/>
          )
        })}
        <div className="arrow arrow-right">
          <BsArrowRight onClick={handleNext}/>
        </div>
      </div>
      <div className="is-indicators">
        {images && images.length && images.map((_, index)=>{
          return (
            <div className={indicator === index ? 'is-indicator is-show-indicator': 'is-indicator is-hide-indicator'} key={index} onClick={()=>handleIndicator(index)}></div>
          )
        })}
      </div>
    </div>
  )
}

export default ImageSlider