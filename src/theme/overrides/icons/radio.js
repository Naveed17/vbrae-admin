import { createSvgIcon } from "@mui/material";
import React from "react";

function RadioCheck() {
    const CustomIcon = createSvgIcon(
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_6141_31709)">
                <rect width="20" height="20" rx="5" fill="#1095ED" />
                <rect x="7" y="7" width="6" height="6" rx="3" fill="white" />
            </g>
            <defs>
                <clipPath id="clip0_6141_31709">
                    <rect width="20" height="20" rx="10" fill="white" />
                </clipPath>
            </defs>
        </svg>

        ,
        'Radio Check')
    return (<CustomIcon />)
}
function RadioUnCheck() {
    const CustomIcon = createSvgIcon(
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="20" height="20" rx="10" fill="#273147" />
            <rect x="6.5" y="6.5" width="7" height="7" rx="3.5" stroke="#555F7F" />
        </svg>


        ,
        'Radio Uncheck')
    return (<CustomIcon />)
}
export { RadioCheck, RadioUnCheck }

