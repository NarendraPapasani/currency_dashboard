import { MdOutlineArrowOutward } from "react-icons/md";
const TradingAccountsItem = (props) => {
  const { each } = props;
  const { name, code, val } = each;
  return (
    <li className="bg-[#FCFCFD] border-2 p-2 rounded-md m-5">
      <h1 className="font-bold m-1">Master Account</h1>
      <div className="flex">
        <div className="bg-[#F2F4F7] rounded-md mr-4 m-1 p-1">{name}</div>
        <p className="p-1 m-1">{code}</p>
      </div>
      <div className="flex justify-between p-1">
        <h1 className="font-bold text-2xl">
          {val}
          <span className="font-normal text-sm"> USD</span>
        </h1>
        <MdOutlineArrowOutward className="h-6 w-6" />
      </div>
    </li>
  );
};

export default TradingAccountsItem;
