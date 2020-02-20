export default function updateDisplay(command){
    const { memory } = command;
    const input = document.querySelector('input');
    input.value = memory.getValueMemory();
}