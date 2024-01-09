export default function Home(props){
    return (
        <div>
            <h1>{props.h1}</h1>
            <h3>{props.h3}</h3>
            <p>{props.p}</p>    
            <footer>
                {props.copyright}{props.f} 
            </footer>


        </div>
    )
}