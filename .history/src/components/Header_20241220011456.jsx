import { Col, Row } from "react-bootstrap";

const Header = () => {
	return (
		<Row>
			<Col sm="12" className="text-center justify-content-center">
				<div className="title">قائمة الطعام </div>
				<div>
					<p className="underline"></p>
				</div>
			</Col>
		</Row>
	);
};

export default Header;
