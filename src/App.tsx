import { Header } from "./components/Header";
import Modal from "react-modal";
import { PatientList } from "./components/PatientList";
import { GlobalStyle } from "./styles/global";
import { useState } from "react";
import { PatientCreationModal } from "./components/PatientCreationModal";

Modal.setAppElement("#root");

export function App() {
	const [isPatientCreationModalOpen, setIsPatientCreationModalOpen] =
		useState(false);

	function handleOpenPatientCreationModal() {
		setIsPatientCreationModalOpen(true);
	}

	function handleClosePatientCreationModal() {
		setIsPatientCreationModalOpen(false);
	}

	return (
		<>
			<Header onOpenPatientCreationModal={handleOpenPatientCreationModal} />
			<PatientList />
			<PatientCreationModal
				isOpen={isPatientCreationModalOpen}
				onRequestClose={handleClosePatientCreationModal}
			></PatientCreationModal>
			<GlobalStyle />
		</>
	);
}
