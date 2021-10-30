import React, { FC } from 'react';
import Colors from '../../constants/colors';
import * as SC from '../../styles/styled-components/button';
import Loading from './Loading';

interface IButtonProps {
    text: string;
    onClick?: () => void;
    disabled?: boolean;
    loading?: boolean;
    Icon?: () => JSX.Element;
    color?: Colors;
}

const Button: FC<IButtonProps> = ({
    text,
    onClick,
    disabled,
    loading,
    Icon,
    color
}) => {
    return (
        <SC.Button color={color} onClick={onClick} disabled={disabled}>
            {
                Icon ?
                    <SC.Icon>
                        {
                            loading ?
                                <Loading color={Colors.WHITE}
                                         height="0.9em"
                                         width="0.9em"/>
                                : Icon ?

                                    <Icon />
                                    : <></>
                        }
                    </SC.Icon>
                    : <></>
            }
            <SC.Text>{text}</SC.Text>
        </SC.Button>
    )
}

export default Button
