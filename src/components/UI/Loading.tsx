import React, { FC } from 'react';
import ReactLoading from 'react-loading';
import Colors from '../../constants/colors';

interface ILoadingProps {
    color?: Colors;
    width?: number | string;
    height?: number | string;
}

const Loading: FC<ILoadingProps> = ({ color, height, width }) => {
    return (
        <div>
            <ReactLoading className="loading-spinner"
                          type="spin" 
                          color={color || Colors.DARK_BLUE}
                          height={height}
                          width={width}/>
        </div>
    )
}

export default Loading
