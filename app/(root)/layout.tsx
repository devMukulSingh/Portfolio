import Navbar from "@/components/Navbar";
import { ReactNode } from "react";
import Footer from "./components/Footer";
 

export default function Layout({children} : {children : ReactNode}){
    return(
        <>
            <Navbar />
            <div className="mt-20 overflow-x-hidden">
            {children}
            </div>
            <Footer/>
        </>
    )
}