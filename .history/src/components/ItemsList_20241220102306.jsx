import { Card, Col, Row } from "react-bootstrap";

const ItemsList = ({ itemsData }) => {
	return (
		<Row>
			<Col sm="12" className="mb-3">
				<Card className="d-flex flex-row" style={{ backgroundColor: "#F8F8F8" }}>
					<Card.Img className="img-item" variant="top" src="https://ichef.bbci.co.uk/food/ic/food_16x9_832/recipes/spicy_salmon_bite_rice_16300_16x9.jpg" />
					<Card.Body>
						<Card.Title className="d-flex justify-content-between">
							<div className="item-title">وجبة فطار</div>
							<div className="item-price"> 50 جنية</div>
						</Card.Title>
						<Card.Text className="py-2">
							<div className="item-description">وجبة فطار وجبة فطار وجبة فطار وجبة فطار وجبة فطار وجبة فطار</div>
						</Card.Text>
					</Card.Body>
				</Card>
			</Col>
		</Row>
	);
};

export default ItemsList;
