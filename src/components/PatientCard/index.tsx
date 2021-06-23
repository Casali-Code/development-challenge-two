import { Container, Content } from "./styles";

import deleteImg from "../../assets/delete.svg";
import editImg from "../../assets/edit.svg";
import { api } from "../../services/api";

interface PatientCardProps {
	patientId: string;
	name: string;
	bdate: string;
	gender: string;
	email: string;
	phone: string;
	ldate: string;
	bloodtype: string;
	diagnostic: string;
}

export function PatientCard({
	patientId,
	name,
	bdate,
	gender,
	email,
	phone,
	ldate,
	bloodtype,
	diagnostic,
}: PatientCardProps) {
	return (
		<Container>
			<button className="delete" disabled>
				<img src={deleteImg} alt="D" />
			</button>
			<button className="edit" disabled>
				<img src={editImg} alt="E" />
			</button>
			<Content>
				<h1>{name}</h1>
				<div className="infos">
					<div className="infodesc">
						<strong>Birthdate:</strong>
						<p>{bdate}</p>
					</div>
					<div className="infodesc">
						<strong>Gender:</strong>
						<p>{gender}</p>
					</div>
					<div className="infodesc">
						<strong>E-Mail:</strong>
						<p>{email}</p>
					</div>
					<div className="infodesc">
						<strong>Phone:</strong>
						<p>{phone}</p>
					</div>
					<div className="infodesc">
						<strong>Last Appointment:</strong>
						<p>{ldate}</p>
					</div>
					<div className="infodesc">
						<strong>Blood Type:</strong>
						<p>{bloodtype}</p>
					</div>
				</div>
				<div className="infodesc">
					<strong>Diagnostic and observations:</strong>
					<p>{diagnostic}</p>
				</div>
			</Content>
		</Container>
	);
}
