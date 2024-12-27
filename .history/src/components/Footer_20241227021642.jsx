import { MDBFooter } from "mdb-react-ui-kit";
const Footer = () => {
	return (
		<MDBFooter className="text-center text-lg-left bg-dark">
			<div className="text-center p-3" style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}>
				&copy; {new Date().getFullYear()} Copyright:{" "}
				<a className="text-light" href="https://kodeaa.com/">
					kodeaa.com
				</a>
			</div>
		</MDBFooter>
	);
};

export default Footer;
