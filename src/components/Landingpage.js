// This is the default page that gets rendered in every page of the quizzcal app
// it takes a prop which is the Homepage(a page header & button) rendered
//  when the app is first loaded in the browser

import shapeTop from '../images/shape-1.png'
import shapeBottom from '../images/shape-2.png'

export default function Landingpage(props){
    return (
        <div className="main">
            <img className="shape-top" src={shapeTop} alt="Shape Top"/>
            {props.homepage}
            <img className="shape-bottom" src={shapeBottom} alt="Shape Bottom"/>
      </div>
    )

}