import { Container } from "./styles";
import Modal from "react-modal";
import sendImg from "../../assets/user-plus.svg";
import deleteImg from "../../assets/delete.svg";
import { FormEvent, useState } from "react";
import { api } from "../../services/api";

interface PatientCreationModalProps {
	isOpen: boolean;
	onRequestClose: () => void;
}

export function PatientCreationModal({
	isOpen,
	onRequestClose,
}: PatientCreationModalProps) {
	// const [patientId, setPatientId] = useState("");
	const [patientName, setPatientName] = useState("");
	const [birthDate, setBirthDate] = useState("");
	const [gender, setGender] = useState("");
	const [email, setEmail] = useState("");
	const [phone, setPhone] = useState("");
	const [lastVisit, setLastVisit] = useState("");
	const [bloodType, setBloodType] = useState("");
	const [observations, setObservations] = useState("");

	function handleCreateNewPatient(event: FormEvent) {
		event.preventDefault();

		const data = {
			patientId: email,
			patientName,
			birthDate,
			gender,
			email,
			phone,
			lastVisit,
			bloodType,
			observations,
		};

		console.log(data);
		api.post("/patient", data);
	}

	return (
		<Modal
			isOpen={isOpen}
			onRequestClose={onRequestClose}
			className="modal"
			overlayClassName="overlay"
		>
			<Container onSubmit={handleCreateNewPatient}>
				<button className="send" type="submit">
					Send! <img src={sendImg} alt="✔" />
				</button>
				<button className="discard" onClick={onRequestClose}>
					Discard <img src={deleteImg} alt="X" />
				</button>

				<h1>Create Patient</h1>

				<div className="inputDiv">
					<h2>Name</h2>
					<input
						type="text"
						name="name"
						id="name"
						value={patientName}
						onChange={(event) => setPatientName(event.target.value)}
						placeholder="Name"
					/>
				</div>
				<div className="inputDiv">
					<h2>Birth Date</h2>

					<input
						type="date"
						name="bdate"
						id="bdate"
						value={birthDate}
						onChange={(event) => setBirthDate(event.target.value)}
						placeholder="Birth date"
					/>
				</div>
				<div className="inputDiv">
					<h2>Gender</h2>
					<input
						type="text"
						name="gender"
						value={gender}
						onChange={(event) => setGender(event.target.value)}
						id="gender"
						placeholder="Gender"
					/>
				</div>
				<div className="inputDiv">
					<h2>E-mail</h2>
					<input
						type="text"
						name="email"
						value={email}
						onChange={(event) => setEmail(event.target.value)}
						id="email"
						placeholder="E-mail"
					/>
				</div>
				<div className="inputDiv">
					<h2>Phone</h2>
					<input
						type="number"
						name="phone"
						value={phone}
						onChange={(event) => setPhone(event.target.value)}
						id="phone"
						placeholder="Phone"
					/>
				</div>
				<div className="inputDiv">
					<h2>Last Appointment</h2>
					<input
						type="date"
						name="ldate"
						id="ldate"
						placeholder="Last Appointment"
						value={lastVisit}
						onChange={(event) => setLastVisit(event.target.value)}
					/>
				</div>
				<div className="inputDiv">
					<h2>Blood Type</h2>
					<input
						type="text"
						name="bloodType"
						id="bloodType"
						placeholder="Blood Type"
						value={bloodType}
						onChange={(event) => setBloodType(event.target.value)}
					/>
				</div>
				<div className="txtar">
					<h2>Diagnostic and observations</h2>

					<textarea
						name="diagnostic"
						id="diagnostic"
						value={observations}
						onChange={(event) => setObservations(event.target.value)}
					></textarea>
				</div>
			</Container>
		</Modal>
	);
}
