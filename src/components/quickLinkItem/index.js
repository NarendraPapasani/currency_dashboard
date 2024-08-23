const QuickLinkItem = (props) => {
  const { each } = props;
  const { icon, name } = each;
  return (
    <li className="bg-[#F9FAFB] list-none rounded-md p-5 cursor-pointer">
      <div className="flex-col justify-center items-center">
        <img src={icon} alt={name} className="w-6 h-6" />
        <p className="text-sm font-medium">{name}</p>
      </div>
    </li>
  );
};

export default QuickLinkItem;
