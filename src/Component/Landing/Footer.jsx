import React from "react";
import { Link } from "react-router-dom";
import './style.css';
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";


const Footer = () => {
    return (
        <>
            <footer className="footer">
                <div className="container">
                    <div className="row">
                        <div className="footer-img text-center pt-4 d-flex align-items-center justify-content-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="167" height="47" viewBox="0 0 167 47" fill="none"><path d="M56.76 16.2C56.76 16.3333 56.7067 16.4533 56.6 16.56C56.52 16.64 56.4133 16.68 56.28 16.68H48.24C48.1067 16.68 48.04 16.7467 48.04 16.88V21.92C48.04 22.0533 48.1067 22.12 48.24 22.12H52.64C52.7733 22.12 52.88 22.1733 52.96 22.28C53.0667 22.36 53.12 22.4667 53.12 22.6V27.36C53.12 27.4933 53.0667 27.6133 52.96 27.72C52.88 27.8 52.7733 27.84 52.64 27.84H48.24C48.1067 27.84 48.04 27.9067 48.04 28.04V38.52C48.04 38.6533 47.9867 38.7733 47.88 38.88C47.8 38.96 47.6933 39 47.56 39H41.88C41.7467 39 41.6267 38.96 41.52 38.88C41.44 38.7733 41.4 38.6533 41.4 38.52V11.48C41.4 11.3467 41.44 11.24 41.52 11.16C41.6267 11.0533 41.7467 11 41.88 11H56.28C56.4133 11 56.52 11.0533 56.6 11.16C56.7067 11.24 56.76 11.3467 56.76 11.48V16.2ZM68.7934 39C68.4734 39 68.3001 38.8533 68.2734 38.56L67.7534 35.08C67.7534 34.9467 67.6734 34.88 67.5134 34.88H63.1934C63.0334 34.88 62.9534 34.9467 62.9534 35.08L62.4734 38.56C62.4468 38.8533 62.2734 39 61.9534 39H56.2734C55.9268 39 55.7934 38.8267 55.8734 38.48L61.6734 11.44C61.7268 11.1467 61.9001 11 62.1934 11H68.7134C69.0068 11 69.1801 11.1467 69.2334 11.44L74.9934 38.48L75.0334 38.64C75.0334 38.88 74.8868 39 74.5934 39H68.7934ZM63.8334 29.56C63.8334 29.6933 63.8868 29.76 63.9934 29.76H66.6734C66.7801 29.76 66.8334 29.6933 66.8334 29.56L65.3934 20.44C65.3668 20.3333 65.3268 20.28 65.2734 20.28C65.2201 20.28 65.1801 20.3333 65.1534 20.44L63.8334 29.56ZM76.7059 39C76.5726 39 76.4526 38.96 76.3459 38.88C76.2659 38.7733 76.2259 38.6533 76.2259 38.52V33.64C76.2259 33.5067 76.2793 33.3067 76.3859 33.04L84.4659 16.92C84.4926 16.84 84.4926 16.7867 84.4659 16.76C84.4393 16.7067 84.3859 16.68 84.3059 16.68H76.7059C76.5726 16.68 76.4526 16.64 76.3459 16.56C76.2659 16.4533 76.2259 16.3333 76.2259 16.2V11.48C76.2259 11.3467 76.2659 11.24 76.3459 11.16C76.4526 11.0533 76.5726 11 76.7059 11H91.1059C91.2393 11 91.3459 11.0533 91.4259 11.16C91.5326 11.24 91.5859 11.3467 91.5859 11.48V16.36C91.5859 16.4933 91.5326 16.6933 91.4259 16.96L83.2659 33.08C83.2393 33.16 83.2393 33.2267 83.2659 33.28C83.2926 33.3067 83.3459 33.32 83.4259 33.32H91.1059C91.2393 33.32 91.3459 33.3733 91.4259 33.48C91.5326 33.56 91.5859 33.6667 91.5859 33.8V38.52C91.5859 38.6533 91.5326 38.7733 91.4259 38.88C91.3459 38.96 91.2393 39 91.1059 39H76.7059Z" fill="#C33130" /><path d="M109.104 16.2C109.104 16.3333 109.05 16.4533 108.944 16.56C108.864 16.64 108.757 16.68 108.624 16.68H100.584C100.45 16.68 100.384 16.7467 100.384 16.88V21.92C100.384 22.0533 100.45 22.12 100.584 22.12H104.984C105.117 22.12 105.224 22.1733 105.304 22.28C105.41 22.36 105.464 22.4667 105.464 22.6V27.36C105.464 27.4933 105.41 27.6133 105.304 27.72C105.224 27.8 105.117 27.84 104.984 27.84H100.584C100.45 27.84 100.384 27.9067 100.384 28.04V38.52C100.384 38.6533 100.33 38.7733 100.224 38.88C100.144 38.96 100.037 39 99.9038 39H94.2238C94.0904 39 93.9704 38.96 93.8638 38.88C93.7838 38.7733 93.7438 38.6533 93.7438 38.52V11.48C93.7438 11.3467 93.7838 11.24 93.8638 11.16C93.9704 11.0533 94.0904 11 94.2238 11H108.624C108.757 11 108.864 11.0533 108.944 11.16C109.05 11.24 109.104 11.3467 109.104 11.48V16.2ZM118.974 39.32C116.387 39.32 114.321 38.5733 112.774 37.08C111.254 35.5867 110.494 33.5733 110.494 31.04V18.96C110.494 16.4533 111.254 14.4533 112.774 12.96C114.321 11.44 116.387 10.68 118.974 10.68C121.534 10.68 123.587 11.44 125.134 12.96C126.707 14.4533 127.494 16.4533 127.494 18.96V31.04C127.494 33.5733 126.707 35.5867 125.134 37.08C123.587 38.5733 121.534 39.32 118.974 39.32ZM118.974 33.64C119.561 33.64 120.014 33.44 120.334 33.04C120.681 32.6133 120.854 32.04 120.854 31.32V18.68C120.854 17.96 120.681 17.4 120.334 17C120.014 16.5733 119.561 16.36 118.974 16.36C118.387 16.36 117.934 16.5733 117.614 17C117.294 17.4 117.134 17.96 117.134 18.68V31.32C117.134 32.04 117.294 32.6133 117.614 33.04C117.934 33.44 118.387 33.64 118.974 33.64ZM138.115 39.32C135.528 39.32 133.461 38.5733 131.915 37.08C130.395 35.5867 129.635 33.5733 129.635 31.04V18.96C129.635 16.4533 130.395 14.4533 131.915 12.96C133.461 11.44 135.528 10.68 138.115 10.68C140.675 10.68 142.728 11.44 144.275 12.96C145.848 14.4533 146.635 16.4533 146.635 18.96V31.04C146.635 33.5733 145.848 35.5867 144.275 37.08C142.728 38.5733 140.675 39.32 138.115 39.32ZM138.115 33.64C138.701 33.64 139.155 33.44 139.475 33.04C139.821 32.6133 139.995 32.04 139.995 31.32V18.68C139.995 17.96 139.821 17.4 139.475 17C139.155 16.5733 138.701 16.36 138.115 16.36C137.528 16.36 137.075 16.5733 136.755 17C136.435 17.4 136.275 17.96 136.275 18.68V31.32C136.275 32.04 136.435 32.6133 136.755 33.04C137.075 33.44 137.528 33.64 138.115 33.64ZM149.575 39C149.442 39 149.322 38.96 149.215 38.88C149.135 38.7733 149.095 38.6533 149.095 38.52V11.48C149.095 11.3467 149.135 11.24 149.215 11.16C149.322 11.0533 149.442 11 149.575 11H157.215C159.775 11 161.829 11.72 163.375 13.16C164.922 14.6 165.695 16.5067 165.695 18.88V31.12C165.695 33.4933 164.922 35.4 163.375 36.84C161.829 38.28 159.775 39 157.215 39H149.575ZM155.735 33.12C155.735 33.2533 155.802 33.32 155.935 33.32L157.055 33.28C157.615 33.2533 158.082 33.0133 158.455 32.56C158.829 32.08 159.029 31.4533 159.055 30.68V19.32C159.055 18.52 158.869 17.88 158.495 17.4C158.122 16.92 157.629 16.68 157.015 16.68H155.935C155.802 16.68 155.735 16.7467 155.735 16.88V33.12Z" fill="#212121" /><g clip-path="url(#clip0_598_2)"><path d="M29.6003 11H20.1296L26.5731 17.7233C27.9541 16.8791 29.7897 17.0452 30.9882 18.2251L36.2918 23.4464C36.5432 23.6939 36.7258 23.9618 36.8187 24.1957C36.9117 24.4296 36.9117 24.6297 36.8015 24.7382C36.5811 24.9552 35.9922 24.7314 35.4894 24.2364L30.5233 19.3439C30.0205 18.8489 29.4316 18.6218 29.2112 18.8422C29.101 18.9507 29.101 19.1507 29.1939 19.3846C29.2869 19.6186 29.4695 19.8864 29.7209 20.1339L34.6904 25.023C34.9418 25.2705 35.1243 25.5383 35.2173 25.7723C35.3103 26.0062 35.3103 26.2063 35.2001 26.3147C34.9797 26.5317 34.3908 26.308 33.888 25.813L28.9184 20.9239C28.4156 20.4289 27.8267 20.2017 27.6063 20.4221C27.4961 20.5306 27.4961 20.7306 27.5891 20.9646C27.6821 21.1985 27.8646 21.4664 28.116 21.7139L33.0856 26.6029C33.337 26.8504 33.5195 27.1183 33.6125 27.3522C33.7055 27.5862 33.7055 27.7862 33.5952 27.8947C33.3748 28.1117 32.7859 27.8879 32.2831 27.3929L27.317 22.5039C26.8142 22.0089 26.2253 21.7817 26.0049 22.0021C25.8947 22.1106 25.8947 22.3106 25.9877 22.5445C26.0807 22.7785 26.2632 23.0463 26.5146 23.2938L31.4841 28.1829C31.7355 28.4304 31.9181 28.6982 32.0111 28.9322C32.104 29.1661 32.104 29.3662 31.9938 29.4747C31.7734 29.6917 31.1845 29.4679 30.6817 28.9729L25.3781 23.7516C24.1796 22.5717 24.0074 20.7679 24.8615 19.4084L21.1869 16.0009C17.7292 12.7902 13.1557 11 8.40312 11C3.76074 11 0 14.7024 0 19.2727V30.7495C0 35.3198 3.76074 39.0222 8.40312 39.0222H20.2364L18.3525 32.0514C16.2449 32.0175 14.0787 30.1121 13.1936 27.3183C12.157 24.0499 13.2625 20.8018 15.6629 20.0627C18.0633 19.327 20.8494 21.3782 21.886 24.6466C22.7711 27.4404 22.0926 30.2206 20.3776 31.4276L25.1887 46.5898C25.3471 47.1187 26.0979 47.139 26.2873 46.6203L29.5969 39.0188C34.2393 39.0188 38 35.3164 38 30.7461V19.2727C38 14.7024 34.2393 11 29.6003 11Z" fill="url(#paint0_linear_598_2)" /></g><defs><linearGradient id="paint0_linear_598_2" x1="-7.16493" y1="29.3204" x2="49.1556" y2="28.5515" gradientUnits="userSpaceOnUse"><stop stop-color="#FF8A00" /><stop offset="0.854167" stop-color="#C33130" /></linearGradient><clipPath id="clip0_598_2"><rect width="38" height="36" fill="white" transform="translate(0 11)" /></clipPath></defs></svg>
                        </div>
                        <div className="footer-content pt-4 d-flex justify-content-between pb-4">
                            <div className="col-3">
                                <ul className="text-center">
                                    <li>
                                        <h3 className="fw-bold">ADDRESS</h3>
                                    </li>
                                    <li>
                                        <span className="text-muted">570 8th Ave, New York, NY <br /> 10018 United States</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-3">
                                <ul className="text-center">
                                    <li>
                                        <h3 className="fw-bold">BOOK A TABLE</h3>
                                    </li>
                                    <li className="pb-3">
                                        <span className="text-muted">Dogfood och Sliders foodtruck. <br />Under Om oss kan ni läsa</span>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <span className="text-danger fs-5 ">0123456987</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-3">
                                <ul className="text-center">
                                    <li>
                                        <h3 className="fw-bold">OPENING HOURS</h3>
                                    </li>
                                    <li>
                                        <span className="text-muted">Monday - Friday <br /> 10.00 AM - 11.00 PM</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <hr />
                        <div className="copyright d-flex justify-content-between">
                            <div className="copyright-content">
                                <p style={{fontSize : '18px'}}>Copyright © 2023 <a href="#" style={{color : '#b23920'}}>Fazfood</a>. All rights reserved.
                                </p>
                            </div>
                            <div className="copyright-icon text-muted" >
                                <ul className="d-flex">
                                    <li style={{fontSize : '20px', textAlign : 'center', width : '40px' , height : '40px'}}><FaFacebookF className="text-danger"/></li>
                                    <li className="mx-3" style={{fontSize : '20px' ,textAlign : 'center', width : '40px' , height : '40px'}}><FaInstagram className="text-danger"/></li>
                                    <li style={{fontSize : '20px' , textAlign : 'center', width : '40px' , height : '40px'}}><FaTwitter className="text-danger"/></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer;