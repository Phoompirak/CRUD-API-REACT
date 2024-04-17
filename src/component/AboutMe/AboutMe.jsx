import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import CheckedCard from '../CheckedCard/CheckedCard';

const AboutMe = () => {
    const [showCheck, setShowCheck] = useState(false);
    const navigate = useNavigate();
    const hadleShowCheckbox = () => {
        setShowCheck(true);
    }
    return (
        <div>
            <Navbar />
            <div className="container col-xl-10 col-xxl-8 px-4 py-5">
                <div className="row align-items-center g-lg-5 py-5">
                    <div className="col-lg-7 text-center text-lg-start">
                        <h1 className="display-4 fw-bold lh-1 text-body-emphasis mb-3">Vertically centered hero sign-up form</h1>
                        <p className="col-lg-10 fs-4">Below is an example form built entirely with Bootstrap’s form controls. Each required form group has a validation state that can be triggered by attempting to submit the form without completing it.</p>
                    </div>
                    <div className="col-md-10 mx-auto col-lg-5">
                        <form className="p-4 p-md-5 border rounded-3 bg-body-tertiary">
                            <div className="form-floating mb-3">
                                <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                                <label htmlFor="floatingInput">Email address</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                                <label htmlFor="floatingPassword">Password</label>
                            </div>
                            <div className="form-check mb-3">
                                <input className="form-check-input" type="checkbox" value="" id="rememberMe" />
                                <label className="form-check-label" htmlFor="rememberMe">Remember me</label>
                            </div>
                            <button
                            onClick={hadleShowCheckbox}
                            className="w-100 btn btn-lg btn-primary"
                            type="button">Sign up</button>
                            <hr className="my-4" />
                            <small className="text-body-secondary">By clicking Sign up, you agree to the terms of use.</small>
                        </form>
                    </div>
                </div>
            </div>
            { showCheck && <CheckedCard msg={"โจ๊ะๆ กดไมน้าบ!"} checkError={false} fnOk={() => {
                setShowCheck(false)
                setTimeout(() => {
                    navigate('/')
                }, 3000)
                }}/> }
        </div>
    );
};

export default AboutMe;
