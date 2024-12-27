import { MDBFooter } from "mdb-react-ui-kit";
const Footer = () => {
	return (
		<MDBFooter className="text-center text-lg-left bg-dark">
			<div className="text-center p-3" style={{ backgroundColor: "rgba(236, 236, 236, 0.2)" }}>
				&copy; 2025 Copyright:{" "}
				<a className="text-light" href="https://kodeaa.com/">
					kodeaa.com
				</a>
			</div>
		</MDBFooter>
	);
};

export default Footer;
