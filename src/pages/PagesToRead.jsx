import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import { getLocalBooksData } from "../utility/localStorageData";

const getPath = (x, y, width, height) => {
  return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${
    y + height / 3
  }
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
    x + width
  }, ${y + height}
  Z`;
};

const TriangleBar = (props) => {
  const { fill, x, y, width, height } = props;

  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

const PagesToRead = () => {
  const bookData = getLocalBooksData();

  const data = bookData.map((book) => ({
    name: book.bookName,
    pages: book.totalPages,
  }));

  return (
    <div className="p-20 bg-base-200 rounded-xl">
      <ResponsiveContainer height={400}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />

          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="pages" fill="#8884d8" shape={<TriangleBar />} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PagesToRead;
