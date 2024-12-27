import { Card, Col, Row } from "react-bootstrap";

const ItemsList = () => {
	return (
		<Row>
			<Col sm="12" className="mb-3">
				<Card>
					<Card.Img variant="top" src="https://ichef.bbci.co.uk/food/ic/food_16x9_832/recipes/spicy_salmon_bite_rice_16300_16x9.jpg" />
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
