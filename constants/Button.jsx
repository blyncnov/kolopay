import React from 'react';

// styled-components
import { Button1 } from "../styles/constants/Constants";

const Button = ({ title, Bg, Text, BgT, TexTH }) => {
    return (
        <>
            <Button1 Text={Text} TexTH={TexTH} BgT={BgT} Bg={Bg}>{title}</Button1>
        </>
    )
}

export default Button