import React from "react";
import './style.scss';

class Button extends React.Component {
  render() {
    const isActive = false;
    const styles = {
      backgroundColor: isActive ? 'green' : 'red'
    }

    return (
      <button className="buttonStyle">
        Botão
      </button>
    )
  }
}

export default Button;