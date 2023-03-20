import React, { useState } from "react";
import faq from "../Assets/json/faq.json";

const FaqItem = ({ id, item, isOpen, onToggle }) => {
  return (
    <div className={`faq-item ${isOpen ? "opened" : ""}`}>
      <div
        className="faq-question"
        onClick={(e) => {
          onToggle(isOpen ? null : id);
        }}
      >
        <span>{item.question}</span>
        <div className={`faq-icon ${isOpen ? "opened" : ""}`}>
          <span className="arrow">
            <span></span>
            <span></span>
          </span>
        </div>
      </div>

      <div className={`faq-answer ${isOpen ? "opened" : ""}`}>
        {item.answer}
      </div>
    </div>
  );
};

const FAQ = () => {
  const [selected, setSelected] = useState();
  return (
    <div className="faq-section">
      <div className="faq-title">
        <div>
          <h4>FAQ'S</h4>
          <div className="faq-second-heading">
            <h1>Frequently Asked </h1>
            <span>Questions</span>
          </div>
        </div>

        <div className="faq-email-section">
          <p>Couldn't find what you were looking for? write to us at</p>
          <span>name@mycompany.com</span>
        </div>
      </div>

      <div className="faq-details">
        <div className="faq-items">
          {faq.map((item, index) => (
            <FaqItem
              key={index}
              id={index}
              item={item}
              isOpen={selected === index}
              onToggle={setSelected}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
