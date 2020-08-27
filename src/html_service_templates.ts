export var createInputField = (idOfInputfieldPasteArea: string, idOfInputField: string) => {
    var inputField = document.createElement('input');
    inputField.type = 'text';
    inputField.id = idOfInputField;
    var placeToPasteInputField = document.getElementById(idOfInputfieldPasteArea);
    (<HTMLBodyElement>placeToPasteInputField).appendChild(inputField);
};
export var createDiv = (divPlacementId: string, divsID: string) => {
    var div = document.createElement('div');
    div.id = divsID;
    var placeToAddDiv = document.getElementById(divPlacementId);
    (<HTMLBodyElement>placeToAddDiv).appendChild(div);
};
export var deleteElementsInsideDiv = (idOfPlaceToClear: string) => {
    var placeToClear = document.getElementById(idOfPlaceToClear);
    (<HTMLBodyElement>placeToClear).innerHTML = '';
};
export var addTextToElement = (textPlacementId: string, textToPaste: string) => {
    var placeToAddText = document.getElementById(textPlacementId);
    (<HTMLBodyElement>placeToAddText).innerText += textToPaste;
};
export var addButton = (buttonPlacementId: string, buttonText: string) => {
    var btn = document.createElement('button');
    btn.id = 'loginButton';
    btn.innerHTML = buttonText;
    (<HTMLBodyElement>document.getElementById(buttonPlacementId)).appendChild(btn);
};
export var fetchTest = (twoFrazeObject: object) => {
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
        .then(data => {
            console.log('success:', data);
        })
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
/*
export var eraseTextInside = (idOfInputTextToClear: string) => {
    var placeToClear = document.getElementById(idOfInputTextToClear);
    (<HTMLInputElement>placeToClear).value = "";
}*/
