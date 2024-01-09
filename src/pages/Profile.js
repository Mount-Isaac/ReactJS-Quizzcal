import { Link, Routes, Route } from "react-router-dom"
import Info from './Info'
import Settings from './Settings'


export default function Profile(){
    return (
        <div>
            <h1>
                Default Profile page
            </h1>
            <ul>    
                <li><Link to="/profile/info">My Information</Link></li>
                <li><Link to="/profile/settings">My Settings</Link></li>
            </ul>

            {/* routes mapping to links above  */}


        </div>
    )
}