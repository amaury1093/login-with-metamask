import './Profile.css';

import jwtDecode from 'jwt-decode';
import React from 'react';
import Blockies from 'react-blockies';

import { Auth } from '../types';

interface Props {
	auth: Auth;
	onLoggedOut: () => void;
}

interface State {
	loading: boolean;
	user?: {
		id: number;
		username: string;
	};
	username: string;
}

interface JwtDecoded {
	payload: {
		id: string;
		publicAddress: string;
	};
}

export class Profile extends React.Component<Props, State> {
	state: State = {
		loading: false,
		user: undefined,
		username: '',
	};

	componentDidMount() {
		const {
			auth: { accessToken },
		} = this.props;
		const {
			payload: { id },
		} = jwtDecode<JwtDecoded>(accessToken);

		fetch(`${process.env.REACT_APP_BACKEND_URL}/users/${id}`, {
			headers: {
				Authorization: `Bearer ${accessToken}`,
			},
		})
			.then((response) => response.json())
			.then((user) => this.setState({ user }))
			.catch(window.alert);
	}

	handleChange = ({
		target: { value },
	}: React.ChangeEvent<HTMLInputElement>) => {
		this.setState({ username: value });
	};

	handleSubmit = () => {
		const {
			auth: { accessToken },
		} = this.props;
		const { user, username } = this.state;

		this.setState({ loading: true });

		if (!user) {
			window.alert(
				'The user id has not been fetched yet. Please try again in 5 seconds.'
			);
			return;
		}

		fetch(`${process.env.REACT_APP_BACKEND_URL}/users/${user.id}`, {
			body: JSON.stringify({ username }),
			headers: {
				Authorization: `Bearer ${accessToken}`,
				'Content-Type': 'application/json',
			},
			method: 'PATCH',
		})
			.then((response) => response.json())
			.then((user) => this.setState({ loading: false, user }))
			.catch((err) => {
				window.alert(err);
				this.setState({ loading: false });
			});
	};

	render() {
		const {
			auth: { accessToken },
			onLoggedOut,
		} = this.props;
		const {
			payload: { publicAddress },
		} = jwtDecode<JwtDecoded>(accessToken);
		const { loading, user } = this.state;

		const username = user && user.username;

		return (
			<div className="Profile">
				<p>
					Logged in as <Blockies seed={publicAddress} />
				</p>
				<div>
					My username is{' '}
					{username ? <pre>{username}</pre> : 'not set.'} My
					publicAddress is <pre>{publicAddress}</pre>
				</div>
				<div>
					<label htmlFor="username">Change username: </label>
					<input name="username" onChange={this.handleChange} />
					<button disabled={loading} onClick={this.handleSubmit}>
						Submit
					</button>
				</div>
				<p>
					<button onClick={onLoggedOut}>Logout</button>
				</p>
			</div>
		);
	}
}
