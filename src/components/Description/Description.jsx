import { useState, useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import Sunny from "../../Assets/Sunny.png";
import Cloudy from "../../Assets/Partly Cloudy.png";
import Snowy from "../../Assets/Snowy.png";
import Rainy from "../../Assets/Rainy.png";
import "./Description.css";
import DeviceThermostatIcon from "@mui/icons-material/DeviceThermostat";
import StormIcon from "@mui/icons-material/Storm";
import SpeedIcon from "@mui/icons-material/Speed";
import OpacityIcon from "@mui/icons-material/Opacity";
import ExploreIcon from "@mui/icons-material/Explore";
const Description = () => {
  /* 
    below is the state variables used to store the information from the API
    */
  const [location, setLocation] = useState("");
  const [country, setCountry] = useState("");
  const [temp, setTemp] = useState("");
  const [description, setDescription] = useState("");
  const [windSpeed, setWindSpeed] = useState("");
  const [feelslike, setFeelslike] = useState(0);
  const [pressure, setPressure] = useState(0);
  const [humidity, setHumidity] = useState(0);
  const [latitude, setLatitude] = useState(0);
  const [longtitude, setLongtitude] = useState(0);
  const selectedTemp = useSelector((state) => state.temp);
  const selectedArea = useSelector((state) => state.area);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      const res = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=toronto&units=imperial&appid=99a59e0e5b16f506b030d010dcf70041`
      ); /* fetching data from the API */
      setLocation(res.data.name);
      setCountry(res.data.sys.country);
      setTemp(res.data.main.temp);
      setDescription(res.data.weather[0].description);
      setWindSpeed(res.data.wind.speed);
      setFeelslike(res.data.main.feels_like);
      setPressure(
        (res.data.main.pressure * 3386) / 100000
      ); /* converting the pressure value to Pascal */
      setHumidity(res.data.main.humidity);
      setLatitude(res.data.coord.lat);
      setLongtitude(res.data.coord.lon);
      setLoading(false);
    };
    getData();
  }, []);
  useEffect(() => {
    const getData = async () => {
      const res = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${selectedArea.selectedArea}&units=imperial&appid=99a59e0e5b16f506b030d010dcf70041`
      );
      setLocation(res.data.name);
      setCountry(res.data.sys.country);
      setTemp(res.data.main.temp);
      setDescription(res.data.weather[0].description);
      setWindSpeed(res.data.wind.speed);
      setFeelslike(res.data.main.feels_like);
      setPressure(
        (res.data.main.pressure * 3386) / 100000
      ); /* converting the pressure value to Pascal */
      setHumidity(res.data.main.humidity);
      setLatitude(res.data.coord.lat);
      setLongtitude(res.data.coord.lon);
    };
    getData();
  }, [selectedArea]);
  return (
    <div
      style={{ display: "flex", gap: 50 }}
      className="col-lg-8 col-md-7 col-sm-12"
    >
      <div className="Box">
        <h5 style={{ padding: "10px 20px" }}>
          {loading ? "" : location} {loading ? "" : ","} {country}
        </h5>
        <hr />
        <div className="weatherDetails" style={{ textAlign: "center" }}>
          {!loading && (
            <img
              style={{ padding: "10px 30px" }}
              width={200}
              height={150}
              src={
                description.includes("cloud")
                  ? Cloudy
                  : description.includes("snow")
                  ? Snowy
                  : description.includes("clear")
                  ? Sunny
                  : description.includes("rain")
                  ? Rainy
                  : description.includes("thunder")
                  ? Rainy
                  : Sunny
              }
            />
          )}

          <div style={{ padding: "10px 20px", fontSize: 50, color: "grey" }}>
            <div>
              {loading
                ? ""
                : selectedTemp.selectedTemp === "c"
                ? Math.trunc(temp) + "°F"
                : Math.trunc((temp - 32) * 0.55555) + "°C"}
            </div>{" "}
            {/* checking the value in redux to determine whether to display the tempreture in fahrenheit or celsius */}
            <div>{loading ? "" : description}</div>
          </div>
        </div>
        {!loading && (
          <div className="otherData">
            <div
              className="changeDisplayForMobile"
              style={{ display: "flex", gap: "50%", alignItems: "center" }}
            >
              <div>
                <div
                  className="changeDisplayForMobile"
                  style={{
                    padding: 30,
                    display: "flex",
                    alignItems: "center",
                    color: "grey",
                  }}
                >
                  <DeviceThermostatIcon /> Feels like
                </div>
                <div
                  style={{
                    textAlign: "center",
                    color: "#000",
                    fontWeight: "bold",
                  }}
                >
                  {loading
                    ? ""
                    : selectedTemp.selectedTemp === "c"
                    ? Math.trunc(feelslike) + "°F"
                    : Math.trunc((feelslike - 32) * 0.55555) + "°C"}
                </div>
              </div>
              <div>
                <div
                  className="changeDisplayForMobile"
                  style={{
                    padding: 30,
                    display: "flex",
                    alignItems: "center",
                    color: "grey",
                  }}
                >
                  <StormIcon /> Wind
                </div>
                <div
                  style={{
                    textAlign: "center",
                    color: "#000",
                    fontWeight: "bold",
                  }}
                >
                  {Math.trunc(windSpeed)} Km/h
                </div>
              </div>
            </div>
            <div
              className="changeDisplayForMobile"
              style={{ display: "flex", gap: "50%", alignItems: "center" }}
            >
              <div>
                <div
                  className="changeDisplayForMobile"
                  style={{
                    padding: 30,
                    display: "flex",
                    alignItems: "center",
                    color: "grey",
                  }}
                >
                  <SpeedIcon /> Pressure
                </div>
                <div
                  style={{
                    textAlign: "center",
                    color: "#000",
                    fontWeight: "bold",
                  }}
                >
                  {loading ? "" : pressure.toFixed(2)} inHg
                </div>
              </div>
              <div>
                <div
                  className="changeDisplayForMobile"
                  style={{
                    padding: 30,
                    display: "flex",
                    alignItems: "center",
                    color: "grey",
                  }}
                >
                  <OpacityIcon /> Humidity
                </div>
                <div
                  style={{
                    textAlign: "center",
                    color: "#000",
                    fontWeight: "bold",
                  }}
                >
                  {humidity}%
                </div>
              </div>
            </div>
            <div
              className="changeDisplayForMobile"
              style={{ display: "flex", gap: "51%", alignItems: "center" }}
            >
              <div>
                <div
                  className="changeDisplayForMobile"
                  style={{
                    padding: 30,
                    display: "flex",
                    alignItems: "center",
                    color: "grey",
                  }}
                >
                  <ExploreIcon /> Latitude
                </div>
                <div
                  style={{
                    textAlign: "center",
                    color: "#000",
                    fontWeight: "bold",
                  }}
                >
                  {latitude}
                </div>
              </div>
              <div>
                <div
                  className="changeDisplayForMobile"
                  style={{
                    padding: 30,
                    display: "flex",
                    alignItems: "center",
                    color: "grey",
                  }}
                >
                  <ExploreIcon /> Longtitude
                </div>
                <div
                  style={{
                    textAlign: "center",
                    color: "#000",
                    fontWeight: "bold",
                  }}
                >
                  {longtitude}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default Description;
