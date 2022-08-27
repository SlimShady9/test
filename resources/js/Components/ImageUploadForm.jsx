import React, { useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import axios from "axios";

const loadImage = (user) => {
    if (user && user.picture) {
        return [`api/user/${user.id}/profileimg`];
    }
    return [];
};
export default function ImageUploadForm({ user, setUser }) {
    const [files, setFiles] = useState(loadImage(user));
    const { getRootProps, getInputProps } = useDropzone({
        accept: {
            "image/*": [],
        },
        onDrop: (acceptedFiles) => {
            const dataform = new FormData();
            dataform.append("file", acceptedFiles[0]);
            axios.post(`api/user/${user.id}/profileimg`, dataform).then(() => {
                setUser(
                    axios.get(`api/user/${user.id}`).then((res) => {
                        setUser(res.data);
                        setFiles(loadImage(user));
                    })
                );
            });
        },
    });

    useEffect(() => {
        setFiles(loadImage(user));
    }, [user]);

    return (
        <section className="container">
            <div {...getRootProps()}>
                <aside className="flex flex-row flex-wrap my-4">
                    <div className="max-h-40 max-w-40 h-28 w-28 m-auto border border-solid flex justify-center">
                        <input {...getInputProps()} />
                        <Thumbs files={files} />
                    </div>
                </aside>
            </div>
        </section>
    );
}

const Thumbs = ({ files }) => {
    return (
        <>
            {files.map((file, index) => (
                <div
                    className="inline-flex rounded-sm border border-solid border-gray-light w-full h-full justify-center box-border cursor-pointer"
                    key={index}
                >
                    <div className="flex min-w-0 overflow-hidden">
                        <img
                            src={`${file}?${new Date().getTime()}`}
                            className="w-auto h-full flex justify-center items-center"
                            // Revoke data uri after image is loaded
                        />
                    </div>
                </div>
            ))}
        </>
    );
};
