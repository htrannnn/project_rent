import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
// import "react-datepicker/dist/react-datepicker.css";
import { Outlet, RouterProvider, createBrowserRouter, useNavigate } from "react-router-dom";
import { Provider, useSelector } from "react-redux";
import { store } from "./redux/store";
import { ToastContainer } from "react-toastify";
import App from "./App";
// import Footer from "./component/footer/Footer";
import CustomerList from "./customers/component/CustomerList";
import DetailCustomer from "./customers/component/DetailCustomer";
import EditCustomer from "./customers/component/EditCustomer";
import AddCustomer from "./customers/component/AddCustomer";
import ContractList from "./contracts/component/ContractsList";
import AddContract from "./contracts/component/AddContract";
import EditContract from "./contracts/component/EditContract";
import DetailContract from "./contracts/component/DetailContract";
import Header from "./mains/Header";
import Login from "./login_logout/component/Login";
import RegisterAccount from "./login_logout/component/Register";
import HomePage from "./mains/HomePage";

const LayoutAdmin = () => {
	const navigate = useNavigate();
	const account = useSelector((state) => state?.user?.account);

	useEffect(() => {
		if (!account) {
			navigate("/login");
		}
	}, [account, navigate]);

	return (
		<div>
			<Header />
			<Outlet />
			<ToastContainer />
		</div>
		//Thêm <Outlet /> vào LayoutAdmin để render nội dung con.
	);
};

const router = createBrowserRouter([
	{
		path: "/",
		element: <LayoutAdmin />,
		children: [
			{ index: true, element: <HomePage /> },
			{
				path: "/login",
				element: <Login />,
			},
			{
				path: "/customers",
				element: <CustomerList />,
			},
			{
				path: "/detail/:id",
				element: <DetailCustomer />,
			},
			{
				path: "/edit/:id",
				element: <EditCustomer />,
			},
			{
				path: "/add_customers",
				element: <AddCustomer />,
			},
			{
				path: "/register",
				element: <RegisterAccount />,
			},
			{
				path: "/contracts",
				element: <ContractList />,
			},
			{
				path: "/contracts/add",
				element: <AddContract />,
			},
			{
				path: "/contracts/edit/:id",
				element: <EditContract />,
			},
			{
				path: "/contracts/detail/:id",
				element: <DetailContract />,
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<Provider store={store}>
			<RouterProvider router={router} />
		</Provider>
	</React.StrictMode>
);
