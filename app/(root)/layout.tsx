import Navbar from "@/components/Navbar";
import { ReactNode } from "react";

export default function Layout({children} : {children : ReactNode}){
    return(
        <>
            <Navbar />
            <div className="mt-20 overflow-x-hidden">
            {children}
            </div>
        </>
    )
}