import { MDBFooter } from "mdb-react-ui-kit";
const Footer = () => {
	return (
		<MDBFooter className="text-center text-lg-left bg-dark">
			<div className="text-center p-3 text-light" style={{ backgroundColor: "rgba(255, 255, 255, 0.2)" }}>
				&copy; 2025 Copyright:{" "}
				<a className="text-light" href="https://kodeaa.com/">
					kodeaa.com
				</a>
			</div>
		</MDBFooter>
	);
};

export default Footer;
