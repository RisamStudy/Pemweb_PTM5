import React from "react";
const redPanda = {
    src : 'https://upload.wikipedia.org/wikipedia/commons/b/b2/Endangered_Red_Panda.jpg',
    alt : 'Red Panda',
    width : "200px"
};
export default function RedPanda(){
    return(
        <div>
            <h1>Cute Red Panda</h1>
            <img 
            src={redPanda.src}
            alt={redPanda.alt}
            width={redPanda.width}/>
        </div>
    );
}