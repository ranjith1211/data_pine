import "./App.css";
import Container from "./components/Container";
import NavBar from "./components/NavBar";
import Foot from "./components/Foot";
import Sales from "./components/Sales";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";

function App() {
  return (
    <div>
      <NavBar />
      <Container />
      <Dashboard />
      <Sales />
      <Login />
      <Dashboard />
      <Sales />
      <Login />
      <Foot />
    </div>
  );
}

export default App;
