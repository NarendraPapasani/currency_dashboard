import { useState } from "react";
import NavbarItems from "../navbarItems";
const navbarItemsDetails = [
  {
    id: 1,
    active: true,
    name: "Dashboard",
    icon: "https://w7.pngwing.com/pngs/948/86/png-transparent-qr-code-computer-icons-scanner-awesome-miscellaneous-angle-white-thumbnail.png",
  },
  {
    id: 2,
    name: "CRM",
    active: false,
    icon: "https://www.pngitem.com/pimgs/m/74-741831_crm-icon-png-clipart-customer-relationship-management-crm.png",
  },
  {
    id: 3,
    name: "MAM",
    active: false,
    icon: "https://www.pngitem.com/pimgs/m/74-741831_crm-icon-png-clipart-customer-relationship-management-crm.png",
  },
  {
    id: 4,
    name: "PAMM",
    active: false,
    icon: "https://www.pngitem.com/pimgs/m/74-741831_crm-icon-png-clipart-customer-relationship-management-crm.png",
  },
  {
    id: 5,
    name: "Trade",
    active: false,
    icon: "https://w7.pngwing.com/pngs/683/489/png-transparent-finance-business-trade-computer-icons-bank-business-text-people-investment-thumbnail.png",
  },
  {
    id: 6,
    name: "Wallet",
    active: false,
    icon: "https://png.pngtree.com/element_our/20190528/ourmid/pngtree-orange-wallet-icon-image_1168655.jpg",
  },
  {
    id: 7,
    name: "Accounts",
    active: false,
    icon: "https://w7.pngwing.com/pngs/215/58/png-transparent-computer-icons-google-account-scalable-graphics-computer-file-my-account-icon-rim-123rf-symbol-thumbnail.png",
  },
  {
    id: 8,
    name: "History",
    active: false,
    icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToN7bD4l-dNiWcyNW1QKGyIWwmkmFME_xKbg&s",
  },
];

const settingsItems = [
  {
    id: 10,
    name: "Notifications",
    icon: "https://w1.pngwing.com/pngs/930/970/png-transparent-notification-icon-ios-7-iphone-icon-design-zooming-user-interface-button-apple-push-notification-service-computer-software.png",
  },
  {
    id: 11,
    name: "Settings",
    icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRP9fy5-QNpKRSWAtMw1WqC4twnkQyJbaXjA&s",
  },
  {
    id: 12,
    name: "Help & Support",
    icon: "https://icons.veryicon.com/png/o/miscellaneous/flat-icon/help-252.png",
  },
  {
    id: 13,
    name: "Log Out",
    icon: "https://w7.pngwing.com/pngs/475/85/png-transparent-computer-icons-logout-angle-text-black-thumbnail.png",
  },
];
const Navbar = () => {
  const [isActive, setIsActive] = useState(1);
  const itemClickedBy = (id) => {
    setIsActive(id);
  };
  return (
    <div className=" text-white bg-[#9B76D6]">
      <div className="text-center m-5">
        <h1 className="text-[#BEFB7A] font-serif text-3xl">
          Ditch <br />
          Dollar<sup className="text-xs">®</sup>
        </h1>
      </div>
      <ul className="mb-20">
        {navbarItemsDetails.map((item) => (
          <NavbarItems
            item={item}
            isActived={item.id === isActive}
            itemClickedBy={itemClickedBy}
          />
        ))}
      </ul>
      <ul>
        {settingsItems.map((item) => (
          <NavbarItems
            item={item}
            isActived={item.id === isActive}
            itemClickedBy={itemClickedBy}
          />
        ))}
      </ul>
      <hr />
      <div className="p-4 rounded-lg flex items-center space-x-4">
        <div className="bg-white p-2 rounded-full">
          <svg
            className="w-8 h-8 text-purple-500"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
          </svg>
        </div>
        <div>
          <h2 className="text-white text-xl font-semibold">Shyam Shakur</h2>
          <p className="text-white">shyam01.shankur@...</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
