import { BrowserRouter } from "react-router-dom";
import { StyledApp } from "./App.styles";
import Layout from "./components/layout/layout";
import "./global.css";

function App() {
  return(
    <StyledApp>
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
    </StyledApp>
  )
 
}

export default App
