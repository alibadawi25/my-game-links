import logo from "./logo.svg";
import "./App.css";
import { Typography } from "antd";
import Tooltip from "./tooltip";

const { Title } = Typography;
function App() {
  return (
    <div className="App">
      <Title>Code For Life</Title>
      <img
        src="https://i.ibb.co/GQVsSrYv/Copy-of-Code-for-life-1.png" // Replace with your own image
        alt="Banner"
        style={{
          width: "80%",
          maxWidth: "800px",
          borderRadius: "10px",
          marginBottom: "20px",
        }}
      />
      {/* Description */}
      <p style={{ fontSize: "18px", color: "#555", marginBottom: "20px" }}>
        "Code For Life" is an exciting game that makes you learn how to code in
        a fun way!!
      </p>
      <Tooltip></Tooltip>
    </div>
  );
}

export default App;
