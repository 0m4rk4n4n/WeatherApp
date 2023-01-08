import { useEffect, useState } from "react"
import Sunny from "../../Assets/Sunny.png"
import Cloudy from "../../Assets/Partly Cloudy.png"
import Snowy from "../../Assets/Snowy.png"
import Rainy from "../../Assets/Rainy.png"
import "./Card.css"
import axios from "axios"
import { useDispatch, useSelector } from "react-redux"
import {switchArea} from "../../redux/areaSlice"
const Card=({location,country})=>
{
    const [description,setDescription]=useState("")
    const dispatch=useDispatch()
    const selectedArea=useSelector(state=>state.area)
    useEffect(()=>
    {
        const getData=async()=>
        {
            const res=await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=99a59e0e5b16f506b030d010dcf70041`)
            /* another way to do this is to store the API Key in a .env file and use REACT_APP_API_KEY for the variable name but I'm keeping it as for the purpose of testing */
            setDescription(res.data.weather[0].description)
        } 
        getData()
    },[])
    const handleClick=()=>
    {
        dispatch(switchArea(location))
    }
return(<><div className="card" onClick={handleClick} style={{display:"flex",alignItems:"center",gap:"20%",padding:20,cursor:"pointer"}}>
<img className="setBorderRadius" width={50} src={description.includes("cloud") ? Cloudy : description.includes("clear") ? Sunny : description.includes("rain") ? Rainy : description.includes("snow") ? Snowy : description.includes("thunder") ? Rainy : Sunny}/> {/* checking if the description contains any keyword that relates to the assigned pictures in the assets folder and using it accordingly */}
<span>{location}, {country}</span>
</div>
<div className="CardHr"></div></>)
}
export default Card
