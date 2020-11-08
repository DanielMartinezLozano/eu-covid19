import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import Search from './Search/Search';
import { signInWithGoogle, signOut } from '../../actions/auth-actions';
import BurgerMenu from './BurgerMenu/BurgerMenu';
import authStore from '../../store/auth-store';

function Header() {
	const [user, setUser] = useState(authStore.getUser());

	function handleChange() {
		setUser(authStore.getUser());
	}

	useEffect(() => {
		authStore.addChangeListener(handleChange);

		return () => authStore.removeChangeListener(handleChange);
	});

	function getSignInButton() {
		return (
			<>
				<button
					type="button"
					className="google-button"
					onClick={(event) => signInWithGoogle()}
					id="button-desktop"
				>
					<img
						src="https://img.icons8.com/color/48/000000/google-logo.png"
						className="google-icon"
						alt="icon"
					/>
					Sign In
				</button>
				<button
					type="button"
					className="google-button"
					onClick={(event) => signInWithGoogle()}
					id="button-mobile"
				>
					<img
						src="https://img.icons8.com/color/48/000000/google-logo.png"
						className="google-icon"
						alt="icon"
					/>
				</button>
			</>
		);
	}

	function getSignOutButton() {
		return (
			<>
				<button
					type="button"
					className="google-button"
					onClick={(event) => signOut()}
					id="button-desktop"
				>
					<img
						src="https://img.icons8.com/color/48/000000/google-logo.png"
						className="google-icon"
						alt="icon"
					/>
					Sign Out
				</button>
				<button
					type="button"
					className="google-button"
					onClick={(event) => signOut()}
					id="button-mobile"
				>
					<img
						src="https://img.icons8.com/color/48/000000/google-logo.png"
						className="google-icon"
						alt="icon"
					/>
				</button>
			</>
		);
	}

	function isSignInVisible() {
		return user ? getSignOutButton() : getSignInButton();
	}

	return (
		<>
			<header>
				<BurgerMenu />
				<Link to="/" className="header__app-name">
					<img
						src="https://trello-attachments.s3.amazonaws.com/5fa1c483b6d2a9395dba9982/200x200/806eaaf5a246a9505fa587279415712e/corona.png"
						alt="logo"
						id="header-logo"
					/>
					<h3 id="header-appname">EU-COVID19</h3>
				</Link>
				<div className="nav-desktop">
					<Link to="/" className="nav-item-desktop">
						Home
					</Link>
					<Link to="/list">UE Countries</Link>
					<Link to="/map">Map</Link>
					<div className="flex-spacer"></div>
				</div>
				<div className="flex-spacer"></div>
				{isSignInVisible()}
				<Search />
			</header>
		</>
	);
}
export default Header;
