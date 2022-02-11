import './styles.css';
import cacheDOM from './cacheDOM.js';
import forms from './forms.js';


// if add task button is clicked, open a form for inputting task information
cacheDOM.taskButton.addEventListener('click', forms.openTaskForm)

let main = document.querySelector('main');

export default main;
