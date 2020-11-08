import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import dataStore from '../../store/data-store';
import { loadCountries } from '../../actions/actions-creator';
import './List.css';
import Subheader from '../Subheader/Subheader';

function List() {
	const [countries, setCountries] = useState(dataStore.getCountries());

	function handleChanges() {
		setCountries(dataStore.getCountries());
	}

	useEffect(() => {
		dataStore.addEventListener(handleChanges);

		if (!countries || !countries.length) {
			loadCountries();
		}

		return () => {
			dataStore.removeEventListener(handleChanges);
		};
	}, [countries]);

	return (
		<section className="body" data-test-id="body">
			<Subheader title="EU Countries" className="subheader" />
			<div className="body__wrapper">
				<ul className="wrapper__ul" data-test-id="wrapper__ul">
					{countries &&
						countries.length > 0 &&
						countries.map((country) => (
							<Link to={`/list/${country}`} key={country} className="">
								<li className="ul__item" key={country}>
									{country[0].toUpperCase() + country.slice(1)}
								</li>
							</Link>
						))}
				</ul>
				<div className="wrapper__ul wrapper__back-btn">
					<Link to={'/'}>⬅ Back</Link>
				</div>
			</div>
		</section>
	);
}

export default List;
