import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
    const [userData, setUserData] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const currentUser = localStorage.getItem('currentUser');
        if (currentUser) {
            setUserData(JSON.parse(currentUser));
        }
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('currentUser');
        navigate('/login');
    };

    if (!userData) {
        return (
            <div>
                <p>로그인이 필요합니다.</p>
                <button onClick={() => navigate('/login')}>로그인하기</button>
            </div>
        );
    }

    return (
        <div>
            <h1>프로필</h1>
            <p>아이디: {userData.id}</p>
            <p>닉네임: {userData.nickname}</p>
            <p>우편번호: {userData.postcode}</p>
            <p>주소: {userData.address}</p>
            <button onClick={handleLogout}>로그아웃</button>
        </div>
    );
}

export default Profile;