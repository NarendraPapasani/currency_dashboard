import QuickLinkItem from "../quickLinkItem";

const qlItems = [
  {
    icon: "https://www.clipartmax.com/png/small/53-530489_arrow-of-rounded-lines-pointing-down-left-vector-arrow-pointing-down-left.png",
    name: "Deposit",
  },
  {
    icon: "https://www.svgrepo.com/show/349679/arrow-up-right.svg",
    name: "Withdraw",
  },
  {
    icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoZXXIzToSJGdYO217h3MakUD8mz9irjeWbg&s",
    name: "Settings",
  },
  {
    icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRcVJ17oemDonNNLC27xJv3Aq5ijTJ7RcMMw&s",
    name: "Verification",
  },
  {
    icon: "https://png.pngtree.com/element_our/png/20181227/star-line-black-icon-png_287224.jpg",
    name: "Bonuses",
  },
  {
    icon: "https://w1.pngwing.com/pngs/470/982/png-transparent-marketing-chart-symbol-sales-user-text-line-logo.png",
    name: "MT5",
  },
  {
    icon: "https://cdn0.iconfinder.com/data/icons/navigation-set-arrows-part-one/32/DoubleArrowLeftRight-512.png",
    name: "Transfer",
  },
  {
    icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToN7bD4l-dNiWcyNW1QKGyIWwmkmFME_xKbg&s",
    name: "History",
  },
  {
    icon: "https://icons.iconarchive.com/icons/custom-icon-design/silky-line-user/512/users-2-icon.png",
    name: "Partner",
  },
  {
    icon: "https://cdn3.iconfinder.com/data/icons/popular-cryptocurrencies-vol-2019-1/80/tron-trx-cryptocurrency-token-coin-swap-exchange-512.png",
    name: "Exchange",
  },
  {
    icon: "https://cdn.iconscout.com/icon/premium/png-256-thumb/grouped-bar-chart-3487156-2916912.png?f=webp&w=256",
    name: "Analytics",
  },
];
const QuickLink = () => {
  return (
    <div className="border-gray-50  border-2 rounded-xl p-4 w-10/11">
      <h1>Quick Links</h1>
      <ul className="flex justify-center flex-wrap gap-4 mt-4">
        {qlItems.map((item) => (
          <QuickLinkItem each={item} key={item.name} />
        ))}
      </ul>
    </div>
  );
};
export default QuickLink;
