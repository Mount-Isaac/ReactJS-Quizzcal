// import { nanoid } from "nanoid"
// import { useEffect, useState } from "react"
// import Homepage from "./components/Homepage"
// import Landingpage from "./components/Landingpage"
// import Questions from './components/Questions'
// import QuestionsData from "./components/QuestionsData"
// import shapeTop from './images/shape-1.png'
// import shapeBottom from './images/shape-2.png'
// import './css/App.css'
// import { Badge } from "react-bootstrap"

// export default function App(){
//   const [isColored, setIsColored] = useState(true)
//   const [response, setResponse] = useState([])
//   // page status
//   const [homePage, setHomePage] = useState(true)

//   // useEffect(() => {
//   //   async function getData(){
//   //     const res = await fetch("https://opentdb.com/api.php?amount=5&category=18&difficulty=hard&type=multiple")
//   //     const data = await res.json()
//   //     console.log('data: ',data.results)
//   //     setQuestions(data.results)
//   //     console.log('effect: ', questions)
//   //   }
//   //   getData()
//   // },[homePage===true])



//   // console.log(questions.results)
//   // render homepage where quiz starts
//   const homepageElement = <Homepage 
//       homePage = ""
//       // questions = {questionElement}
//     />  
//   // change homepage to questions page
//   function navigateQuestions(){
//     // changes homepage to false when start quiz button is clicked
//     setHomePage(prevPage => !prevPage)
//   }

//   function markAnswer(){
//     setIsColored(preColor => !preColor)
//   }
//   const styles = {backgroundColor: isColored ?  "white" : "aqua"}

//   // array to store questions from api
//   const [questions, setQuestions] = useState()
//   const [cleanedQuiz, setCleanedQuiz] = useState()
//   let cleaned_questions = []

//   useEffect(()=>{
//     const url = "https://opentdb.com/api.php?amount=5&category=18&difficulty=hard&type=multiple"

//     const fetchData = async() => {
//       try{
//         const response = await fetch(url)
//         const data = await response.json()
//         // console.log(data.results)
//         // setQuestions(data.results)
//         console.log(data.results)
//         // sorting
//         data.results.map(quiz => {
//           // console.log('quiz: ', quiz)
//           cleaned_questions.push( 
//             {
//               "main_question": quiz.question,
//               "answers": quiz.incorrect_answers.map(incorrect => incorrect)
//             }
//           )

//           // console.log(object_results.answers.map(answ => console.log(answ)))
//         })

//         // console.log(cleanedQuiz)
      
//         setCleanedQuiz(cleaned_questions)
//         // console.log(cleanedQuiz)
//       }catch(error){
//         console.log("error: ", error)
//       }
//     }

//     fetchData()
//   } ,[])

//   return(     
//     // default page that is being rendered in every page 
//     <div className="main">
//       <img className="shape-top" src={shapeTop} alt="Shape Top"/>
//       {
//         homePage ? 
//           <div className="quiz-header">
//             <h2>Quizzical</h2>
//             <button 
//                 className="btn btn-primary"
//                 onClick={navigateQuestions}
//             >
//                 Start quiz
//             </button>
//           </div>
//         :
//         "nothing here"
//           // <section className="questions"> 
//           //   {
//           //     cleanedQuiz.map(quiz => 
//           //       <div>
//           //         <p>{quiz.main_question}</p>
//           //         <p>{quiz.answers.map(q => <span>{q}</span>)}</p>
//           //       </div>
//           //     )
//           //   }
//           //         {cleanedQuiz.map(z => 
//           //           <div className="questions-div">
//           //             <div className="question">{z.question}</div>
//           //             <div className="row">
//           //               {z.answers.map(answer => 
//           //               <span
//           //                 // onClick={markAnswer}
//           //                 className="col-lg-4 col-md-4 badge badge-custom"
//           //                 // style={styles}
//           //               >
//           //                 {answer}
//           //               </span>)} 
//           //               <div 
//           //                 // onClick={() => setIsColored(prevColor => !prevColor)}
//           //                 className="col-lg-4 col-md-4 span-badge badge badge-custom"
//           //                 // style={styles}
//           //               >
//           //                 {z.correct_answer}
//           //               </div>
//           //             </div>
//           //           </div>
//           //         )}
//           //       <div className="col-12">
//           //           <span className="badge badge-custom">
                      
//           //           </span>
//           //       </div> 
//           //       <button className="btn btn-primary check-anwers">Check answers</button>
//           // </section>
//       }
//       <img className="shape-bottom" src={shapeBottom} alt="Shape Bottom"/>
//     </div>
//   )
// }



// ---------------------------------Alternative Testing App.js-------------------------------------------
// import { useState } from "react"
// import EffectHook from "./components/EffectHook"
// import QuestionsData from './components/QuestionsData'

// export default function App(){
//   const [question, setQuestion] = useState(QuestionsData)
//   const hookElement = <EffectHook question={question} />
//   return <main>
//     {hookElement}
//   </main>
// }

// class app for login page 
// import AuthenticationPage from "./components/AuthenticationPage"
import './css/auth.css'
import { Route, Routes, Link } from 'react-router-dom'
import Home from './components/Home'
// import About from './components/About'
import About from './components/About'
import NavbarC from './components/NavbarC'
import Contact from './components/Contact'
import Services from './components/Services'
import User from './components/User'
import Profile from './pages/Profile'
import Settings from './pages/Settings'
import Info from './pages/Info'
import ServicesList from './components/services_list/ServicesList'
import ServicesDetail from './components/services_list/ServicesDetail'
// import  DropdownC from './components/DropdownC'

export default function App(){
  return (
    <div>
      {/* <DropdownC/> */}

      <NavbarC 
        home = {<Link className="links" to='/'> Home</Link>}
        user = {<Link className='links' to="/user">User</Link>}
        contact = {<Link className="links" to="/contact">Contact</Link>}
        about = {<Link className="links" to="/about">About</Link>}
        offers = {<Link className='links' to="/offers">Offers</Link>}
        services = {<Link className="links" to="services">Our Services</Link>}
        profile = {<Link className='links' to="profile">Profile</Link>}
      />

      <Routes>
        <Route path='/' element={
          <Home 
            h1="this is the head"
            h3 = "this is the sub-head"
            p = "This is the paragraph"
            f = "This is the footer"
            copyright = "&copy;"

          />
        }/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/services' element={<Services/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route exact path="/profile/info" element={<Info
            header = "Profile info found here" />}
        />
        <Route exact path="/profile/settings" element={<Settings
            header= "Profile settings done here" />}
        />
        <Route path='/offers' element={<ServicesList/>}/>
        <Route path='/offers/:offerId' element={<ServicesDetail/>}/>
      </Routes>
      
    </div>
  )
}