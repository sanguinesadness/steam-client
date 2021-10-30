import React, { FC } from 'react';
import * as SC from '../../styles/styled-components/error';
import DenialIcon from '../../icons/denial.svg';

interface IErrorProps {
    text: string;
}

const Error: FC<IErrorProps> = ({ text }) => {
    return (
        <SC.Error>
            <SC.Icon>
                <DenialIcon/>
            </SC.Icon>
            <SC.Text>{text}</SC.Text>
        </SC.Error>
    )
}

export default Error
