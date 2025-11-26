import { createSvgIcon } from "@mui/material";
import React from "react";
function EnvelopIcon() {
    const CustomIcon = createSvgIcon(
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 8.25V15.25C1 15.7141 1.18964 16.1592 1.52721 16.4874C1.86477 16.8156 2.32261 17 2.8 17H17.2C17.6774 17 18.1352 16.8156 18.4728 16.4874C18.8104 16.1592 19 15.7141 19 15.25V8.25L10 11.75L1 8.25Z" fill="currentColor" />
            <path d="M2.8 3C2.32261 3 1.86477 3.18437 1.52721 3.51256C1.18964 3.84075 1 4.28587 1 4.75V6.5L10 10L19 6.5V4.75C19 4.28587 18.8104 3.84075 18.4728 3.51256C18.1352 3.18437 17.6774 3 17.2 3H2.8Z" fill="currentColor" />
        </svg>

        ,
        'Envelop Icon')
    return (<CustomIcon />)
}
export default EnvelopIcon