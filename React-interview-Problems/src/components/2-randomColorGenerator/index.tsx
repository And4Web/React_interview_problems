import { useState } from 'react';
import './style.css';

function RandomColorGenerator() {
  // from 30:00 to 44:45

  const [colorType, setColorType] = useState<string>("hex");
  const [randomColor, setRandomColor] = useState<string>("#63639c")


  const handleSetHEXColorType = (type: string) => {
    setColorType(type);
    setRandomColor("#63639c")
  };
  const handleSetRGBColorType = (type: string) => {
    setColorType(type)
    setRandomColor("rgb(99, 99, 156)")
  };


  const valueGenerator = (length: number): number => {
    const value = Math.floor(Math.random()*length);
    return value;
  }

  const createRandomColor = () => {
    const hexValuesArr: (number | string)[] = [1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
    if(colorType === 'hex'){
      let hexColor:string = "#";
      for(let i=0; i<6; i++){
        hexColor += hexValuesArr[valueGenerator(hexValuesArr.length < 16 ? hexValuesArr.length : 10)];
      }

      setRandomColor(hexColor);
    }else{
      let rgbColor: string = "";
      const r = valueGenerator(256);
      const g = valueGenerator(256);
      const b = valueGenerator(256);
      rgbColor = `rgb(${r}, ${g}, ${b})`;

      setRandomColor(rgbColor);
    }
  }

  // console.log(randomColor)

  return (
    <div className="rcg-container" style={{backgroundColor: randomColor}}>
      <h3 style={{textAlign: "center"}}>Project 2. Random Color Generator</h3>
      <div className="rcg-btn-group">
        <button className='rcg-btn' onClick={()=>handleSetHEXColorType("hex")}>HEX color</button>
        <button className='rcg-btn' onClick={()=>handleSetRGBColorType('rgb')}>RGB color</button>
        <button className='rcg-btn' onClick={createRandomColor}>Create random color</button>
      </div>

      <div className="rcg-titles">
        <h1 className="rcg-color-type">{`${colorType === "hex" ? "HEX" : "RGB"} color`}</h1>
        <h1 className='rcg-color'>{randomColor}</h1>
      </div>
    </div>
  )
}

export default RandomColorGenerator;