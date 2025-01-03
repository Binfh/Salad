import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faPhone, faEdit } from '@fortawesome/free-solid-svg-icons';
import './Profile.scss';

const Profile = () => {
    const navigate = useNavigate();
    const [userInfo, setUserInfo] = useState(null);
    const [isEditing, setIsEditing] = useState(false);
    const [editedInfo, setEditedInfo] = useState({});

    useEffect(() => {
        const storedUserInfo = localStorage.getItem('userInfo');
        if (!storedUserInfo) {
            navigate('/');
            return;
        }
        setUserInfo(JSON.parse(storedUserInfo));
        setEditedInfo(JSON.parse(storedUserInfo));
    }, [navigate]);

    const handleEdit = () => {
        setIsEditing(!isEditing);
        if (!isEditing) {
            setEditedInfo({...userInfo});
        }
    };

    const handleSave = () => {
        localStorage.setItem('userInfo', JSON.stringify(editedInfo));
        setUserInfo(editedInfo);
        setIsEditing(false);
    };

    const handleChange = (e) => {
        setEditedInfo({
            ...editedInfo,
            [e.target.name]: e.target.value
        });
    };

    if (!userInfo) return null;

    return (
        <div className="profile-container profile">
            <div className="profile-card">
                <div className="profile-header">
                    <h1>Profile Information</h1>
                    <button className="edit-button" onClick={handleEdit}>
                        <FontAwesomeIcon icon={faEdit} />
                        {isEditing ? 'Cancel' : 'Edit Profile'}
                    </button>
                </div>
                
                <div className="profile-content">
                    <div className="info-group">
                        <div className="info-icon">
                            <FontAwesomeIcon icon={faUser} />
                        </div>
                        {isEditing ? (
                            <input
                                name="username"
                                value={editedInfo.username}
                                onChange={handleChange}
                                className="edit-input"
                            />
                        ) : (
                            <p>{userInfo.username}</p>
                        )}
                    </div>

                    <div className="info-group">
                        <div className="info-icon">
                            <FontAwesomeIcon icon={faEnvelope} />
                        </div>
                        {isEditing ? (
                            <input
                                name="email"
                                value={editedInfo.email}
                                onChange={handleChange}
                                className="edit-input"
                            />
                        ) : (
                            <p>{userInfo.email}</p>
                        )}
                    </div>

                    <div className="info-group">
                        <div className="info-icon">
                            <FontAwesomeIcon icon={faPhone} />
                        </div>
                        {isEditing ? (
                            <input
                                name="phone"
                                value={editedInfo.phone}
                                onChange={handleChange}
                                className="edit-input"
                            />
                        ) : (
                            <p>{userInfo.phone}</p>
                        )}
                    </div>

                    {isEditing && (
                        <button className="save-button" onClick={handleSave}>
                            Save Changes
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Profile;