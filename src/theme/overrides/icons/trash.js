import { createSvgIcon } from "@mui/material";
import React from "react";
function TrashIcon() {
    const CustomIcon = createSvgIcon(
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.5 3.6L8.25 2H11.75L13.5 3.6H17V5.2H3V3.6H6.5ZM3.875 6.8H16.125L15.25 18H4.75L3.875 6.8ZM8.25 8.4V16.4H9.125V8.4H8.25ZM10.875 8.4V16.4H11.75V8.4H10.875Z" fill="currentColor" />
        </svg>



        ,
        'Trash Icon')
    return (<CustomIcon />)
}
export default TrashIcon