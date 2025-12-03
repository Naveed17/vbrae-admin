'use client';
import { useEffect, useRef } from 'react';

export default function QuillEditor({ value, onChange, placeholder }) {
    const editorRef = useRef(null);
    const quillRef = useRef(null);

    useEffect(() => {
        if (typeof window !== 'undefined' && !quillRef.current) {
            import('react-quill').then(({ default: ReactQuill }) => {
                import('react-quill/dist/quill.snow.css');
                // Dynamically render Quill
                const Quill = require('quill');
                if (editorRef.current && !quillRef.current) {
                    quillRef.current = new Quill(editorRef.current, {
                        theme: 'snow',
                        placeholder: placeholder || 'Enter text...',
                        modules: {
                            toolbar: [
                                ['bold', 'italic', 'underline'],
                                ['link', 'image'],
                                [{ list: 'ordered' }, { list: 'bullet' }],
                            ],
                        },
                    });

                    quillRef.current.on('text-change', () => {
                        onChange(quillRef.current.root.innerHTML);
                    });

                    if (value) {
                        quillRef.current.root.innerHTML = value;
                    }
                }
            });
        }
    }, []);

    return <div ref={editorRef} style={{ height: '300px', marginBottom: '50px' }} />;
}
