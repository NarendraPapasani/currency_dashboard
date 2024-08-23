import TradingAccountsItem from "../tradingAccountItem";

const taItems = [
  {
    name: "CTrader",
    code: "#273728",
    val: "0.00",
  },
  {
    name: "CTrader",
    code: "#273728",
    val: "0.00",
  },
];
const TradingAccounts = () => {
  return (
    <div className="border-gray-50 border-2 rounded-xl p-4 h-fit m-4 w-80">
      <h1>Trading Accounts</h1>
      <ul className="ta-items">
        {taItems.map((item, index) => (
          <TradingAccountsItem each={item} key={item.name} />
        ))}
      </ul>
    </div>
  );
};
export default TradingAccounts;
