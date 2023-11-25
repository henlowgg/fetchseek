export const User = {
	name: "string",
	email: "string",
};

export const Dog = {
	id: "string",
	img: "string",
	name: "string",
	age: "number",
	zip_code: "string",
	breed: "string",
};

export const DogsSearchFilter = {
	breeds: ["string"],
	zipCodes: ["string"],
	ageMin: "number",
	ageMax: "number",
	size: "number",
	from: "number",
	sort: "string",
};

export const DogsSearchResponse = {
	resultIds: ["string"],
	total: "number",
	next: "string",
	prev: "string",
};

export const MatchResponse = {
	match: "string",
};
