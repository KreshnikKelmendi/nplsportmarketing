import { useState } from "react";

const Accordion = ({ title, content}) => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
      setIsOpen(!isOpen);
    };
    
    return(
       <>
         <div className="col-lg-6 col-sm-7 accordion">
            <div className={`accordion-header ${isOpen ? 'open' : ''} textOn3`} onClick={toggleAccordion}>
                <p className="textOn3">{title}</p>
                <span className={`icon ${isOpen ? 'open' : ''}`}>{isOpen ? '↑' : '↓'}</span>
            </div>
            {isOpen && <div className="accordion-content">{content}</div>}
         </div>
       </>
    ) 
}

export default Accordion;