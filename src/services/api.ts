import axios from "axios";

export const api = axios.create({
	baseURL: "https://klfevzhvya.execute-api.us-east-2.amazonaws.com/dev",
});
