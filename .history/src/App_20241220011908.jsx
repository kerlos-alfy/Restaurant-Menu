import { Container } from "react-bootstrap";
import "./App.css";
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import Category from "./components/Category";
function App() {
	return (
		<div className="color-body font">
			<NavBar />
			<Container>
				<Header />
				<Category />
			</Container>
		</div>
	);
}

export default App;
