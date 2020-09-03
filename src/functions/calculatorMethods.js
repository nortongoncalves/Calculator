export default function calculatorMethods(command){
    const { memory } = command;
    const { buttonPressed } = command;
    const specialMethods = {
        Delete(){
            const regex = /(Delete)/;
            if(memory.getValueMemory().match(regex)){
                memory.clearMemory();
            }
        },
        Backspace(){
            const regex = /(Backspace)/;
            if(memory.getValueMemory().match(regex)){
                const position = memory.getValueMemory().match(regex).index;
                const newValue = memory.getValueMemory().substr(0,position-1);
                memory.clearMemory();
                memory.setValueMemory(newValue);
            }
        },
        Enter(){
            const regex = /(Enter)/;
            if(memory.getValueMemory().match(regex)){
                const position = memory.getValueMemory().match(regex).index;
                let valueDisplay = memory.getValueMemory().substr(0,position);
                valueDisplay = valueDisplay.replace(/,/g,'.');
                const operatorsRegex = /([+\-*/])/;
                const lastValueDisplay = valueDisplay[valueDisplay.length-1]; 
                memory.clearMemory();
                if(lastValueDisplay.match(operatorsRegex)){
                    memory.setValueMemory(valueDisplay);
                    //alert('')
                }else{
                    const result = eval(valueDisplay);
                    memory.setValueMemory(result);
                }
            }
        }
    }
    const method = specialMethods[buttonPressed];
    if(method) method();
}