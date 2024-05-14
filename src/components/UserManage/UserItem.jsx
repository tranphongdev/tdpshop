import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

function UserItem({ user }) {
    return (
        <div className="box-shadow">
            <div className="mb-[32px]">
                <img className="max-h-[420px] w-full object-cover" src={user.avatar} alt="" />
            </div>

            <div className="space-y-4 px-4 pb-4">
                <p className="text-[30px] font-semibold">{user.name}</p>
                <span>{user.job}</span>
                <div className="flex items-center gap-4">
                    <FontAwesomeIcon icon={faFacebook} />
                    <FontAwesomeIcon icon={faInstagram} />
                    <FontAwesomeIcon icon={faTwitter} />
                </div>
            </div>
        </div>
    );
}

export default UserItem;
