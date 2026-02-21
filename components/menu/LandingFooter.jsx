import React from 'react'

const LandingFooter = () => {
  return (
     <footer id='landing-footer'>
        <div className="footer-grid">
            <div className="footer-brand">
                <h3>PIZZASQUARE</h3>
                <p>Delivering happiness, one perfect square at a time. Fresh ingredients, authentic recipes, and passionate service since 2020.</p>
            </div>
            <div className="footer-links">
                <h4>Quick Links</h4>
                <ul>
                    <li><a href="#">Menu</a></li>
                    <li><a href="#">Promotions</a></li>
                    <li><a href="#">Branches</a></li>
                    <li><a href="#">Careers</a></li>
                </ul>
            </div>
            <div className="footer-links">
                <h4>Support</h4>
                <ul>
                    <li><a href="#">Help Center</a></li>
                    <li><a href="#">Track Order</a></li>
                    <li><a href="#">Contact Us</a></li>
                    <li><a href="#">FAQs</a></li>
                </ul>
            </div>
            <div className="footer-links">
                <h4>Legal</h4>
                <ul>
                    <li><a href="#">Privacy Policy</a></li>
                    <li><a href="#">Terms of Service</a></li>
                    <li><a href="#">Cookie Policy</a></li>
                </ul>
            </div>
        </div>
        <div className="footer-bottom">
            <p>&copy; 2024 PizzaSquare. All rights reserved. Made with ❤️ in Nigeria</p>
        </div>
    </footer>
  )
}

export default LandingFooter
