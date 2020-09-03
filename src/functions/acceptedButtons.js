export default function acceptedButtons(command) {
    const { buttonPressed } = command;
    const acceptButton = /(\d|[*/\-+,/.]|Enter|Backspace|Delete)/;
    const exeption = /(F\d)/;
    if( ! (buttonPressed.match(acceptButton))) command.buttonPressed = '';
    if(buttonPressed.match(exeption)) command.buttonPressed = '';
} 