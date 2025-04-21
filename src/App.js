import React from "react";
import {createRoot} from 'react-dom/client';
const container = document.getElementById('App');
const root = createRoot(container);
const people = ['STIKOM', 'Poltek', 'Cirebon'];
const peopleList = people.map((person, i) =>
<li>{person}</li>
);
root.render(<ul>{peopleList}</ul>);

const App = React.createElement(
    'div',
    null,
    'i am div'
);
export default App;