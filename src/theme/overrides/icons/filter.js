import { createSvgIcon } from "@mui/material";
import React from "react";
function FilterIcon() {
    const CustomIcon = createSvgIcon(
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M0 1.42569C0 1.04758 0.158035 0.684945 0.43934 0.417576C0.720644 0.150207 1.10218 0 1.5 0H16.5C16.8978 0 17.2794 0.150207 17.5607 0.417576C17.842 0.684945 18 1.04758 18 1.42569V3.40836C17.9999 3.91247 17.7891 4.3959 17.414 4.75231L12 9.89811V16.9543C12 17.1326 11.9521 17.3078 11.8608 17.4635C11.7695 17.6192 11.6379 17.7501 11.4783 17.8438C11.3188 17.9375 11.1368 17.9909 10.9494 17.9989C10.7621 18.007 10.5757 17.9693 10.408 17.8896L6.691 16.1236C6.48337 16.025 6.30875 15.8733 6.1867 15.6856C6.06466 15.4979 6.00001 15.2817 6 15.061V9.89811L0.586 4.75231C0.210901 4.3959 0.000113275 3.91247 0 3.40836V1.42569Z" fill="currentColor" />
        </svg>


        ,
        'Filter Icon')
    return (<CustomIcon />)
}
export default FilterIcon

