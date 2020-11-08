import React, { useEffect, useState } from 'react';
import dataStore from '../../../store/data-store';
import {
	loadCountries,
	filterCountriesByName
} from '../../../actions/actions-creator';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

import './Search.css';

const Search = () => {
	const [countries, setCountries] = useState(dataStore.getCountries());
	const [filteredCountries, setFilteredCountries] = useState(null);

	const { register } = useForm();

	function handleChanges() {
		setCountries(dataStore.getCountries());
		setFilteredCountries(dataStore.getFilteredCountries());
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

	const searchBar = document.getElementById('inputSearch');

	function handleKeyUp(e) {
		e.preventDefault();
		if (searchBar?.value?.length > 0) {
			const searchString = e.target.value.toLowerCase();
			filterCountriesByName(searchString);
		} else {
			filterCountriesByName(null);
		}
	}

	let state = true;

	function changeState() {
		if (state === true) {
			document.getElementById('inputSearch').style.display = 'block';
			document.getElementById('inputSearch').focus();
			document.getElementById('search__elements').style.marginTop = '0px';
			return (state = false);
		}
		if (state === false) {
			document.getElementById('inputSearch').style.display = 'none';
			document.getElementById('search__elements').style.marginTop = '0px';
			return (state = true);
		}
	}

	return (
		<>
			<div id="search__elements">
				<button
					id="searchButton"
					onClick={() => {
						changeState();
					}}
				></button>
				<input
					name="country_search"
					id="inputSearch"
					placeholder="Search country"
					autoComplete="off"
					ref={register}
					onKeyUp={(e) => {
						handleKeyUp(e);
					}}
				/>
				<ul className="dropdown_wrapper">
					{filteredCountries &&
						filteredCountries.length > 0 &&
						filteredCountries.map((country) => {
							return (
								<Link
									to={`/list/${country}`}
									key={country}
									onClick={() => (window.location = `/list/${country}`)}
								>
									<li
										data-test-name={`${country}`}
										className="dropdown-ul__item"
										key={country}
									>
										{country}
									</li>
								</Link>
							);
						})}
				</ul>
			</div>
		</>
	);
};
export default Search;
