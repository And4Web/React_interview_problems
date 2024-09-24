
type Props = {
  header: string | HTMLElement;
  content: string | HTMLElement;
  footer: string | HTMLElement;
  onClose: () => void;
}

function Modal({header, content, footer, onClose}:Props) {
  return (
    <>
      <div className="cm-modal"></div>
      
      <div className="cm-modal-box">
        <div className="cm-modal-header">
          {header}
          <span className="cm-close-icon" onClick={onClose}>X</span>
        </div>
        <div className="cm-modal-content">{content}</div>
        <div className="cm-modal-footer">{footer}</div>
      </div>
    </>
  )
}

export default Modal