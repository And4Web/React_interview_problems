import { useState } from 'react';
import './style.css'
import Modal from './Modal';

// from 2:56:52 to 3:13:08

function CustomModal() {
  const [isOpen, setIsOpen] = useState<boolean>(false)


  const handleOnClick = () => {
    setIsOpen(!isOpen);
  }

  return (
    <div className='cm-container'>
      <h3 className='cm-title'>Project 11. Custom Modal</h3>

      <button className="cm-btn" onClick={handleOnClick}>Open Modal</button>

      {
        isOpen && <Modal content={<h1>CONTENT</h1>} header={<h3>HEADER</h3>} footer={<h3>FOOTER</h3>} onClose={()=>setIsOpen(!isOpen)}/>
      }
     
    </div>
  )
}

export default CustomModal