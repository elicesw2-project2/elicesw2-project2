import React from 'react';
import '../styles/MainProfile.scss';
import { Link } from 'react-router-dom';

function MainProfile({ imgSrc, nickname, email }) {
	return (
		<div className="MainProfile">
			<Link to={`/user/${localStorage.getItem('id')}`}>
				<img src={imgSrc} alt="profile" />
			</Link>
			<h2>{nickname}</h2>
			<span>{email}</span>
			{/* <button type="button">
				<Link to="/my-page">마이페이지</Link>
			</button>
			<button type="button" onClick={Logout}>
				<Link to="/login">로그아웃</Link>
			</button> */}
		</div>
	);
}

export default MainProfile;
