import React, {useEffect, useState} from "react";
import avatar from "../../material/assets/images/avatar.png";
import {useSelector} from "react-redux";
import {Select} from "antd";
import {useClientsHook} from "../../hooks/clientsHook";

const { Option } = Select;

function ProfilePage(props) {
    const userState = useSelector(({auth}) => auth.userReducer)
    const [inputs, setInputs] = useState({});
    const {documents, error, getCollection} = useClientsHook("clients");

    const handleSystemChange = (event) => {
        console.info(event);
    }

    const handleChange = (event) => {
        const {name, value} = event.target;
        setInputs((values) => ({...values, [name]: value}))
    }

    console.info(userState.user.uid);

    const handleSubmit = (event) => {
        event.preventDefault();
        console.warn(inputs);
    }

    useEffect(() => {
        if (userState.user) {
            getCollection(userState.user.uid).then((res) => {
                console.info(res);
            });
        }
    })

    return (
        <div className={`row ${props.alt}`}>
            <div className="col-lg-3 pr-6 pl-6">
                <div id="avatar" className="bg-white py-11 px-5 box-shadow rounded text-center mb-5">
                    <img src={avatar} className="mb-5" alt="User Avatar"
                         width="72" height="72"/>
                    <h2>Marios Constantinou</h2>
                </div>
            </div>
            {/* SYSTEMS INFO */}
            <div className="col-lg-9">
                <div className="bg-white p-7 p-lg-11 box-shadow rounded mb-md-7 mb-5">
                    <div id="user-details-form">
                        <div className="mb-6">

                            <div className="info-panel">
                                <h3>Your details</h3>
                            </div>
                            {/* SYSTEM INFO FORM */}
                            <form onSubmit={handleSubmit} className="profile-form">
                                <div className="flex flex-row dsgDG">
                                    <fieldset className="form-input">
                                        <div className="input-wrapper">
                                            <div className="input-inner">
                                                <input className="input-name" name="username"
                                                       onChange={handleSystemChange} inputMode="text"
                                                       placeholder="#3435"/>
                                                <label className="input-label">Username</label>
                                            </div>
                                        </div>
                                    </fieldset>

                                    {/* ROLE INFO */}
                                    <fieldset className="form-input">
                                        <div className="input-wrapper email">
                                            <div className="input-inner">
                                                <input className="input-name"
                                                       placeholder="-admin" disabled={true}/>
                                                <label className="input-label">role</label>
                                            </div>
                                        </div>
                                    </fieldset>
                                </div>

                                <fieldset className="form-input">
                                    <Select
                                        mode="multiple"
                                        className="select-field"
                                        onChange={handleSystemChange}
                                        optionLabelProp="label">
                                        <Option value="Test_user" label="Test_user">
                                            <div className="demo-option-label-item">
                                                Test_user
                                            </div>
                                        </Option>
                                    </Select>
                                </fieldset>

                                {/* SUBMIT BUTTON */}
                                <button className="submit-button" type="submit">Save Changes</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            {/* PERSONAL INFO */}
            <div className="col-lg-9">
                <div className="bg-white p-7 p-lg-11 box-shadow rounded mb-md-7 mb-5">
                    <div id="user-details-form">
                        <div className="mb-6">

                            <div className="info-panel">
                                <h3>Account details</h3>
                            </div>
                            {/* ACCOUNT INFO FORM */}
                            <form onSubmit={handleSubmit} className="profile-form">
                                <div className="flex flex-row dsgDG">
                                    <fieldset className="form-input">
                                        <div className="input-wrapper">
                                            <div className="input-inner">
                                                <input className="input-name" name="name" onChange={handleChange}
                                                       inputMode="text" placeholder="Marios"/>
                                                <label className="input-label">Name</label>
                                            </div>
                                        </div>
                                    </fieldset>
                                    <fieldset className="form-input">
                                        <div className="input-wrapper">
                                            <div className="input-inner">
                                                <input className="input-name" name="surname" onChange={handleChange}
                                                       inputMode="text" placeholder="Constantinou"/>
                                                <label className="input-label">Last Name</label>
                                            </div>
                                        </div>
                                    </fieldset>
                                </div>

                                {/* FORM EMAIL FIELD */}
                                <fieldset className="form-input">
                                    <div className="input-wrapper email">
                                        <div className="input-inner">
                                            <input className="input-name" inputMode="email"
                                                   placeholder="mconstantinou923@gmail.com" disabled={true}/>
                                            <label className="input-label">email</label>
                                        </div>
                                    </div>
                                </fieldset>

                                {/* SUBMIT BUTTON */}
                                <button className="submit-button" type="submit">Save Changes</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default ProfilePage;
