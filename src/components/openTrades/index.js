import OpenTradeItem from "../openTradeItem";
const tradesItems = [
  {
    currency: "GBPUSD",
    status: "Long",
    time: 0.12,
    value: "+0.56",
    color: "green",
  },
  {
    currency: "USDJPY",
    status: "Long",
    time: 0.52,
    value: "-0.09",
    color: "red",
  },
  {
    currency: "EURUSD",
    status: "Short",
    time: 0.34,
    value: "-1.09",
    color: "red",
  },
];
const OpenTrades = () => {
  return (
    <div className="border-gray-50 border-2 rounded-xl p-4 h-fit m-4 w-80">
      <h1>Open Trades</h1>
      <ul>
        {tradesItems.map((item) => {
          return <OpenTradeItem item={item} />;
        })}
      </ul>
    </div>
  );
};
export default OpenTrades;
