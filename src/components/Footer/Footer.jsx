import React from 'react';
import { Link } from 'react-router-dom';
import './footer.css';
import HelpIcon from '@material-ui/icons/Help';
import ContactIcon from '@material-ui/icons/AlternateEmail';

function Footer() {
	return (
		<>
			<footer>
				<div className="container">
					<div className="logo_title">
						<img
							className="logo_image"
							src="https://trello-attachments.s3.amazonaws.com/5fa1c4869e1f05016f8b10f0/200x200/ebbaed3f565fde8e1b9050df14072239/corona_white.png"
							alt="logo"
						/>
						<p>EU-Covid19 Data App</p>
					</div>
					<div className="app-info">
						<div className="links">
							<Link to="/faqs">
								<HelpIcon /> &nbsp;&nbsp;FAQs
							</Link>
							<Link to="/contact">
								<ContactIcon /> &nbsp;&nbsp;Contact
							</Link>
						</div>
						<div className="footer_text">
							<p>Copyright © 2020 CoTeam, Inc. Built with React Flux.</p>
						</div>
					</div>
				</div>
			</footer>
		</>
	);
}

export default Footer;
