import { useParams } from "react-router-dom"
import { useEffect, useState } from 'react';


function Productdetails(){
    let ApiLink = 'https://fakestoreapi.com/products';

    let [product,setProduct] = useState([])


    let params = useParams()
    useEffect(() =>{
        fetch(`${ApiLink}/${params.productId}`)
        .then((res) =>res.json())
        .then((product) =>setProduct(product))
       
      },[])
    return(
        <>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>


        <h1>dkjgsjklgha {params.productId}{product.title}</h1>
        </>
    )
}
export default Productdetails