"use client";

import { useEffect, useState } from "react";

import Modal from "@/components/Model";


const ModalProvider = () => {
    const [isMounted, setIsMounted] = useState(false);

    //Trick to ensure that the code is being rendered only by client and not by the server
    useEffect( () => {
        setIsMounted(true);
    }, []);

    if (!isMounted) {
        return null;
    }

    return (
        <>
            <Modal 
             title="Test Modal"
             desc="Test description"
             isOpen
             onChange={() => {}}

             >
                Test Children
            </Modal>
        </>
    )
}


export default ModalProvider;