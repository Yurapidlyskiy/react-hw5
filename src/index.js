// Домашнє завдання!!!!!!!!!
//Створити компонент меню з елементами та передавати в середину всі пункти меню через props


import React from 'react';
import ReactDOM from 'react-dom';

const Menu = (props)=>(
   <nav>
       <ul>
           <li>{props.greeting}</li>
           <li>{props.work}</li>
           <li>{props.about}</li>
           <li>{props.con}</li>
           <li>{props.sth}</li>
       </ul>
   </nav> 
);
ReactDOM.render(<Menu greeting='hello, check my menu' work='work' about='about' con='contacts' sth='sth else'/>, document.getElementById("root"));