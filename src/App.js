// Bootstrap 4 has been imported inside the index.html file that is located in the public folder
import "./Styles/style.css"
import Header from "./components/header/Header"
import Main from "./components/Main/Main"
import {
  useEffect
} from "react"
import {
  useSelector
} from "react-redux"

function App() {
  const selectedArea = useSelector(state => state.area)
  useEffect(() => {
    window.scrollTo(0, 0) 
  }, [selectedArea]) // to scroll to the top of the page every time the selected area changes to enhance user experience
  return ( <div className = "App">
  <div className = "container">
  <div className = "row">
  <div className = "col-12">
  <div className = "main">
   <Header/>
   <Main />
   </div> 
   </div> 
   </div> 
   </div> 
   </div>
  );
}

export default App;