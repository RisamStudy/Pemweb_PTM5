import React from "react";
import { createRoot } from 'react-dom/client';

const container = document.getElementById('App');
const root = createRoot(container);


// Judgemental Will be True Half The Time.
const Judgemental = Math.random() < 0.5;

const favoriteFoods = (
    <div>
        <h1>My Favorite Foods</h1>
        <ul>
            <li>Sushi Burrito</li>
            <li>Rhubarb pie</li>
            { !Judgemental && <li>Nacho Cheez Straight Out The Jar</li>}
            <li>Broiled Grapefruit</li>
        </ul>
    </div>
);
root.render(favoriteFoods);