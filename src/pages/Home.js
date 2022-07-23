function Home () {
    return (
        <>
        <main className="mainSection">
        <div id="section1Carousel" className="carousel carousel-dark slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#section1Carousel" data-bs-slide-to="0" className="active"
                        aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#section1Carousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#section1Carousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active" data-bs-interval="10000">
                    <img src="/media/pitcherbaseball.jpg"className="d-block w-100 img-fluid" alt="..."/>           
                        <div className="carousel-caption d-none d-md-block" id="home-c">
                            
                            <h5>Don't drop the ball.</h5>
                            <p>Shop Baseball</p>
                        </div>
                </div>
                <div className="carousel-item" data-bs-interval="2000">
                        <img src="/media/volleyballplaying.jpg"className="d-block w-100 img-fluid" alt="..."/>
                        <div className="carousel-caption d-none d-md-block" id="home-c">
                            <h5>Love at first spike.</h5>
                            <p>Shop Volleyball</p>
                        </div>
                </div>
                <div className="carousel-item">
                    <img src="/media/boxerimage.jpg" className="d-block w-100 img-fluid" alt="..."/>
                    <div className="carousel-caption d-none d-md-block" id="home-c">
                            <h5>Don't give up glove up.</h5>
                            <p>Shop Boxing</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="card-group">
            <div className="card">
                <img src="/media/zoey soccer.png" className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">Soccer</h5>
                        <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. In, obcaecati.</p>
                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                    </div>
            </div>
            <div className="card">
                <img src="/media/rock climbing.jpg" className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">Rock Climbing</h5>
                        <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa eligendi dolorem itaque quo esse.</p>
                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                    </div>
            </div>
            <div className="card">
                <img src="/media/hockeyplaying.jpg" className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">Hockey</h5>
                        <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed unde deserunt obcaecati sapiente hic ut.</p>
                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                    </div>
            </div>
        </div>
</main>
</>
    );
};

export default Home;