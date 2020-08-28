import {deleteElementsInsideDiv} from'./html_service_templates';
import {addTextToElement} from'./html_service_templates';
import {createTextArea

export var passwordCheckTrue = () => {
    console.log('password is true');

};

export var passwordCheckFalse = () => {
    console.log('password is false');
    deleteElementsInsideDiv('infoPanel');
    addTextToElement('infoPanel', 'ZŁE HASŁO');
};
// var