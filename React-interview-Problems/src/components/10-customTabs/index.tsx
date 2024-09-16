import "./style.css"
import Tabs from "./Tabs"


// from 2:43:16 to 2:56:52

function RandomComponent({content}:{content: string}){
  return (
    <div className="ct-random-component">
      <div className="ct-tab-content">{content}</div>      
    </div>
  )
}

function CustomTabs() {
  const tabContent:{id: number, label: string, content: string | HTMLDivElement}[] = [
    {
      id: 11,
      label: "Tab 1",
      content: "This is tab 1 content."
    },
    {
      id: 12,
      label: "Tab 2",
      content: "This is tab 2 content."
    },
    {
      id: 13,
      label: "Tab 3",
      content: <RandomComponent content="This is tab 3 Component"/>
    },
  ]
  const handleOnChange = (index) => {
    console.log("Parent : ", index);
  }
  return (
    <div className="ct-container">
      <h3 className="ct-title">Project 10. Custom Tabs</h3>    
      
      <Tabs tabContent={tabContent} onChange={handleOnChange}/>
          
    </div>
  )
}

export default CustomTabs