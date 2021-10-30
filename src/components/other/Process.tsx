import React, { useState } from 'react'
import Button from '../UI/Button'
import ProcessService from '../../services/process-service'
import Loading from '../UI/Loading';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { refreshUsers } from '../../store/actions/common';
import Error from '../UI/Error';

const Process = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const [finished, setFinished] = useState<boolean>(false);
    const [error, setError] = useState<boolean>(false);

    const userState = useTypedSelector(root => root);

    const usersLoggedIn = () => userState.fake.user.steamUser && userState.victim.user.steamUser;

    const start = () => {
        if (!usersLoggedIn()) {
            return;
        }

        setFinished(false);
        setError(false);
        setLoading(true);

        ProcessService.start()
                      .then(() => setFinished(true))
                      .catch(() => setError(true))
                      .finally(() => setLoading(false));
    }

    return (
        <div>
            <div>
                <h2>Process</h2>
            </div>
            <div>
                {
                    loading ? 
                        <Loading/>
                    : 
                    error ? 
                        <Error text="Error occured while processing request"/>
                    :
                    <>
                        <Button text="Start" onClick={start} disabled={!usersLoggedIn()}/>
                        {
                            finished ? 
                                <span>Finished</span>
                            : <></>
                        }
                    </>
                }
            </div>
        </div>
    )
}

export default Process
