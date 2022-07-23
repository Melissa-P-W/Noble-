import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function SingleProduct() {
    const {id} = useParams();
    const [noble,setNoble] = useState({
        productName:'',
        img:'',
        price:'',
        qty:'',
        itemDesc:'',
    });

    useEffect(() => {
        fetch(`http://localhost:3021/api/noble/${id}/`)
        .then(response => response.json())
        .then(data => {
            setNoble(data);
        })
        .catch(err=> console.log("error", err));

    },[id]);

    return(
            <div className="col" id="SingleProdSec">
                <ul className="Single">
                    <li className="SingleProduct" id="sinPname">{noble.productName}</li>
                    <li className="SingleProduct"><img src={noble.img} alt={noble.alt} className="img-thumbnail"/></li>
                    <li className="SingleProduct">${noble.price}</li>
                    <li className="SingleProduct">Qty:{noble.qty}</li>
                    <li className="SingleProduct">{noble.itemDesc}</li>
                    <button className="button btn-primary rounded"> Add To Cart</button>
                </ul>
            </div>
    );

}
    export default SingleProduct;

