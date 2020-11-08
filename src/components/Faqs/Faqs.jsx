import React from 'react';
import './Faqs.css';
import Subheader from '../Subheader/Subheader';

function Faqs() {
	return (
		<>
			<Subheader
				data-test-id={'subheader'}
				title="Frequent Answers and Questions"
			/>
			<div className="main-faqs">
				<div className="row">
					<div className="col-4">
						<div className="list-group" id="list-tab" role="tablist">
							<a
								className="list-group-item list-group-item-action active"
								id="list-home-list"
								data-toggle="list"
								href="#list-home"
								role="tab"
								aria-controls="home"
							>
								Where do you get your data?
							</a>
							<a
								className="list-group-item list-group-item-action"
								id="list-profile-list"
								data-toggle="list"
								href="#list-profile"
								role="tab"
								aria-controls="profile"
							>
								What is Coronavirus disease 2019 (Covid-19)?
							</a>
							<a
								className="list-group-item list-group-item-action"
								id="list-messages-list"
								data-toggle="list"
								href="#list-messages"
								role="tab"
								aria-controls="messages"
							>
								How does Covid-19 spreads?
							</a>
							<a
								className="list-group-item list-group-item-action"
								id="list-settings-list"
								data-toggle="list"
								href="#list-settings"
								role="tab"
								aria-controls="settings"
							>
								How can I prevent Covid-19?
							</a>
						</div>
					</div>
					<div className="col-8">
						<div className="tab-content" id="nav-tabContent">
							<div
								className="tab-pane fade show active"
								id="list-home"
								role="tabpanel"
								aria-labelledby="list-home-list"
							>
								We collect data from covid19tracking, which is a non-profit
								organization and whose Api, graphs and narratives can be freely
								used. They only use as main sources public institutions such as
								the Ministerio de Sanidad, the Dipartimento della Protezione
								Civile de Italia or the Johns Hopkins University.
							</div>
							<div
								className="tab-pane fade"
								id="list-profile"
								role="tabpanel"
								aria-labelledby="list-profile-list"
							>
								Coronavirus disease 2019 (COVID-19) is a respiratory illness
								that can spread from person to person. CDC has information on
								COVID-19 symptoms and caring for yourself and others. COVID-19
								is a new disease, caused by a novel (or new) coronavirus that
								has not previously been seen in humans.
							</div>
							<div
								className="tab-pane fade"
								id="list-messages"
								role="tabpanel"
								aria-labelledby="list-messages-list"
							>
								COVID-19 is thought to spread mainly through close contact from
								person-to-person. Some people without symptoms may be able to
								spread the virus. We are still learning about how the virus
								spreads and the severity of illness it causes. The CDC has
								additional information on how COVID-19 spreads.
							</div>
							<div
								className="tab-pane fade"
								id="list-settings"
								role="tabpanel"
								aria-labelledby="list-settings-list"
							>
								The best way to prevent illness is to avoid being exposed to the
								virus. The CDC recommends everyday preventive actions to help
								prevent the spread of respiratory diseases. They include: Wash
								your hands often with plain soap and water. The CDC recommends
								washing your hands often with soap and water for at least 20
								seconds, especially after you have been in a public place, or
								after blowing your nose, coughing, or sneezing. If soap and
								water are not available, the CDC recommends using an
								alcohol-based hand sanitizer that contains at least 60 percent
								alcohol. Learn more about safely using hand sanitizer. Cover
								your mouth and nose with a cloth face covering or non-surgical
								mask when around others. Find more information about how to
								select, wear, and clean your mask. Avoid crowds and practice
								social distancing (stay at least 6 feet apart from others).
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Faqs;
