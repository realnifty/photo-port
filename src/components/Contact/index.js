import { useState } from 'react';
import { validateEmail } from '../../utils/helpers';

function ContactForm() {
  const [errorMessage, setErrorMessage] = useState('');
	const [formState, setFormState] = useState({
		name: '',
		email: '',
		message: '',
	});
	const { name, email, message } = formState;

	function handleChange(e) {
    setFormState({ ...formState, [e.target.name]: e.target.value });
    if (e.target.name === 'email') {
			const isValid = validateEmail(e.target.value);
			console.log(isValid);
			// isValid conditional statement
			if (!isValid) {
				setErrorMessage('Your email is invalid.');
			} else {
				setErrorMessage('');
			}
		} else {
			if (!e.target.value.length) {
				setErrorMessage(`${e.target.name} is required.`);
			} else {
				setErrorMessage('');
			}
		}
    if (!errorMessage) {
			setFormState({ ...formState, [e.target.name]: e.target.value });
		}
	}

	function handleSubmit(e) {
    e.preventDefault();  
	}

	return (
		<section>
			<h1>Contact me</h1>
			<form id="contact-form" onSubmit={handleSubmit}>
				<div>
					<label htmlFor="name">Name:</label>
					<input
						type="text"
						name="name"
						defaultValue={name}
						onBlur={handleChange}
					/>
				</div>
				<div>
					<label htmlFor="email">Email address:</label>
					<input
						type="email"
						name="email"
						defaultValue={email}
						onBlur={handleChange}
					/>
				</div>
				<div>
					<label htmlFor="message">Message:</label>
					<textarea
						name="message"
						rows="5"
						defaultValue={message}
						onBlur={handleChange}
					/>
					{errorMessage && (
						<div>
							<p className="error-text">{errorMessage}</p>
						</div>
					)}
				</div>
				<button type="submit">Submit</button>
			</form>
		</section>
	);
}

export default ContactForm;
