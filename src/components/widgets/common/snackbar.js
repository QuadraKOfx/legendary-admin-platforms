import React, {useState, useImperativeHandle} from "react";
import {useDispatch, useSelector} from "react-redux";
import CloseIcon from "@mui/icons-material/Close";
import {setCloseWelcome} from "../../../store/middleware/actions/appActions";

function Snackbar() {

    const showSnackbar = useSelector(({app}) => app.appReducer);
    const dispatch = useDispatch();

    const thanksWelcome = () => {
        dispatch(setCloseWelcome());
    }
    console.info(showSnackbar);

    return (
        <div className="snackbar bg-secondary"
             id={showSnackbar.welcomeMode ? "show" : "hide"}>
            <div className="message">Welcome! Play around with dummy data :)</div>
            <button type="button" onClick={thanksWelcome}><CloseIcon/></button>
        </div>
    );
}

export default Snackbar;
