import React from 'react';

// styled-components
import { FlexBoxToRow } from "../styles/constants/Constants";

const FlexToRow = ({ title }) => {
    return (
        <>
            <FlexBoxToRow>
                {title}
            </FlexBoxToRow>
        </>
    )
}

export default FlexToRow