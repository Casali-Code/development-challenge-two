import { Container } from "./styles";
import { PatientCard } from "../PatientCard";
import { useEffect, useState } from "react";
import { api } from "../../services/api";

interface Patient {
	patientId: string;
	patientName: string;
	birthDate: string;
	gender: string;
	email: string;
	phone: string;
	lastVisit: string;
	bloodType: string;
	observations: string;
}

// interface apiPatient {
// 	id: Patient;
// }

export function PatientList() {
	const [patients, setPatients] = useState<Patient[]>([]);

	useEffect(() => {
		api
			.get("/patients")
			.then((response) => setPatients(response.data.patients));
	}, []);
	console.log(patients);

	return (
		<Container>
			{patients.map((patient) => (
				<PatientCard
					key={patient.patientId}
					patientId={patient.patientId}
					name={patient.patientName}
					gender={patient.gender}
					bdate={patient.birthDate}
					email={patient.email}
					phone={patient.phone}
					ldate={patient.lastVisit}
					bloodtype={patient.bloodType}
					diagnostic={patient.observations}
				/>
			))}
		</Container>
	);
}
