import "./scss/app.scss";
import { StepBackwardOutlined, StepForwardFilled } from "@ant-design/icons";
const feather = require("feather-icons");

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <StepBackwardOutlined />
        <StepForwardFilled />
      </header>
    </div>
  );
}

export default App;
