import { Link } from "react-router-dom"
import ServicesData from "./ServicesData"

export default function ServicesList(){
    return(
        <div>
        {
            ServicesData.map(data =>
            <h3 key={data._id}>
                <Link to={data._id}>
                    {data.name}</Link>- {data.price}
            </h3>
        
            )
}
        </div>
    )
}