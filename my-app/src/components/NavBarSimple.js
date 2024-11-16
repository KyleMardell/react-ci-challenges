import React from "react";
import NavBarForm from "./NavBarForm";
import css from "./css/NavBarSimple.module.css";

class NavBarSimple extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            displayForm: "false",
        }
    }

    toggleDisplayForm = () => {
        this.setState((prevState) => ({
            displayForm: !prevState.displayForm,
        }));
    };

    render() {
        return (
                <div className={css.NavBar}>
                    <h1>My Gallery</h1>
                    <NavBarForm
                        displayForm={this.state.displayForm}
                        toggleDisplayForm={this.toggleDisplayForm}
                    />
                </div>
        )
    }
}

export default NavBarSimple;