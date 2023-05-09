import { Buffer } from "node:buffer";

export const onRequest = () => {
	const buf = Buffer.from("hello world", "utf8");

	return new Response(buf.toString("hex"));
};
