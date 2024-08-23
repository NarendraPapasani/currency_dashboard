import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { MdOutlineFileDownload } from "react-icons/md";
const data = [
  {
    group_name: "Jan",
    value: 200,
  },
  {
    group_name: "Feb",
    value: 400,
  },
  {
    group_name: "Mar",
    value: 300,
  },
  {
    group_name: "Apr",
    value: 700,
  },
  {
    group_name: "May",
    value: 800,
  },
  {
    group_name: "Jun",
    value: 300,
  },
  {
    group_name: "Jul",
    value: 900,
  },
  {
    group_name: "Aug",
    value: 200,
  },
  {
    group_name: "Sep",
    value: 400,
  },
  {
    group_name: "Oct",
    value: 600,
  },
  {
    group_name: "Nov",
    value: 500,
  },
  {
    group_name: "Dec",
    value: 100,
  },
];

const Graph = () => {
  const DataFormatter = (number) => {
    if (number > 1000) {
      return `${(number / 1000).toString()}k`;
    }
    return number.toString();
  };

  return (
    <ResponsiveContainer
      height={340}
      className="mt-5 border-gray-50 border-2 rounded-xl p-2"
      width={750}
    >
      <div className="flex justify-between items-center">
        <h1 className="text-gray-500 font-medium mb-5 ml-5">OverView</h1>
        <div className="flex justify-center items-center cursor-pointer">
          <MdOutlineFileDownload className="h-5 w-5 text-[#9B76D6]" />
          <h1 className="text-[#9B76D6]">Download</h1>
        </div>
      </div>
      <div className="flex  items-center mb-2 ml-5">
        <div className="bg-[#F1EBF9] mr-4 p-2 rounded-md cursor-pointer">
          Month
        </div>
        <div className="p-2 rounded-md cursor-pointer hover:bg-slate-100">
          Year
        </div>
      </div>

      <BarChart
        data={data}
        margin={{
          top: 5,
        }}
      >
        <XAxis
          dataKey="group_name"
          tick={{
            stroke: "gray",
            strokeWidth: 1,
          }}
        />
        <YAxis
          tickFormatter={DataFormatter}
          tick={{
            stroke: "gray",
            strokeWidth: 0,
          }}
        />
        <Legend
          wrapperStyle={{
            padding: 30,
          }}
        />
        <Bar dataKey="value" name="Sales" fill="#9B76D6" barSize="20%" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default Graph;
