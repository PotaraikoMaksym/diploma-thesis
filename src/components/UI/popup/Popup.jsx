import React, { useState } from "react";
import classes from "./Popup.module.css";
import popupJSON from "../../../config/popup.json"


const Popup = (props) => {
    const [isOpen, setIsOpen] = useState(popupJSON.visible);

    const togglePopup = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            {isOpen && (
                <div className={classes.popupContainer}>
                    <a href={popupJSON.link}>
                        <p className={classes.popupText}>
                            {popupJSON.text}
                        </p>
                    </a>
                    <button className={classes.closePopupButton} onClick={togglePopup}>X</button>
                </div>
            )}
        </div>
    );
};

export default Popup;