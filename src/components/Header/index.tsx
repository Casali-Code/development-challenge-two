import logoImg from "../../assets/cloud.svg";
import { Container, Content } from "./styles";

interface HeaderProps {
	onOpenPatientCreationModal: () => void;
}

export function Header({ onOpenPatientCreationModal }: HeaderProps) {
	return (
		<Container>
			<Content>
				<div className="logo">
					<img src={logoImg} alt="patientcloud" />
					<h1>patientcloud</h1>
				</div>
				<button onClick={onOpenPatientCreationModal}>Create new patient</button>
			</Content>
		</Container>
	);
}
