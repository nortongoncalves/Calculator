export default function observerFunction(observers,command){
    for (const observerFunction of observers) {
        if(observerFunction) observerFunction(command);
    }
}