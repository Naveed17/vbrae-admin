import { createSvgIcon } from "@mui/material";
import React from "react";
function UserIcon() {
    const CustomIcon = createSvgIcon(
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_6225_34049)">
                <path d="M10 2C11.3261 2 12.5979 2.52678 13.5355 3.46447C14.4732 4.40215 15 5.67392 15 7C15 8.32608 14.4732 9.59785 13.5355 10.5355C12.5979 11.4732 11.3261 12 10 12C8.67392 12 7.40215 11.4732 6.46447 10.5355C5.52678 9.59785 5 8.32608 5 7C5 5.67392 5.52678 4.40215 6.46447 3.46447C7.40215 2.52678 8.67392 2 10 2ZM10 14.5C15.525 14.5 20 16.7375 20 19.5V22H0V19.5C0 16.7375 4.475 14.5 10 14.5Z" fill="currentColor" />
            </g>
            <defs>
                <clipPath id="clip0_6225_34049">
                    <rect width="20" height="20" rx="10" fill="currentColor" />
                </clipPath>
            </defs>
        </svg>


        ,
        'User Icon')
    return (<CustomIcon />)
}
export default UserIcon