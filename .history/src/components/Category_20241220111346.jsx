/* eslint-disable react/prop-types */
import { Col, Row } from "react-bootstrap";

const Category = ({ filterByCategory, allCategory }) => {
	const onFilter = (cat) => {
		filterByCategory(cat);
	};
	return (
		<Row className="my-2 mb-5">
			<Col sm="12" className=" justify-content-center d-flex">
			{allCategory.lenght>=1 ? ():<h1>لا يوجد تصنيفات</h1>}
				
			</Col>
		</Row>
	);
};

export default Category;
