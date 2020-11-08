import React from 'react';
import './Map.css';
import Subheader from '../Subheader/Subheader';

function Map() {
	function reloadPage() {
		var currentDocumentTimestamp = new Date(
			performance?.timing?.domLoading
		).getTime();

		var now = Date.now();

		var oneSec = 1 * 1000;

		var plusOneSec = currentDocumentTimestamp + oneSec;
		if (now > plusOneSec) {
			window.location.reload();
		}
	}

	reloadPage();

	return (
		<>
			<Subheader title="Map of Europe" />
			<div id="map-europe">
				<ul className="europe">
					<li className="eu3">
						<a href="/list/austria">Austria</a>
					</li>
					<li className="eu5">
						<a href="/list/belgium">Belgium</a>
					</li>
					<li className="eu7">
						<a href="/list/bulgaria">Bulgaria</a>
					</li>
					<li className="eu8">
						<a href="/list/croatia">Croatia</a>
					</li>
					<li className="eu9">
						<a href="/list/cyprus">Cyprus</a>
					</li>
					<li className="eu10">
						<a href="/list/czechia">Czech Republic</a>
					</li>
					<li className="eu11">
						<a href="/list/denmark">Denmark</a>
					</li>
					<li className="eu12">
						<a href="/list/estonia">Estonia</a>
					</li>
					<li className="eu13">
						<a href="/list/france">France</a>
					</li>
					<li className="eu14">
						<a href="/list/finland">Finland</a>
					</li>
					<li className="eu16">
						<a href="/list/germany">Germany</a>
					</li>
					<li className="eu17">
						<a href="/list/greece">Greece</a>
					</li>
					<li className="eu18">
						<a href="/list/hungary">Hungary</a>
					</li>
					<li className="eu20">
						<a href="/list/ireland">Ireland</a>
					</li>
					<li className="eu22">
						<a href="/list/italy">Italy</a>
					</li>
					<li className="eu24">
						<a href="/list/latvia">Latvia</a>
					</li>
					<li className="eu26">
						<a href="/list/lithuania">Lithuania</a>
					</li>
					<li className="eu27">
						<a href="/list/luxembourg">Luxembourg</a>
					</li>
					<li className="eu29">
						<a href="/list/malta">Malta</a>
					</li>
					<li className="eu33">
						<a href="/list/netherlands">Netherlands</a>
					</li>
					<li className="eu35">
						<a href="/list/poland">Poland</a>
					</li>
					<li className="eu36">
						<a href="/list/portugal">Portugal</a>
					</li>
					<li className="eu37">
						<a href="/list/romania">Romania</a>
					</li>
					<li className="eu40">
						<a href="/list/slovakia">Slovakia</a>
					</li>
					<li className="eu41">
						<a href="/list/slovenia">Slovenia</a>
					</li>
					<li className="eu42">
						<a href="/list/spain">Spain</a>
					</li>
					<li className="eu43">
						<a href="/list/sweden">Sweden</a>
					</li>
				</ul>
				<p id="available">
					*Only available for countries of the European Union*
				</p>
			</div>
		</>
	);
}

export default Map;
