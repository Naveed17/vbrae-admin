import { createSvgIcon } from "@mui/material";
import React from "react";
function UserFillIcon() {
    const CustomIcon = createSvgIcon(
        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="30" height="30" rx="15" fill="#0D1021" />
            <path d="M15 6C16.5913 6 18.1174 6.63214 19.2426 7.75736C20.3679 8.88258 21 10.4087 21 12C21 13.5913 20.3679 15.1174 19.2426 16.2426C18.1174 17.3679 16.5913 18 15 18C13.4087 18 11.8826 17.3679 10.7574 16.2426C9.63214 15.1174 9 13.5913 9 12C9 10.4087 9.63214 8.88258 10.7574 7.75736C11.8826 6.63214 13.4087 6 15 6ZM15 21C21.63 21 27 23.685 27 27V30H3V27C3 23.685 8.37 21 15 21Z" fill="currentColor" />
        </svg>

        ,
        'User Fill Icon')
    return (<CustomIcon />)
}
export default UserFillIcon