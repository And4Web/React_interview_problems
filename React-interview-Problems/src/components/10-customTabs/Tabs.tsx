import { useState } from "react";

type Props = {
  tabContent: {
    id: number;
    label: string;
    content: string | HTMLElement
  }[],
  onChange?: ()=>undefined
}


function Tabs({tabContent, onChange}:Props) {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const handleClick = (id:number) => {
    setCurrentIndex(id);
    onChange(id)
  }
// console.log(currentIndex)
  return (
    <div className="ct-wrapper">
      <div className="ct-tabs-container">
        {
          tabContent && tabContent.length > 0 && tabContent.map((tab, index)=>(
            <div className="ct-tab" key={`${index}-${tab.label}-${tab.id}`} onClick={()=>handleClick(index)}>{tab.label}</div>
          ))
        }
      </div>
      {/* {
        tabContent && tabContent.length > 0 && tabContent.map((tab, index)=>{
          return (
            currentIndex === index && <RandomComponent key={`${index}-${tab.label}`} content={tab.content}/>
          )
        })
      } */}
      {
        tabContent[currentIndex] && tabContent[currentIndex].content
      }
    </div>
  )
}

export default Tabs