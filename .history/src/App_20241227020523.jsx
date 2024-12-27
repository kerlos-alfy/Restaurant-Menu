import { motion } from "framer-motion";
import { useState } from "react";
import { Container } from "react-bootstrap";
import "./App.css";
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import Category from "./components/Category";
import ItemsList from "./components/ItemsList";
import { items } from "./data";
function App() {
	const [itemsData, SetItemsData] = useState(items);

	const allCategory = ["الكل", ...new Set(items.map((item) => item.category))];

	// Filter items by category
	const filterByCategory = (cat) => {
		if (cat === "الكل") {
			SetItemsData(items);
		} else {
			const newArr = items.filter((item) => item.category === cat);
			SetItemsData(newArr);
		}
	};

	// Filter items by search Form
	const filterBySearch = (word) => {
		if (word !== "") {
			const newArr = items.filter((item) => item.title === word);
			SetItemsData(newArr);
		}
	};
	return (
		<div className="color-body font">
			<NavBar filterBySearch={filterBySearch} />
			<Container>
				<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
					<Header />
				</motion.div>
				<motion.div initial={{ x: -100 }} animate={{ x: 0 }} transition={{ duration: 0.5 }}>
					<Category filterByCategory={filterByCategory} allCategory={allCategory} />
				</motion.div>
				<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
					<ItemsList itemsData={itemsData} />
				</motion.div>
			</Container>
		</div>
	);
}

export default App;
