import React from "react";

export default function AccordionItem({faq, onToggle, active}){
    const {question, answer} = faq;

    return(
        <li className={`accordion_item ${active ? "active": ""}`}>
            <button className="button" onClick={onToggle}>
                {question}
                <span className="control">{active ? "-" : "+"}</span>
            </button>
            <div className={`answer_wrapper ${active ? "open" : ""}`}>
                <div className="answer">
                    {answer}
                </div>
            </div>
        </li>
    )
}