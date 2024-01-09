import QuestionsData from "./QuestionsData"

export default function Questions(props){
    console.log(props)
    
    return (
        <section className="questions">
            <div className="questions-div">
                <div className="question-div">{props}</div>
                <div className="answer-div">{props}</div>
            </div>
            {/* <div className="bottom-container">
                Gamerover
            </div> */}
            <button className="btn btn-primary check-anwers">Check answers</button>
        </section>
    )
}