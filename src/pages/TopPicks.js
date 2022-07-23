function TopPicks() {
    return(
        <>
        <h1>TopPicks</h1>
        <div className="card-group ">
            <div className="card" >
                <img src="/media/Baseball Glove.jpg" className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title"> Baseball Glove</h5>
                        <p className="card-text">Lorem ipsum dolor sit amet.</p>
                        <button className="button btn-primary rounded"> Add To Cart</button>
                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                    </div>
            </div>

            <div className="card">
                <img src="/media/basketballshoes.jpg" className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">Basketball Shoes</h5>
                        <p className="card-text">Lorem ipsum dolor sit amet.</p>
                        <button className="button btn-primary rounded"> Add To Cart</button>
                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                    </div>
            </div>
            <div className="card">
                <img src="/media/blue-boxing-gloves.jpg" className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">Boxing Gloves</h5>
                        <p className="card-text">Lorem ipsum dolor sit amet..</p>
                        <button className="button btn-primary rounded"> Add To Cart</button>
                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                    </div>
            </div>
        </div>
        </>
    );
};
export default TopPicks;