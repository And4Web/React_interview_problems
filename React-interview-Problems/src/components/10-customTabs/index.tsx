import "./style.css"
import Tabs from "./Tabs"


// from 2:43:16 to 2:56:52

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
      content: <div className="ct-tab-content">This is tab 3 Component</div>
    },
  ]
  return (
    <div className="ct-container">
      <h3 className="ct-title">Project 10. Custom Tabs</h3>    
      
      <Tabs tabContent={tabContent}/>
          
    </div>
  )
}

export default CustomTabs