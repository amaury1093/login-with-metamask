import './Profile.css';

import jwtDecode from 'jwt-decode';
import React, { useState, useEffect } from 'react';
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

export const Profile = ({ auth, onLoggedOut }: Props): JSX.Element => {
	const [state, setState] = useState<State>({
		loading: false,
		user: undefined,
		username: '',
	});

	useEffect(() => {
		const { accessToken } = auth;
		const {
			payload: { id },
		} = jwtDecode<JwtDecoded>(accessToken);

		fetch(`${process.env.REACT_APP_BACKEND_URL}/users/${id}`, {
			headers: {
				Authorization: `Bearer ${accessToken}`,
			},
		})
			.then((response) => response.json())
			.then((user) => setState({ ...state, user }))
			.catch(window.alert);
	}, []);

	const handleChange = ({
		target: { value },
	}: React.ChangeEvent<HTMLInputElement>) => {
		setState({ ...state, username: value });
	};

	const handleSubmit = () => {
		const { accessToken } = auth;
		const { user, username } = state;

		setState({ ...state, loading: true });

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
			.then((user) => setState({ ...state, loading: false, user }))
			.catch((err) => {
				window.alert(err);
				setState({ ...state, loading: false });
			});
	};

	const { accessToken } = auth;

	const {
		payload: { publicAddress },
	} = jwtDecode<JwtDecoded>(accessToken);

	const { loading, user } = state;

	const username = user && user.username;

	return (
		<div className="Profile">
			<p>
				Logged in as <Blockies seed={publicAddress} />
			</p>
			<div>
				My username is {username ? <pre>{username}</pre> : 'not set.'}{' '}
				My publicAddress is <pre>{publicAddress}</pre>
			</div>
			<div>
				<label htmlFor="username">Change username: </label>
				<input name="username" onChange={handleChange} />
				<button disabled={loading} onClick={handleSubmit}>
					Submit
				</button>
			</div>
			<p>
				<button onClick={onLoggedOut}>Logout</button>
			</p>
		</div>
	);
};
