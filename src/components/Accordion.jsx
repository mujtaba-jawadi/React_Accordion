import { useState } from "react";
import faq from "../api/FAQ.json";
import { useEffect } from "react";
import { FAQ } from "../UI/FAQ";

export const Accordion = () => {
  const [data, setData] = useState([]);
  const [activeId, setActiveId] = useState(false);

  useEffect(() => {
    setData(faq);
  }, []);

  const handleButton = (id)=>{
   setActiveId((previousId)=> (previousId === id ? false : id ))
  }

  return (
    <>
      <h1>The Accordion</h1>
      <ul className="section-accordion">
        {data.map((currentElement) => {
          return (
            <FAQ
              key={currentElement.id}
              currentElement={currentElement}
              isActive={activeId === currentElement.id}
              onToggle={()=>{handleButton(currentElement.id)}}
            />
          );
        })}
      </ul>
    </>
  );
};
