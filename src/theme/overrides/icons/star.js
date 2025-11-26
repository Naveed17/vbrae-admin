import { createSvgIcon } from "@mui/material";
import React from "react";
function StarIcon() {
    const CustomIcon = createSvgIcon(
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 14.0553L14.944 17L13.632 11.45L18 7.71579L12.248 7.23421L10 2L7.752 7.23421L2 7.71579L6.368 11.45L5.056 17L10 14.0553Z" fill="currentColor" />
        </svg>
        ,
        'Star')
    return (<CustomIcon />)
}
export default StarIcon