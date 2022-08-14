import React, { useEffect, useState } from "react";
import Card from "./Card";

function Modal({ children, show, onHide, title }) {
    const [showAnim, setShowAnim] = useState({
        modal: "hidden",
        backdrop: "hidden",
    });

    useEffect(() => {
        if (show === true || show === false) {
            setShowAnim({
                modal: show
                    ? "animate-fade-in-modal"
                    : "animate-fade-out-modal",
                backdrop: show
                    ? "animate-opacity-in-modal"
                    : "animate-opacity-out-modal",
            });
        }
    }, [show]);

    return (
        <>
            <div
                className={`fixed w-full h-full top-0 grid z-20
                place-items-center ${showAnim.modal}`}
            >
                <Card className={"relative py-10"}>
                    <button
                        className="absolute top-0 right-0 m-2 z-10"
                        onClick={onHide}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 hover:text-gray-dark text-gray-light transition-colors duration-75 "
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                fillRule="evenodd"
                                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </button>
                    {children}
                </Card>
            </div>
            <div
                className={`fixed h-full w-full inset-0 bg-gray-dark
                ${showAnim.backdrop}`}
            />
        </>
    );
}

export default Modal;
