import { Link } from "react-router-dom";
import InputComponent from "../components/form/input";

const SignUp = () => {
  return (
    <div className="w-full min-h-screen lg:h-screen bg-gray p-10 flex flex-col lg:flex-row gap-10 justify-center items-center">
      <div className="bg-white rounded-lg p-5 flex flex-col gap-3">
        <h1 className="text-xl text-purple font-bold text-center select-none">
          Login
        </h1>
        <form className="flex flex-col gap-3">
          <InputComponent type="text" placeHolder="fullname" />
          <InputComponent type="text" placeHolder="username" />
          <InputComponent type="password" placeHolder="password" />
          <Link to={"/login"} className="bg-yellow rounded-md py-1 text-center">
            Login
          </Link>
          <button className="bg-purple py-1 text-white rounded-md">
            SignUp
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
