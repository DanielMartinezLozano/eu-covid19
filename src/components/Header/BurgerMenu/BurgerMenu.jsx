import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import ListIcon from '@material-ui/icons/List';
import MapIcon from '@material-ui/icons/Map';
import HelpIcon from '@material-ui/icons/Help';
import ContactIcon from '@material-ui/icons/AlternateEmail';

import { Link } from 'react-router-dom';
import './BurgerMenu.css';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
		width: '20px'
	},
	appBar: {
		transition: theme.transitions.create(['margin', 'width'], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen
		})
	},
	appBarShift: {
		width: `0`,
		marginLeft: drawerWidth,
		transition: theme.transitions.create(['margin', 'width'], {
			easing: theme.transitions.easing.easeOut,
			duration: theme.transitions.duration.enteringScreen
		})
	},
	menuButton: {
		marginRight: theme.spacing(2)
	},
	hide: {
		display: 'none'
	},
	drawer: {
		width: 0,
		flexShrink: 0
	},
	drawerPaper: {
		width: drawerWidth
	},
	drawerHeader: {
		display: 'flex',
		alignItems: 'center',
		padding: theme.spacing(0, 1),
		// necessary for content to be below app bar
		...theme.mixins.toolbar,
		justifyContent: 'space-between'
	},
	content: {
		flexGrow: 1,
		padding: theme.spacing(3),
		transition: theme.transitions.create('margin', {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen
		}),
		marginLeft: -drawerWidth
	},
	contentShift: {
		transition: theme.transitions.create('margin', {
			easing: theme.transitions.easing.easeOut,
			duration: theme.transitions.duration.enteringScreen
		}),
		marginLeft: 0
	}
}));

export default function BurgerMenu() {
	const classes = useStyles();
	const theme = useTheme();
	const [open, setOpen] = React.useState(false);

	const handleDrawerOpen = () => {
		setOpen(true);
	};

	const handleDrawerClose = () => {
		setOpen(false);
	};

	return (
		<div className={classes.root}>
			<CssBaseline />
			<AppBar
				position="fixed"
				className={clsx(classes.appBar, {
					[classes.appBarShift]: open
				})}
			>
				<Toolbar>
					<IconButton
						color="inherit"
						aria-label="open drawer"
						onClick={handleDrawerOpen}
						edge="start"
						className={clsx(classes.menuButton, open && classes.hide)}
					>
						<MenuIcon />
					</IconButton>
				</Toolbar>
			</AppBar>
			<Drawer
				className={classes.drawer}
				variant="persistent"
				anchor="left"
				open={open}
				classes={{
					paper: classes.drawerPaper
				}}
			>
				<div className={classes.drawerHeader}>
					<img
						src="https://trello-attachments.s3.amazonaws.com/5fa1c483b6d2a9395dba9982/200x200/806eaaf5a246a9505fa587279415712e/corona.png"
						alt="logo"
						id="header-logo"
					/>
					<IconButton onClick={handleDrawerClose}>
						{theme.direction === 'ltr' ? (
							<ChevronLeftIcon />
						) : (
							<ChevronRightIcon />
						)}
					</IconButton>
				</div>
				<Divider />
				<List>
					<Link
						to="/"
						key="Home"
						className="li-item"
						onClick={handleDrawerClose}
					>
						<ListItemIcon>
							<HomeIcon />
						</ListItemIcon>
						<ListItemText primary="Home" />
					</Link>
					<Link
						to="/list"
						key="EU Countries"
						className="li-item"
						onClick={handleDrawerClose}
					>
						<ListItemIcon>
							<ListIcon />
						</ListItemIcon>
						<ListItemText primary="EU Countries" />
					</Link>
					<Link
						to="/map"
						key="Map"
						className="li-item"
						onClick={handleDrawerClose}
					>
						<ListItemIcon>
							<MapIcon />
						</ListItemIcon>
						<ListItemText primary="Map" />
					</Link>
				</List>
				<Divider />
				<List>
					<Link
						to="/FAQs"
						key="FAQs"
						className="li-item"
						onClick={handleDrawerClose}
					>
						<ListItemIcon>
							<HelpIcon />
						</ListItemIcon>
						<ListItemText primary="FAQs" />
					</Link>
					<Link
						to="/contact"
						key="Contact"
						className="li-item"
						onClick={handleDrawerClose}
					>
						<ListItemIcon>
							<ContactIcon />
						</ListItemIcon>
						<ListItemText primary="Contact" />
					</Link>
				</List>
			</Drawer>
		</div>
	);
}
