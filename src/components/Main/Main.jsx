import "./Main.css";
import Card from "../card/Card";
import Description from "../Description/Description";
const Main = () => {
  return (
    <>
      <div className="Main">
        <div className="container" style={{ minHeight: "100vh" }}>
          <div className="row reverse">
            <div
              style={{ display: "flex", gap: 50 }}
              className="col-lg-4 col-md-5 col-sm-12"
            >
              <div className="Box">
                <div>
                  <h5 style={{ padding: "10px 20px" }}>Favorite Locations</h5>
                  <hr />
                  <div className="Locations">
                    {" "}
                    {/* calling the Card component and passing props with different locations */}
                    <Card location="Toronto" country="CA" />
                    <Card location="Montreal" country="CA" />
                    <Card location="Winnipeg" country="CA" />
                    <Card location="Halifax" country="CA" />
                    <Card location="Calgary" country="CA" />
                    <Card location="Edmonton" country="CA" />
                    <Card location="New York" country="US" />
                    <Card location="California" country="US" />
                    <Card location="Florida" country="US" />
                    <Card location="Miami" country="US" />
                  </div>
                </div>
              </div>
            </div>
            <Description />
          </div>
        </div>
      </div>
    </>
  );
};
export default Main;
