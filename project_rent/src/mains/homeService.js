import axios from "axios";
import { BASE_URL } from "../apiProject/api";

export async function fetchListPremies() {
	try {
		const response = await axios.get(`${BASE_URL}/premises`);
		return response.data;
	} catch (e) {}
}

export async function fetchListInformation() {
	try {
		const response = await axios.get(`${BASE_URL}/information`);
		return response.data;
	} catch (e) {}
}

export async function fetchListCard() {
	try {
		const response = await axios.get(`${BASE_URL}/card`);
		return response.data;
	} catch (e) {}
}
