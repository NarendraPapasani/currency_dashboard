import "./App.css";
import Graph from "./components/graph";
import Navbar from "./components/navbar";
import OpenTrades from "./components/openTrades";
import QuickLink from "./components/quickLinks";
import SearchBar from "./components/searchBar";
import TradingAccounts from "./components/tradingAccounts";

function App() {
  return (
    <div className="flex">
      <div className="w-1/5 h-screen shadow-xl bg-[#9B76D6] overflow-y-scroll">
        <Navbar />
      </div>
      <div className="w-4/5">
        <SearchBar />
        <div className="flex">
          <div className="p-4">
            <QuickLink />
            <Graph />
          </div>
          <div className="">
            <TradingAccounts />
            <OpenTrades />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
