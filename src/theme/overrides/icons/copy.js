
import { createSvgIcon } from "@mui/material";
import React from "react";
function CopyIcon() {
    const CustomIcon = createSvgIcon(
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.6 6.8H3.6C2.7176 6.8 2 7.5176 2 8.4V16.4C2 17.2824 2.7176 18 3.6 18H11.6C12.4824 18 13.2 17.2824 13.2 16.4V8.4C13.2 7.5176 12.4824 6.8 11.6 6.8Z" fill="white" />
            <path d="M16.4 2H8.4C7.97565 2 7.56869 2.16857 7.26863 2.46863C6.96857 2.76869 6.8 3.17565 6.8 3.6V5.2H13.2C13.6243 5.2 14.0313 5.36857 14.3314 5.66863C14.6314 5.96869 14.8 6.37565 14.8 6.8V13.2H16.4C16.8243 13.2 17.2313 13.0314 17.5314 12.7314C17.8314 12.4313 18 12.0243 18 11.6V3.6C18 3.17565 17.8314 2.76869 17.5314 2.46863C17.2313 2.16857 16.8243 2 16.4 2Z" fill="currentColor" />
        </svg>

        ,
        'Copy Icon')
    return (<CustomIcon />)
}
export default CopyIcon