import React from 'react';
import { FaYoutube, FaGithub, FaFacebook, FaBootstrap } from 'react-icons/fa';
import './Footer.module.css'

const Footer = () => {
    return (
        <div className='footer px-5'>
            <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
                <div className="col-md-4 d-flex align-items-center">
                    <a href="https://getbootstrap.com/" target='_blank' rel="noopener noreferrer" className="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1">
                        <FaBootstrap />
                    </a>
                    <span className="mb-3 mb-md-0 text-body-secondary">&copy; 2024 Company, Inc</span>
                </div>

                <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
                    <li className="ms-3">
                        <a className="text-body-secondary" target='_blank' rel="noopener noreferrer" href="https://youtube.com/@phoom300x">
                            <FaYoutube />
                        </a>
                    </li>
                    <li className="ms-3">
                        <a className="text-body-secondary" target='_blank' rel="noopener noreferrer" href="https://github.com/Phoompirak">
                            <FaGithub />
                        </a>
                    </li>
                    <li className="ms-3">
                        <a className="text-body-secondary" target='_blank' rel="noopener noreferrer" href="https://facebook.com">
                            <FaFacebook />
                        </a>
                    </li>
                </ul>
            </footer>
        </div>
    );
};

export default Footer;
