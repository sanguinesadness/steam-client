import React, { useState } from 'react';
import { UserTypes } from '../../types/user';
import SteamUserService from '../../services/steam-user-service';
import { BsCheckLg } from 'react-icons/bs';
import { BiErrorCircle } from 'react-icons/bi';
import { RiErrorWarningFill } from 'react-icons/ri';
import Button from '../UI/Button';
import Colors from '../../constants/colors';

const WarningButton = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<boolean>(false);
    const [success, setSuccess] = useState<boolean>(false);

    const ErrorIcon = () => <BiErrorCircle color={Colors.RED}/>
    const SuccessIcon = () => <BsCheckLg color={Colors.GREEN}/>
    const DefaultIcon = () => <RiErrorWarningFill/>

    const setRandomProfile = () => {
        setDefaults();
        setLoading(true);

        SteamUserService.setWarningProfile(UserTypes.VICTIM)
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
        <Button text="Warning profile"
                onClick={setRandomProfile}
                loading={loading}
                Icon={error ? ErrorIcon : success ? SuccessIcon : DefaultIcon}/>
        </div>
    )
}

export default WarningButton
