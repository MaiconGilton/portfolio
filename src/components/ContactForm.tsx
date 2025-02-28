import { useState, type FormEvent } from "react";
import {
	GoogleReCaptchaProvider,
	GoogleReCaptchaCheckbox,
} from "@google-recaptcha/react";

const ContactForm = () => {
	const [message, setMessage] = useState<string>("");
	const [status, setStatus] = useState<"pending" | "success" | "error" | "">(
		"",
	);
	const [recaptchaToken, setRecaptchaToken] = useState("");

	const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
		try {
			event.preventDefault();

			setMessage("");
			setStatus("pending");

			if (!recaptchaToken) {
				setMessage("Google Recaptcha not checked!");
				setStatus("error");
				return;
			}

			const formData = new FormData(event.currentTarget);

			const response = await fetch("https://formspree.io/f/xovjobvq", {
				method: "POST",
				body: formData,
				headers: {
					Accept: "application/json",
				},
			});

			if (response.ok) {
				setMessage(
					"Thank you! Your message has been sent. I'll get back to you as soon as possible.",
				);
				setStatus("success");
				event.target?.reset();
			} else {
				setMessage("Oops! Something went wrong. Please try again.");
				setStatus("error");
			}
		} catch (error) {
			console.error();
			setMessage(`Error at send message: ${error.message}`);
			setStatus("error");
		}
	};

	return (
		<GoogleReCaptchaProvider
			type="v2-checkbox"
			siteKey="6Lfc3eMqAAAAAFHwgSNj9rwgYkCMA1KbdyoUGqrT"
			explicit={{
				container: "",
				expiredCallback: () => setRecaptchaToken(""),
			}}
		>
			<form
				onSubmit={handleSubmit}
				className="space-y-4 p-6 bg-white dark:bg-background-card-dark rounded-lg shadow-lg w-full"
			>
				<h2 className="font-bold mb-0 text-black dark:text-white">
					Let's have a conversation
				</h2>

				<p className="">I'd love to hear from you! Feel free to reach out.</p>

				<div>
					<label htmlFor="name">Name</label>
					<input
						type="text"
						id="name"
						name="name"
						required
						className="mt-1 block w-full rounded-md border border-gray-600 focus:ring-primary focus:border-primary p-2"
					/>
				</div>

				<div>
					<label htmlFor="email">Email</label>
					<input
						type="email"
						id="email"
						name="email"
						required
						className="mt-1 block w-full rounded-md border border-gray-600 focus:ring-primary focus:border-primary p-2"
					/>
				</div>

				<div>
					<label htmlFor="message">Message</label>
					<textarea
						id="message"
						name="message"
						rows={4}
						required
						className="mt-1 block w-full rounded-md border border-gray-600 focus:ring-primary focus:border-primary p-2"
					/>
				</div>

				<GoogleReCaptchaCheckbox onChange={setRecaptchaToken} />

				<br />

				{message && (
					<p
						className={`text-sm ${status === "success" ? "text-green-600" : "text-red-600"}`}
					>
						{message}
					</p>
				)}

				<button
					type="submit"
					className="button--primary w-full font-medium text-sm p-3"
					disabled={status === "pending"}
				>
					{status === "pending" ? "Sending..." : "Send Message"}
				</button>
			</form>
		</GoogleReCaptchaProvider>
	);
};

export default ContactForm;
