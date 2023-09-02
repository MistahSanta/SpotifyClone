"use client";

import { useEffect, useState } from "react";

import AuthModal from "@/components/AuthModal";


const ModalProvider = () => {

    // Cool trick to ensure no hydration error
    const [isMounted, setIsMounted] = useState(false);

    //Trick to ensure that the code is being rendered only by client and not by the server
    useEffect( () => { setIsMounted(true); }, []);

    if (!isMounted) {
        // Whatever is being render is being render on the server - so return null
        return null;
    }

    return (
        
            <AuthModal />
        
    )
}


export default ModalProvider;