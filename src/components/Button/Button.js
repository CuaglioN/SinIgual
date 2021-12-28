import react from "react";
import "./Button.css";

const Button = (props) => {
    return (
        <button className="normalButton">{props.content}</button>
    )
}

export default Button;