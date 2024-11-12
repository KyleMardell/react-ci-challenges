import React from "react";
import css from "./css/NavBarSimple.module.css";

class NavBarSimple extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: "guest",
            message: "Hello",
            buttonText: "log in",
        }
    }

    handleClick() {
        this.setState((prevState, prevProps) => {
            return {
                name: prevState.name === "guest" ? "user" : "guest",
                message: prevState.message === "Hello" ? "Welcome back" : "Hello",
                buttonText: prevState.buttonText === "log in" ? "log out" : "log in",
            }
        });
    }

    render() {
        return (
                <div className={css.NavBar}>
                    <h1>My Gallery</h1>
                    <div>
                        <span>{this.state.message}, {this.state.name}!</span>
                        <button onClick={() => this.handleClick()}>{this.state.buttonText}</button>
                    </div>
                </div>
        )
    }
}

export default NavBarSimple;