import { useEffect, useState } from 'react';
import './style.css';

// from 1:22:00 to 1:38:00
// https://dummyjson.com/products?limit=10&skip=10

type Product = {
  availabilityStatus: string;
  brand: string;
  category: string;
  description: string;
  dimensions: {width: number, height: number, depth: number};
  discountPercentage: number;
  id: number;
  images: string[];
  meta: any;
  minimumOrderQuantity: number;
  price: number;
  rating: number;
  returnPolicy: string;
  reviews: any[];
  shippingInformation: string;
  sku: string;
  stock: number;
  tags: string[];
  title: string;
  thumbnail: string;
  warrantyInformation: string;
  weight: number;
}

function LoadMoreData() {

  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [count, setCount] = useState<number>(4);
  const [error, setError] = useState<string>("");

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const url = `https://dummyjson.com/products?limit=20&skip=${count * 20}`;
      // console.log("url:", url)
      const response = await fetch(url);
      const data  = await response.json();

      if(data) {       
        setProducts(data.products);
        // console.log("data >>> ", data);
      }
      setLoading(false)
    } catch (error) {
      console.log(error)
      setLoading(false);
    }
  }

  useEffect(()=>{
    fetchProducts();
  }, [count]);


  if(loading) return <>Loading...</>
  if(error) return <><h2>Error: {error}</h2></>

  // console.log(products)
  return (
    <div className='lmd-container'>
      <h3 className='lmd-title'>Project 5. Load more data</h3>
      <div className="lmd-products-container">

      </div>
    </div>
  )
}

export default LoadMoreData