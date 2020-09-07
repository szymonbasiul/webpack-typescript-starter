import {passwordCheckFalse} from './html_js_functions';
import {passwordCheckTrue} from './html_js_functions';


export var checkLoginAndPasswordWithFetch = (twoFrazeObject: object) => {
    console.log('starting the fetch...');
    fetch('/api', { // http://localhost:3533
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify(
                {twoFrazeObject}
                )}
        )
        .then(response => response.json())
        .then((data) =>  {
            if (data.status === true) {
            passwordCheckTrue();
            }
           else
            passwordCheckFalse();
        }
        )
        .catch(error => {
            console.error('errorek:', error);
        });
    };
    export var getTest = async () => {
        console.log('starting the get...');
       return  fetch('/data').then( // http://localhost:3533
           data => data.json()
           ).then(
            data => data
           );
        };