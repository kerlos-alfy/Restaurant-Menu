import { Card, Col, Row } from "react-bootstrap";

const ItemsList = () => {
	return (
		<Row>
			<Col sm="12" className="mb-3">
				<Card className="d-flex flex-row">
					<Card.Img className="img-item" variant="top" src="https://ichef.bbci.co.uk/food/ic/food_16x9_832/recipes/spicy_salmon_bite_rice_16300_16x9.jpg" />
					<Card.Body>
						<Card.Title>
							<div className="item-title">وجبة فطار</div>
						</Card.Title>
						<Card.Text>
							<div className="item-title">وجبة فطار وجبة فطار وجبة فطار وجبة فطار وجبة فطار وجبة فطار</div>
						</Card.Text>
					</Card.Body>
				</Card>
			</Col>
		</Row>
	);
};

export default ItemsList;
