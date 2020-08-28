import {passwordCheckFalse} from './html_js_functions';
import {passwordCheckTrue} from './html_js_functions';


export var checkLoginAndPasswordWithFetch = (twoFrazeObject: object) => {
    console.log('starting the fetch...');
    fetch('http://localhost:3533/api', {
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
    export var GetTest = (twoFrazeObject: object) => {
        console.log('starting the fetch...');
        fetch('http://localhost:3533/api', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
                },
                body: JSON.stringify(
                    {twoFrazeObject}
                    )}
            )
            .then(response => response.json())
            .then(data => {
                console.log('success:', data);
            })
            .catch(error => {
                console.error('errorek:', error);
            });
        };