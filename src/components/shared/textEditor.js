"use client";

import { useTheme } from "@mui/material";
import dynamic from "next/dynamic";

const Editor = dynamic(() => import("@tinymce/tinymce-react").then(m => m.Editor), {
    ssr: false,
});

export default function TextEditor({ initialValue = "" }) {
    const theme = useTheme();
    const isDark = theme.palette.mode === "dark";

    return (
        <Editor
            key={isDark ? "dark" : "light"}
            apiKey="z0q4pzx6obat10r5m77t1uys1wh15anz6pifcpz9r46masew"
            initialValue={initialValue}
            init={{
                height: 500,
                menubar: false,
                skin: isDark ? "oxide-dark" : "oxide",
                content_css: isDark ? "dark" : "default",
                plugins: "lists link image table code help wordcount",
                toolbar:
                    "undo redo | bold italic underline | alignleft aligncenter alignright | bullist numlist | code",
            }}
        />
    );
}
