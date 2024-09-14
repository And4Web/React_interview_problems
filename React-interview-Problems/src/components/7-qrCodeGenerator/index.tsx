import { useState } from "react";
import "./style.css"

import QRCode from 'react-qr-code';

// from 2:01:20 to 2:08:45

// using package - react-qr-code - npm i react-qr-code

function QrCodeGenerator() {
  const [qrCode, setQrCode] = useState<string>('');
  const [input, setInput] = useState<string>('');

  const handleGenerateQRCode = () => {
    setQrCode(input);
    setInput('');
  }

  return (
    <div className="qrc-container">
      <h3 className="qrc-title">Project 7. QR Code Generator</h3>

      <input type="text" name="qr-code" onChange={(e)=>setInput(e.target.value)} value={input} className="qrc-input" placeholder="Enter something"/>

      <button className="qrc-btn" onClick={handleGenerateQRCode} disabled={!input}>{input ? "Generate QR Code": "Enter Something"}</button>

      <QRCode id="qr-code-value" value={qrCode} size={400} bgColor="rgb(253, 246, 236)"/>
    </div>
  )
}

export default QrCodeGenerator