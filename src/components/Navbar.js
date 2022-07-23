import { Link } from "react-router-dom";

function Navbar() {
    return (
        <>
<header className="header-container container-fluid">
    <div className="navSection1">
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="container-fluid">
                    <Link to="/home" className="navbar-brand">Noble Sports and Goods</Link>
                    <button className="navbar-toggler" type="button"  
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link to="/about" className="nav-link">About Us</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <Link to="/home" className="nav-link dropdown-toggle" id="navbarDropdown" role="button"
                                data-bs-toggle="dropdown" aria-expanded="false">Shop All</Link>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <li>
                                    <Link to="/SingleProduct/1" className="dropdown-item">Baseball Glove</Link>
                                </li>
                                <li>
                                    <Link to="/SingleProduct/2" className="dropdown-item">Basketball</Link>
                                </li>
                                <li>
                                    <Link to="/SingleProduct/3" className="dropdown-item">Boxing Gloves</Link>
                                </li>
                                <li>
                                    <Link to="/SingleProduct/4" className="dropdown-item">Golf Balls</Link>
                                </li>
                                <li>
                                    <Link to="/SingleProduct/5" className="dropdown-item">Football Helmet</Link>
                                </li>
                                <li>
                                    <Link to="/SingleProduct/6" className="dropdown-item">Soccer Ball</Link>
                                </li>
                                <li>
                                    <Link to="/SingleProduct/7" className="dropdown-item">Tennis Racquet</Link>
                                </li>
                                <li>
                                    <Link to="/SingleProduct/8" className="dropdown-item">Volleyball</Link>
                                </li>
                                <li>
                                    <Link to="/SingleProduct/9" className="dropdown-item">Basketball Shoes</Link>
                                </li>
                                <li>
                                    <Link to="/SingleProduct/10" className="dropdown-item">Hockey Skates</Link>
                                </li>
                                <li>
                                    <Link to="/SingleProduct/11" className="dropdown-item">Cleats</Link>
                                </li>
                                <li>
                                    <Link to="/SingleProduct/12" className="dropdown-item">Rock Climbing Shoes</Link>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            <form className="d-flex col-6" role="search">
                <input className="form-control me-2 col-12" type="search" placeholder="What Can We Help You Find?" aria-label="Search"/>
                <button className="btn btn-outline-success" type="submit"></button>
            </form>
            </div>
        </nav>
    </div>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
            <Link to="/WeeklyAd" className="navbar-brand">WeeklyAd</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"          data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button> 
            
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link to="/TopPicks" className="nav-link">Top Picks</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/CustomerSupport" className="nav-link">Customer Support</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/Gear" className="nav-link">Gear</Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</header>
</>
    );
};
export default Navbar;
