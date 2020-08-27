
import {deleteElementsInsideDiv} from'./html_service_templates';
import {createDiv} from './html_service_templates';
import {addTextToElement} from './html_service_templates';
import {createInputField} from './html_service_templates';
import {addButton} from './html_service_templates';
// import {eraseTextInside} from './html_service_templates.js';
import {fetchTest} from './html_service_templates';

var createLoginEnvironment =  () => {
    deleteElementsInsideDiv('infoPanel');
    createDiv('infoPanel', 'loginDiv');
    addTextToElement('loginDiv', 'Login  ');
    createInputField('loginDiv', 'loginField');
    createDiv('infoPanel', 'passwordDiv');
    addTextToElement('passwordDiv', '\n Password');
    createInputField('passwordDiv', 'passwordField');
    addButton('infoPanel', 'Login');
    var loginButton = document.getElementById('loginButton');
    (<HTMLBodyElement>loginButton).addEventListener('click', saveTypedLPIntoObject );
    addButton('infoPanel', 'Get test');
};
(<HTMLHtmlElement>document.getElementById('loginLeftLink'))
.addEventListener('click', () => {createLoginEnvironment();
});


var saveTypedLPIntoObject = () => {
    var loginAndPasswordHolder = {
        login: '',
        password: ''
    };
    loginAndPasswordHolder.login = (
        <HTMLInputElement>document.getElementById('loginField')).value;
    (<HTMLInputElement>document.getElementById('loginField')).value = '';  // clearing field
    loginAndPasswordHolder.password = (
        <HTMLInputElement>document.getElementById('passwordField')).value;
        (<HTMLInputElement>document.getElementById('passwordField')).value = ''; // clearing field
    // return loginAndPasswordHolder;
    console.log(loginAndPasswordHolder);
    fetchTest(loginAndPasswordHolder);
};