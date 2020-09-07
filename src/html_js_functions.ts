import {deleteElementsInsideDiv} from'./html_service_templates';
import {addTextToElement} from './html_service_templates';
// import {createTextArea} from './html_service_templates';
import {loadElementFromDatabaseToPanel} from './html_service_templates';

export var passwordCheckTrue = () => {
    var greetingsOnSuccesfullLogin = ('Witaj w trybie edycji \n Proszę wybrać dział by rozpocząć zmiany');
    console.log('password is true');
    deleteElementsInsideDiv('infoPanel');
};

export var passwordCheckFalse = () => {
    console.log('password is false');
    deleteElementsInsideDiv('infoPanel');
    addTextToElement('infoPanel', 'ZŁE HASŁO');
};
// var
export var addLeftPanelButtonsServices = () => {
    (<HTMLBodyElement>document.getElementById('streamId'))
.addEventListener('click', () => {
    loadElementFromDatabaseToPanel('infoPanel', 'stream');
});
    (<HTMLBodyElement>document.getElementById('contactId'))
.addEventListener('click', () => {
    loadElementFromDatabaseToPanel('infoPanel', 'contact');
});
    (<HTMLBodyElement>document.getElementById('dioceseId'))
.addEventListener('click', () => {
    loadElementFromDatabaseToPanel('infoPanel', 'diocese');
});
    (<HTMLBodyElement>document.getElementById('comunityId'))
.addEventListener('click', () => {
    loadElementFromDatabaseToPanel('infoPanel', 'community');
});
    (<HTMLBodyElement>document.getElementById('sacramentsId'))
.addEventListener('click', () => {
    loadElementFromDatabaseToPanel('infoPanel', 'sacraments');
});
    (<HTMLBodyElement>document.getElementById('massId'))
.addEventListener('click', () => {
    loadElementFromDatabaseToPanel('infoPanel', 'mass');
});
};