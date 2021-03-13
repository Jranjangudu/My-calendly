import "./App.css";
import Leftcontainer from "./components/leftside/Leftcontainer";
import Rightcontainer from "./components/rightside/Rightcontainer";

function App() {
  return (
    <div className="container mt-5">
      <h2 className="my-2" style={{ fontFamily: "monospace", color: "white" }}>
        My calendly
      </h2>
      <div className="row">
        <Leftcontainer />

        <Rightcontainer />
      </div>
      <small style={{ marginTop: "20px", color: "#fff" }}>
        Copyright &copy; 2021
      </small>
    </div>
  );
}

export default App;
