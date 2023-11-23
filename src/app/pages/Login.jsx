import { useState } from "react";
import InputComponent from "../components/Input";
import Button from "../components/Button";
import api from "../utils/api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = ({ setUser }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const checkValidEmail = (email) => {
    return /^\S+@\S+\.\S+$/.test(email);
  };

  const handleChange = (e) => {
    if (e.target.name === "name") {
      setName(e.target.value);
    } else {
      setEmail(e.target.value);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!checkValidEmail(email)) {
      setErrorMessage("Please input a valid email");
    }

    void (async () => {
      try {
        const res = await api.LoginReq(name, email);
        if (res) {
          toast.success("Yo!");
          setUser({ name, email });
        }
      } catch (msg) {
        setErrorMessage(msg);
        toast.error("Booo there was an error, try again");
      }
    })();

    setTimeout(() => {
      setErrorMessage("");
    }, 2000);
  };

  return (
    <div>
      <div></div>
      <div >
        <div>
          <h1>rescue</h1>
        </div>
        <div className="h-[2px] w-8 bg-title rounded-sm self-center md:self-start md:h-1" />
        <form autoComplete="off" onSubmit={handleSubmit}>
          <InputComponent
            label="name"
            value={name}
            type="text"
            handleChange={handleChange}
          />
          <InputComponent
            label="email"
            value={email}
            type="email"
            handleChange={handleChange}
          />
          <Button type="submit" text="Login" />
          <p className={`text-sm text-red-500 ${errorMessage && "opacity-100"}`}>
            {errorMessage}
          </p>
        </form>
      </div>
      <div></div>
      {/* ToastContainer for displaying notifications */}
      <ToastContainer />
    </div>
  );
};

export default Login;
