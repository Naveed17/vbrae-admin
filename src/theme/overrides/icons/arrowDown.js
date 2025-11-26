import { createSvgIcon } from "@mui/material";
import React from "react";
function ArrowDown() {
    const CustomIcon = createSvgIcon(
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 10.4549L5.33312 6L4 7.27256L10 13L16 7.27256L14.6669 6L10 10.4549Z" fill="currentColor" />
        </svg>

        ,
        'Arrow Down')
    return (<CustomIcon />)
}
export default ArrowDown