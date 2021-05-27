import logo from "./logo.svg";
import "./App.css";
import { Calendar } from "antd";
import { RadarChartOutlined } from "@ant-design/icons";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          <RadarChartOutlined />
        </p>
        <Calendar fullscreen={false} />
      </header>
    </div>
  );
}

export default App;
