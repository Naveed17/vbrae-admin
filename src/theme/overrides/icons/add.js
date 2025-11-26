import { createSvgIcon } from "@mui/material";
import React from "react";
function AddIcon() {
    const CustomIcon = createSvgIcon(
        <svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21.2136 7.07107C17.2741 3.13147 11.0111 3.13147 7.07151 7.07107C3.13192 11.0107 3.13192 17.2736 7.07151 21.2132C11.0111 25.1528 17.2741 25.1528 21.2136 21.2132C25.1532 17.2736 25.1532 11.0107 21.2136 7.07107ZM13.3345 20.4051V14.9503H7.87963V13.334H13.3345V7.87919H14.9507V13.334H20.4055V14.9503H14.9507V20.4051H13.3345Z" fill="currentColor" />
        </svg>

        ,
        'Add Icon')
    return (<CustomIcon />)
}
export default AddIcon