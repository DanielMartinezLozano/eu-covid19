import React from 'react';
import PropTypes from 'prop-types';
import './NotFound.css';
import Subheader from '../Subheader/Subheader';

function NotFound(props) {
	return (
		<>
			<Subheader data-test-id={'subheader'} title="Page not found" />
			<main id="main">
				<div id="main_elements">
					{/* <h1 className="notFound_title">Page not found!</h1> */}
					<div id="notFound_elements">
						<img
							id="notFound_img"
							src="https://trello-attachments.s3.amazonaws.com/5f9c35fdf92455054261a523/5f9ffb7e9d69190650d84c33/7215db08a37b2ab1f92992006648e6d4/undraw_page_not_found_su7k.svg"
							alt="notFound_img"
						/>
						<button
							type="button"
							id="banner-btn"
							className="banner-btn"
							onClick={() => props.history.push('/')}
						>
							Back to Home
						</button>
					</div>
				</div>
			</main>
		</>
	);
}
NotFound.propTypes = {
	history: PropTypes.shape({
		push: PropTypes.func.isRequired
	}).isRequired
};
export default NotFound;
