/* eslint-disable react/prop-types */
import { Col, Row } from "react-bootstrap";

const Category = ({ filterByCategory }) => {
	return (
		<Row className="my-2 mb-5">
			<Col sm="12" className=" justify-content-center d-flex">
				<div>
					<button style={{ border: "1px solid #b45b35" }} className="btn mx-2">
						الكل
					</button>
					<button onClick={filterByCategory("افطار")} style={{ border: "1px solid #b45b35" }} className="btn mx-2">
						فطار
					</button>
					<button onClick={filterByCategory("غداء")} style={{ border: "1px solid #b45b35" }} className="btn mx-2">
						غداء
					</button>
				</div>
			</Col>
		</Row>
	);
};

export default Category;
