const OpenTradeItem = (props) => {
  const { item } = props;
  const { currency, status, time, value, color } = item;
  return (
    <li className="bg-[#fdfcfc] border-2 p-3 rounded-md m-5 list-none">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <p className="text-gray-500">{currency} </p>
          <div
            className={`${
              color === "green" ? "bg-green-200" : "bg-red-200"
            } text-xs font-bold p-1 m-1 rounded-md`}
          >
            <p>{status}</p>
          </div>
        </div>
        <div className="flex items-center">
          <p className="font-bold">{time}</p>
        </div>
      </div>
      <div className="">
        <h1
          className={`${
            color === "green" ? "text-green-500" : "text-red-500"
          } font-extrabold text-2xl`}
        >
          {value} <span className="text-gray-400 text-xl font-normal">USD</span>
        </h1>
      </div>
    </li>
  );
};

export default OpenTradeItem;
