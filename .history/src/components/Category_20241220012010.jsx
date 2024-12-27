import { Col, Row } from "react-bootstrap";

const Category = () => {
	return (
		<Row className="my-2 mb-5">
			<Col sm="12" className=" justify-content-center d-flex">
				<div>
					<button className="btn-mx-2">الكل</button>
					<button className="btn-mx-2">فطار</button>
					<button className="btn-mx-2">غداء</button>
				</div>
			</Col>
		</Row>
	);
};

export default Category;