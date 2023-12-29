import React from "react";
import { Header } from "../organism/header";
import { Home } from "../organism/home";
import { Footer } from "../organism/footer";

export const MainApp = () =>{
    return (
        <div>
            <Header />
            <Home />
            <Footer />
        </div>
    )
}