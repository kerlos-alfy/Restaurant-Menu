import { Card, Col, Row } from "react-bootstrap";

const ItemsList = () => {
	return (
		<Row>
			<Col>
				<Card>
					<Card.Img />
					<Card.Body>
						<Card.Title>Item 1</Card.Title>
						<Card.Text>Description of Item 1</Card.Text>
					</Card.Body>
				</Card>
			</Col>
		</Row>
	);
};

export default ItemsList;
