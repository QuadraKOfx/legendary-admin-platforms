import React, {useState} from "react";
import "./profile.css";
import avatar from "../../../material/assets/images/avatar.png";

function ProfilePage(props) {
    const [inputs, setInputs] = useState({});

    const handleChange = (event) => {
        const {name, value} = event.target;
        setInputs((values) => ({...values, [name]: value}))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.warn(inputs);
    }

    return (
        <div className={`row ${props.alt}`}>
            <div className="col-lg-3 pr-6 pl-6">
                <div id="avatar" className="bg-white py-11 px-5 box-shadow rounded text-center mb-5">
                    <img src={avatar} className="mb-5" alt="User Avatar"
                         width="72" height="72"/>
                    <h2>Marios Constantinou</h2>
                </div>
            </div>
            <div className="col-lg-9">
                <div className="bg-white p-7 p-lg-11 box-shadow rounded mb-md-7 mb-5">
                    <div id="user-details-form">
                        <div className="mb-6">
                            <form onSubmit={handleSubmit} className="profile-form">
                                <div className="flex flex-row dsgDG">
                                    <fieldset className="form-input">
                                        <div className="input-wrapper">
                                            <div className="input-inner">
                                                <input className="input-name" name="name" onChange={handleChange} inputMode="text" placeholder="Marios"/>
                                                <label className="input-label">Name</label>
                                            </div>
                                        </div>
                                    </fieldset>
                                    <fieldset className="form-input">
                                        <div className="input-wrapper">
                                            <div className="input-inner">
                                                <input className="input-name" name="surname" onChange={handleChange} inputMode="text" placeholder="Constantinou"/>
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
