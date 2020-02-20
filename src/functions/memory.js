export default function memory(){
    let memory = "";
    return {
        setValueMemory: (string) => {
            memory += String(string); 
        },
        getValueMemory: () => {
            return memory;
        },
        clearMemory(){
            memory = "";
        }
    }
}