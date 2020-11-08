import React, { useState } from 'react';
import Subheader from '../Subheader/Subheader';
import './Contact.css';
import '../../store/data-store';

function Contact() {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [subject, setSubject] = useState('');
	const [message, setMessage] = useState('');

	function submit() {
		setName('');
		setEmail('');
		setSubject('');
		setMessage('');
	}

	function handleChange(event, setValue) {
		setValue(event.target.value);
	}

	return (
		<>
			<div className="body">
				<Subheader title="Contact Us" />
			</div>
			<section className="form__wrapper">
				<form>
					<div className="name__email-wrapper">
						<div className=" name-wrapper">
							<label htmlFor="name__input">Name</label>
							<input
								type="name"
								className="form-control"
								id="name__input"
								onChange={(event) => handleChange(event, setName)}
								value={name}
							/>
						</div>
						<div className="email-wrapper">
							<label htmlFor="email__input">Email address</label>
							<input
								type="email"
								className="form-control"
								id="email__input"
								placeholder="name@example.com"
								onChange={(event) => handleChange(event, setEmail)}
								value={email}
							/>
						</div>
					</div>
					<div className="form-group">
						<label htmlFor="subject">Subject</label>
						<input
							type="name"
							className="form-control"
							id="exampleFormControlTextarea1"
							onChange={(event) => handleChange(event, setSubject)}
							value={subject}
						/>
					</div>
					<div className="form-group">
						<label htmlFor="exampleFormControlTextarea1">
							Your message here
						</label>
						<textarea
							className="form-control"
							id="exampleFormControlTextarea2"
							onChange={(event) => handleChange(event, setMessage)}
							value={message}
							autoFocus="autofocus"
						></textarea>
					</div>
				</form>
				<div className="button__wrapper">
					<button
						onClick={submit}
						data-toggle="modal"
						data-target="#exampleModal"
						id="submit__btn"
					>
						Submit
					</button>
				</div>
				<div
					className="modal fade"
					id="exampleModal"
					tabIndex="-1"
					aria-labelledby="exampleModalLabel"
					aria-hidden="true"
				>
					<div className="modal-dialog">
						<div className="modal-content">
							<div className="modal-header">
								<h5 className="modal-title" id="exampleModalLabel">
									Message sent
								</h5>
								<button
									type="button"
									className="close"
									data-dismiss="modal"
									aria-label="Close"
								>
									<span aria-hidden="true">&times;</span>
								</button>
							</div>
							<div className="modal-body">Thank you for contacting us</div>
							<div className="modal-footer">
								<button
									type="button"
									className="btn btn-secondary"
									data-dismiss="modal"
								>
									Close
								</button>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}

export default Contact;
