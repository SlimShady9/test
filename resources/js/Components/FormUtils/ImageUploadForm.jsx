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
        <section>
            <div
                {...getRootProps()}
                className="max-h-60 max-w-60 m-auto rounded-full flex justify-center"
            >
                <div>
                    <input {...getInputProps()} />
                    <Thumbs files={files} />
                </div>
            </div>
        </section>
    );
}

const Thumbs = ({ files }) => {
    return (
        <>
            {files.map((file, index) => (
                <div
                    className="inline-flex rounded-sm w-full h-full justify-center cursor-pointer"
                    key={index}
                >
                    <div className="flex min-w-0 overflow-hidden ">
                        <img
                            src={`${file}?${new Date().getTime()}`}
                            className="w-auto h-full rounded-full flex justify-center items-center "
                            // Revoke data uri after image is loaded
                        />
                    </div>
                </div>
            ))}
        </>
    );
};
