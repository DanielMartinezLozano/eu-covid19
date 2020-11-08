import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
	return (
		<main id="main">
			<div className="main_banner_wrapper">
				<div className="main_banner">
					<div id="title-and-logo">
						<img
							className="logo_image"
							src="https://trello-attachments.s3.amazonaws.com/5fa1c4869e1f05016f8b10f0/200x200/ebbaed3f565fde8e1b9050df14072239/corona_white.png"
							alt="logo"
						/>
						<h2 id="banner_title">EU-COVID19</h2>
					</div>
					<p id="banner_text">
						Application for colleting and displaying Covid-19 stats in the
						European Union
					</p>
					<div className="buttons_wrapper">
						<Link to="/list">
							<button className="banner-btn">UE Countries</button>
						</Link>
						<Link to="/map">
							<button className="banner-btn">Map</button>
						</Link>
					</div>
				</div>
			</div>
			<section className="app_features">
				<div className="blocks_container">
					<div className="three_blocks_wrapper">
						<div className="column_block">
							<div className="image-wrapper">
								<img
									className="image_feature"
									src="https://trello-attachments.s3.amazonaws.com/5f9c35fdf92455054261a523/5fa1c490e3753804ca2939d5/6a5717e2b270aa1c125c45936094fb70/illustration1_three-blocks.svg"
									alt=""
								/>
							</div>
							<h4 className="block_subtitle">What is EU-COVID19?</h4>
							<p className="block_text">
								EU-COVID19 is an application that shows information about the
								Covid-19 situation in the European Union countries
							</p>
						</div>
						<div className="column_block">
							<div className="image-wrapper">
								<img
									className="image_feature"
									src="https://trello-attachments.s3.amazonaws.com/5f9c35fdf92455054261a523/5fa1c490e3753804ca2939d5/c052f292b68ee166e8e95d8d14a983e5/illustration2_three-blocks.svg"
									alt=""
								/>
							</div>
							<h4 className="block_subtitle">What does it do?</h4>
							<p className="block_text">
								It reports current facts in an user friendly and detailed manner
							</p>
						</div>
						<div className="column_block">
							<div className="image-wrapper">
								<img
									className="image_feature"
									src="https://trello-attachments.s3.amazonaws.com/5f9c35fdf92455054261a523/5fa1c490e3753804ca2939d5/3206c568f8a1488a0a9dba5193774aa5/illustration3_three-blocks.svg"
									alt=""
								/>
							</div>
							<h4 className="block_subtitle">How do I use it?</h4>
							<p className="block_text">
								You may search for the details of an indiviudal UE country using
								our list or our map
							</p>
						</div>
					</div>
				</div>
			</section>
		</main>
	);
}

export default Home;
