import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import Login from "./app/pages/Login";
import Home from "./app/pages/Home";
import { User } from "./app/utils/types";
import api from "./app/utils/api";

function App() {
	const USER_KEY = "user";
	const [user, setUser] = useState();

	useEffect(() => {
		const userJson = localStorage.getItem(USER_KEY);
		if (userJson) {
			setUser(JSON.parse(userJson));
		}
	}, []);

	useEffect(() => {
		if (user !== undefined) {
			localStorage.setItem(USER_KEY, JSON.stringify(user));
		} else {
			localStorage.removeItem(USER_KEY);
		}
	}, [user]);

	const resetUser = () => {
		setUser(undefined);
	};

	const handleLogout = async () => {
		try {
			const res = await api.LogoutReq();
			if (res === "OK") {
				setUser(undefined);
				toast.dark("Fly you fool");
			}
		} catch (msg) {
			console.log(msg);
			
		}
	};

	return (
		<>
			{user === undefined ? (
				<Login setUser={setUser} />
			) : (
				<Home handleLogout={handleLogout} resetUser={resetUser} />
			)}
			<ToastContainer
position="top-right"
autoClose={3000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="dark"
/>
		</>
	);
}

export default App;
