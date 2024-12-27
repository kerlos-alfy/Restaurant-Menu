/* eslint-disable react/prop-types */
import { Card, Col, Row } from "react-bootstrap";

const ItemsList = ({ itemsData, filterByCategory }) => {
	return (
		<Row>
			<Col sm="12" className="mb-3">
				{itemsData.length >= 1 ? (
					itemsData.map((item) => {
						return (
							<Card key={item.id} className="d-flex flex-row m-4" style={{ backgroundColor: "#F8F8F8" }}>
								<Card.Img className="img-item" variant="top" src={item.image} />
								<Card.Body>
									<Card.Title className="d-flex justify-content-between">
										<div className="item-title">{item.title}</div>
										<div onCopy={filterByCategory} className="item-price">
											{" "}
											{item.price}{" "}
										</div>
									</Card.Title>
									<Card.Text className="py-2">
										<div className="item-description">{item.description}</div>
									</Card.Text>
								</Card.Body>
							</Card>
						);
					})
				) : (
					<h1>لا يوجد</h1>
				)}
			</Col>
		</Row>
	);
};

export default ItemsList;
