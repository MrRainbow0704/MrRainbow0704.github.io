import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react"
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Home from "@/pages/Home";
import ContactMe from "@/pages/ContactMe";
import NotFound from "@/pages/NotFound";
import "@/styles/App.css";

export default function App() {
	useEffect(() => {
		document.getElementById("darkmode")!.textContent =
			localStorage.getItem("dark") === "true"
				? "light_mode"
				: "mode_night";
	});
	return (
		<BrowserRouter>
			<Header />
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/contact-me" element={<ContactMe />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
			<Footer />
		</BrowserRouter>
	);
}
