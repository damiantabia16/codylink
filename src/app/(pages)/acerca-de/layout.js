import { Inter } from "next/font/google";
import Navbar from "@/app/components/home/navbar/navbar";
import Footer from "@/app/components/home/footer/footer";

export const metadata = {
    title: "Acerca de"
};

export default function AboutLayout({ children }) {
    return (
        <>
            <Navbar />
            {children}
            <Footer />
        </>
    );
}