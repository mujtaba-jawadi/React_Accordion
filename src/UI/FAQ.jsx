export const FAQ = ({ currentElement, onToggle, isActive}) => {
  const { question, answer } = currentElement;
  return (
    <li>
      <div className="accordion-grid">
        <p>{question}</p>
        <button onClick={onToggle} className={isActive ? "active-btn" : ""}>{isActive ? "Close" : "Show"}</button>
      </div>
      <p>{isActive && answer}</p>
    </li>
  );
};
