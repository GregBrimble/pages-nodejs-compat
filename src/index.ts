import buffer from "node:buffer";

export default {
	fetch() {
		return new Response(JSON.stringify(buffer));
	},
};
