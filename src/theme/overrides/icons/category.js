import { createSvgIcon } from "@mui/material";
import React from "react";
function CategoryIcon() {
    const CustomIcon = createSvgIcon(
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.22222 9.22222V3H4.55556C3.7 3 3 3.7 3 4.55556V9.22222H9.22222ZM10.7778 9.22222H17V4.55556C17 3.7 16.3 3 15.4444 3H10.7778V9.22222ZM9.22222 10.7778H3V15.4444C3 16.3 3.7 17 4.55556 17H9.22222V10.7778ZM10.7778 10.7778V17H15.4444C16.3 17 17 16.3 17 15.4444V10.7778H10.7778Z" fill="currentColor" />
        </svg>


        ,
        'Category Icon')
    return (<CustomIcon />)
}
export default CategoryIcon