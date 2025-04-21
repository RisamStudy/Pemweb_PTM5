import React from "react";
import  ComponentA  from "./ComponentA";

const ComponentB = () => {
    return(
        <div>
            <h1>Component B</h1>
            <ComponentA /> {/ * Menggunakan ComponentA didalam COmponentB*/}
        </div>
    );
};