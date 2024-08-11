import "./style/Button.css";

const Button = ({ text, onClick, imgType, type, nowCategory, isVisible }) => {
  return (
    <button onClick={onClick} className={`button button_${type} button_${nowCategory}`}>
      <img src={`/${imgType}.png`} alt="" />
      {text}
    </button>
  );
};

export default Button;