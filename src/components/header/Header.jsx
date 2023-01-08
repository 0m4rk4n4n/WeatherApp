import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { switchTemp } from "../../redux/tempSlice";
import "../header/Header.css"
const Header=()=>
{
    const dispatch=useDispatch()
    const selectedTemp=useSelector(state=>state.temp) // this is stored globally using redux to make it easier to convert the values across the web application
    const [selectedButton,setSelectedButton]=useState("") // to determine which button is selected and apply the background property accordingly
    
    useEffect(()=>
    {
        !selectedButton.length || selectedButton==="celsius" ? dispatch(switchTemp("f")) : dispatch(switchTemp("c")) /* changing the value with redux dispatch */
    },[selectedButton])
return(<>
    <div className="header" >
    <h3>Weather</h3>
<span className="buttons">
<button onClick={()=>{setSelectedButton("celsius")}} className={`celsiusBtn ${!selectedButton.length && "defaultColorForCelsius"} ${selectedButton==="celsius" && "selectedBtn"}`}>&#8451;</button>
<button onClick={()=>{setSelectedButton("fahrenheit")}} className={`fahrenheitBtn ${selectedButton==="fahrenheit" && "selectedBtn"}`}>&#8457;</button>
</span>
</div>
</>)
}
export default Header