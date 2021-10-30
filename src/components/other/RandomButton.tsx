import React, { useState } from 'react';
import { UserTypes } from '../../types/user';
import SteamUserService from '../../services/steam-user-service';
import { BsCheckLg } from 'react-icons/bs';
import { BiErrorCircle } from 'react-icons/bi';
import { FaUserAlt } from 'react-icons/fa';
import Button from '../UI/Button';
import Colors from '../../constants/colors';

const RandomButton = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<boolean>(false);
    const [success, setSuccess] = useState<boolean>(false);

    const ErrorIcon = () => <BiErrorCircle color={Colors.RED}/>
    const SuccessIcon = () => <BsCheckLg color={Colors.GREEN}/>
    const DefaultIcon = () => <FaUserAlt/>

    const setRandomProfile = () => {
        setDefaults();
        setLoading(true);

        SteamUserService.setRandomProfile(UserTypes.FAKE)
                        .then(() => setSuccess(true))
                        .catch(() => setError(true))
                        .finally(() => {
                            setLoading(false);

                            setTimeout(() => {
                                setDefaults();
                            }, 2000);
                        });
    }

    const setDefaults = () => {
        setError(false);
        setSuccess(false);
    }

    return (
        <div>
        <Button text="Random Profile"
                onClick={setRandomProfile}
                loading={loading}
                Icon={error ? ErrorIcon : success ? SuccessIcon : DefaultIcon}/>
        </div>
    )
}

export default RandomButton
