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
        <Sidebar className=" mx-auto" />
        <div className="mx-auto 2xl:ml-72">
          <Header className=" mx-auto"/>
          <Money className=" mx-auto" />
          <Graphs className=" mx-auto" />
          <Table className=" mx-auto" />
        </div>
      </div>
    </>
  );
}

export default App;
