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
	return (
		<div className="color-body font">
			<NavBar />
			<Container>
				<Header />
				<Category filterByCategory={filterByCategory} />
				<ItemsList itemsData={itemsData} />
			</Container>
		</div>
	);
}

export default App;
