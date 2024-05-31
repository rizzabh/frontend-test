import "./App.css";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Money from "./components/Money";
import Graphs from "./components/Graphs";
import Table from "./components/Table";
function App() {
  return (
    <>
      <div className="flex">
        <Sidebar />
        <div>
          <Header />
          <Money />
          <Graphs />
          <Table />
        </div>
      </div>
    </>
  );
}

export default App;
