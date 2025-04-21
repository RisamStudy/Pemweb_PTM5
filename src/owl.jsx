import React from "react";
const owl = {
    title : "Excelent Owl",
    src : "photo-owl.jpg",
};

export default function Owl() {
    return(
        <div>
        <h1>{owl.title}</h1>
        <img src={owl.src} alt={owl.title} />
        </div>
    );
}
