const NavbarItems = (props) => {
  const { item, isActived, itemClickedBy } = props;
  const itemClicked = () => {
    itemClickedBy(item.id);
  };
  return (
    <li
      key={item.id}
      className={`flex items-center ml-10 mb-5 p-2 cursor-pointer ${
        isActived ? "bg-custom-gradient" : ""
      }`}
      onClick={itemClicked}
    >
      <img src={item.icon} alt={item.name} className="w-7 h-7 mr-5" />
      <p
        className={`font-medium text-xl  ${
          isActived ? "text-[#BEFB7A]" : "text-white"
        }`}
      >
        {item.name}
      </p>
    </li>
  );
};

export default NavbarItems;
