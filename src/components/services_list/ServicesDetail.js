import { useParams } from "react-router-dom"
import ServicesData from "./ServicesData"

export default function ServicesDetail(){
    const {offerId} = useParams()
    const productDetails = ServicesData.find(data => data._id === offerId)
    return (
        <div>
            <h3>Services Details Page</h3>
            <h5>{productDetails.name}- ${productDetails.price}</h5>
            <p>{productDetails.description}</p>
        </div>
    )
}