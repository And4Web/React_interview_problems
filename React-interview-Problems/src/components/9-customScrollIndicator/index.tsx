import { useEffect, useState } from 'react';
import './style.css';

// from 2:25:45 to 2:43:15
// dummyjson.com/docs/products

type DataType = {
  brand: string;
  availabilityStatus: string;
  category: string;
  description: string;
  discountPercentage: number;
  id: number;
  price: number;
  rating: number;
  returnProlicy: string;
  title: string;
  thumbnail: string;
  warrantyInformation: string;
  images: string[];
  dimension: {
    width: number;
    height: number;
    depth: number;
  }
}

type Props = {
  url: string;
}

function CustomScroll({url}:Props) {

  const [data, setData] = useState<DataType[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string>('');

  const [scrollPercentage, setScrollPercentage] = useState<number>(0);
  
  async function fetchData(getUrl:string){
    try {
      setLoading(true);
      const response = await fetch(getUrl);
      const data = await response.json();
  
      if(data && data.products && data.products.length > 0){
        setData(data.products);
        setLoading(false);
      }      
      
    } catch (error) {
      // console.log(error?.message);
      setErrorMsg(error?.message);
      setLoading(false);
    }
  }

  useEffect(()=>{
    if(data.length < 1){
      fetchData(url);
    }
    // console.log(data)
  }, [url, data])


  const handleScrollPercentage = () => {
    // console.log("body ScrollHeight >>> ", document.body.scrollHeight)
    // console.log("documentElement scrollTop >>> ", document.documentElement.scrollTop)
    // console.log("documentElement scrollHeight >>> ", document.documentElement.scrollHeight)
    // console.log("documentElement clientHeight >>> ", document.documentElement.clientHeight)

    // console.log("documentElement scrollTop >>> ", document.documentElement.querySelector(".csi-container")?.scrollTop)
    // console.log("document element >>> ", document.documentElement.querySelector(".csi-container")?.scrollTop);


    const howMuchScrolled = document.body.scrollTop || document.documentElement.scrollTop;

    // const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    
    const percentageScrolled = (howMuchScrolled/height)*100;

    setScrollPercentage(percentageScrolled);
    // console.log("how Much scrolled >> ", Math.ceil(percentageScrolled), "%")
  }

  useEffect(()=>{
    window.addEventListener('scroll', handleScrollPercentage);
    
    // return ()=>{
    //   window.removeEventListener('scroll', ()=>{})
    // }
      
  }, [])


  return (
    <div className="csi-container">
      <div className="csi-header">
        <h3 className="csi-title">Project 9. Custom Scroll Indicator</h3>

        <div className="csi-progress-bar-container">
          <div className="csi-progress-bar" style={{width: `${scrollPercentage}%`, height: "6px", background: "linear-gradient(to right, orange, gold, yellow, #f5f77d)", boxShadow: "1px 1px 2px green", borderRadius: "0 5px 5px 0"}}></div>
        </div>
      </div>

      { 
        loading && <h1 style={{textAlign: "center"}}>Loading...</h1>
      }
      {
        errorMsg && <h1 style={{textAlign: "center"}}>Error: {errorMsg}</h1>
      }
      {
        data && data.length > 0 ? (
          data.map((product, index)=>(
            <div key={index} className="csi-card">
              <img src={product.thumbnail} alt={product.title} className='csi-product-image'/>
              <h3 className="csi-product-title">{product.title}</h3>

              <div className="csi-product-info">
                <p><b>Category </b>{product.category}</p>
                <p><b>Rating </b>{product.rating}/5</p>
                <p><b>Price </b>${product.price}</p>
              </div>
            </div>
          ))
        ) : null
      }
      
    </div>
  )
}

export default CustomScroll