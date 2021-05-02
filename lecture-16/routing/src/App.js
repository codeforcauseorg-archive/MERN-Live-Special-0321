import {MainLayout} from "./layouts/MainLayout";
import {
  BrowserRouter as Router} from "react-router-dom";

function App() {
  return (
    <Router>
      <MainLayout/>
    </Router>
    
  );
}

export default App;
