import { Card, Col, Row } from "react-bootstrap";

const ItemsList = ({ itemsData }) => {
	return (
		<Row>
			<Col sm="12" className="mb-3">
				{itemsData.length >= 1 ? (
					itemsData.map((item) => {
						return (
							<Col sm="4" className="mb-3" key={item.id}>
								<Card>
									<Card.Img variant="top" src={item.image} />
									<Card.Body>
										<Card.Title>{item.title}</Card.Title>
										<Card.Text>{item.description}</Card.Text>
										<Card.Text>{item.price}</Card.Text>
									</Card.Body>
								</Card>
							</Col>
						);
					})
				) : (
					<h1>لا يوجد منتجات</h1>
				)}
			</Col>
		</Row>
	);
};

export default ItemsList;
