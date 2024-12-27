import { useState } from "react";
import { Container } from "react-bootstrap";
import "./App.css";
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import Category from "./components/Category";
import ItemsList from "./components/ItemsList";
import { items } from "./data";
import { animate } from "motion";
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
		<><motion.dev className="color-body font" initial={{ scale: 0 }} // تأثير البداية
			animate={{ scale: 1 }}
			transition={{ duration: 1 }}
			whileHover={{ scale: 1.2 }} /><NavBar filterBySearch={filterBySearch} /><Container>
				<Header />
				<Category filterByCategory={filterByCategory} allCategory={allCategory} />
				<ItemsList itemsData={itemsData} />
			</Container></>
	    </motion.div>
	);
}

export default App;
