import "./style/Button.css";

const Button = ({ text, onClick, imgType, type }) => {
  return (
    <button onClick={onClick} className={`button button_${type}`}>
      <img src={`/${imgType}.png`} alt="" />
      {text}
    </button>
  );
};

export default Button;