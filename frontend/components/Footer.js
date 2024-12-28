import { assets } from "@/assets/assets"
import "./../styles/footer.css"
const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-content">
                <div className="footer-content-left">
                    <img src={assets.logo} alt="" srcset="" />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio asperiores, animi magni architecto fugit blanditiis cupiditate maiores nam amet sapiente eligendi aut dolor vero explicabo, debitis, facere eius reiciendis nulla.</p>
                    <div className="footer-social-icons">
                        <img src={assets.facebook} alt="" />
                        <img src={assets.instagram} alt="" />
                        <img src={assets.twitter} alt="" />
                    </div>
                </div>
                <div className="footer-content-center">
                    <h2>COMPANY</h2>
                    <ul>
                        <li>Home</li>
                        <li>About us</li>
                        <li>Delivery</li>
                        <li>Privacy policy</li>
                    </ul>
                </div>
                <div className="footer-content-right">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+1-212-456-7890</li>
                    <li>contact@digital-store.com</li>
                </ul>
            </div>
            </div>
            <hr />
            <p className="footer-copyright">Copyright 2024 © digitus.com - All Rights Reserved</p>
        </div>
    )
}

export default Footer