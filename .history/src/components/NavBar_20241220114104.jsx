/* eslint-disable react/prop-types */
import { useState } from "react";
import { Navbar, Container, Row, Nav, Form, FormControl } from "react-bootstrap";
const NavBar = ({ filterBySearch }) => {
	const [searchWord, setSearchWord] = useState("");
	const onSearch = () => {
		filterBySearch(searchWord);
		console.log(searchWord);
	};
	return (
		<Row>
			<Navbar bg="dark" expand="lg" variant="dark">
				<Container>
					<Navbar.Brand href="#">
						<div className="brand-color">مطعم جديد</div>
					</Navbar.Brand>
					<Navbar.Toggle aria-controls="navbarScroll" />
					<Navbar.Collapse id="navbarScroll">
						<Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: "100px" }} navbarScroll></Nav>
						<Form className="d-flex">
							<FormControl type="text" placeholder="ابحث.." className="mx-2" onChange={(e) => setSearchWord(e.target.value)} value={searchWord} />
							<button onClick={() => onSearch()} className="btn-search">
								بحث
							</button>
						</Form>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</Row>
	);
};

export default NavBar;
