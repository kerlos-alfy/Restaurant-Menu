import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Button } from "bootstrap";

function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<Button variant="primary">Primary</Button>
			<Button variant="secondary">Secondary</Button>
			<Button variant="success">Success</Button>
			<Button variant="warning">Warning</Button>
			<Button variant="danger">Danger</Button>
			<Button variant="info">Info</Button>
			<Button variant="light">Light</Button>
			<Button variant="dark">Dark</Button>
			<Button variant="link">Link</Button>
		</>
	);
}

export default App;
