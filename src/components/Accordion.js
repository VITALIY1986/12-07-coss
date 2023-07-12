import React, { useState } from "react";
import AccordionItem from "./AccordionItem";

const Accordion = (props) => {
  const { dess, description,featuredproducts,productCategories } = props || {};
  const [activeIndex, setActiveIndex] = useState(1);
  const questionsAnswers = [
    
    {
      question: "Descriere",
      answer:
      <div
      className="singl_product_description mb-5 mt-10 "
                      dangerouslySetInnerHTML={ {
                        __html: description,
                      } }
                    
                    />,
    },
    {
      question: "Informații suplimentare",
      answer:dess
     
    },
   
   
  ];

  const renderedQuestionsAnswers = questionsAnswers.map((item, index) => {
    const showDescription = index === activeIndex ? "show-description" : "";
    const fontWeightBold = index === activeIndex ? "text-red-300 font-weight-bold " : "";
    
    const ariaExpanded = index === activeIndex ? "true" : "false";
    return (
      <AccordionItem
        showDescription={showDescription}
        fontWeightBold={fontWeightBold}
        ariaExpanded={ariaExpanded}
       
        item={item}
        index={index}
     
        onClick={() => {
          setActiveIndex(index);
        }}
      />
    );
  });

  return (
    <> 
    <div className="faq flex justify-center px-6 flex-col ">
  
      <dl className="faq__list ">{renderedQuestionsAnswers}</dl>
    </div>
    </>
  );
};

export default Accordion;