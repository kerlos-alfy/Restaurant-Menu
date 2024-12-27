import { useState } from "react";
import { Container } from "react-bootstrap";
import "./App.css";
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import Category from "./components/Category";
import ItemsList from "./components/ItemsList";
import { items } from "./data";
function App() {
	// eslint-disable-next-line no-unused-vars
	const [itemsData, SetItemsData] = useState(items);
	return (
		<div className="color-body font">
			<NavBar />
			<Container>
				<Header />
				<Category />
				<ItemsList itemsData={itemsData} />
			</Container>
		</div>
	);
}

export default App;
