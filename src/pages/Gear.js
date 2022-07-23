import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function Gear() {
    const {} = useParams();
    const [noble,setNoble] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:3021/api/noble`)
        .then(response => response.json())
        .then(data => {
            setNoble(data);
        })
        .catch(err=> console.log("error", err));

    },[]);

    console.log('noble',noble);

    const nobleElement =noble.map(item=> {
        console.log (item.id);
    return (
        <div key={item.id} className="card col-3" id="GearItems"> 
            <img src={item.img} alt={item.alt} className="card-img-top"/>
            <div className="card-body">
                <h5 className="card-title">{item.productName}</h5>
                <p className="card-text">${item.price}</p>
                <Link to={`/singleProduct/${item.id}`} className="btn btn-primary"> View Product</Link>
            </div>
        </div>
    )
    }
);
return (
    <div>
        {nobleElement}
    </div>
)
}


export default Gear;
