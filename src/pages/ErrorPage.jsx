import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="container mx-auto flex items-center justify-center h-screen flex-col">
      <h2 className="text-2xl font-bold">404 Page Not Found!!</h2>
      <Link
        to="/"
        className="btn mt-6 text-xl px-6 bg-green-500 text-white hover:bg-green-600"
      >
        Go Back
      </Link>
    </div>
  );
};

export default ErrorPage;
