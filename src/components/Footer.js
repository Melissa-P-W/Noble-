function Footer() {
    return(

        <footer className="footer bg-primary" id="footer">
        <div className="container-fluid">
            <div className="row">
                <div className="col=md-6">
                    <h3 className="signUp">Connect with us for the lastest deals, news, and more.</h3>
                </div>
                <div className="col-md-12">
                    <input type="email" id="email" name="email" placeholder="Email Address"/>
                    <button className="button-btn rounded">Sign Up</button>
                </div>
            </div>

            <div className="row">
                <div className="col-md-3">
                    <h4>Services</h4>
                    <ul className="services-list">
                        <li className="link-circle"><a href="/customerSupport">Customer Support</a></li>
                        <li className="link-circle"><a href="/toppicks">Top Picks</a></li>
                    </ul>
                </div>

                <div className="col-md-3">
                    <h4>Shop</h4>
                    <ul className="footer-list">
                        <li className="link-square"><a href="/weeklyad">Weekly Ad</a></li>
                        
                        <li className="link-square"><a href="/promos-coupons">Promos / Coupons</a></li>
                    </ul>
                </div>

                <div className="col-md-3">
                    <h4>About Us</h4>
                    <ul className="footer-list">
                        <li className="link-square"><a href="/about">About Noble Sports and Goods</a></li>
                        <li className="link-square"><a href="/locations">Locations</a></li>
                        <li className="link-square"><a href="/partnerships">Partnerships</a></li>
                    </ul>
                </div>
            </div>
            
        </div>
        <p className="colophon">&copy; 2022 Noble Sports and Goods</p>
        </footer>
    
    );
};

export default Footer;