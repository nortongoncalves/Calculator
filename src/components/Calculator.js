import React, { useEffect } from 'react';
import observerFunction from '../functions/observerFunction';
import Memory from '../functions/memory';
import updateDisplay from '../functions/updateDisplay';
import acceptedButtons from '../functions/acceptedButtons';
import calculatorMethods from '../functions/calculatorMethods';
import './Calculator.css';
export default function Calculator(){
    let observers = []; 
    const memory = Memory();

    function notifyAll(buttonPressed){
        document.querySelector('input').focus();
        
        const command = {
            buttonPressed,
            memory
        }
        observerFunction(observers,command);
    }

    function updateMemory(command){
        const { buttonPressed } = command;
        if(buttonPressed) memory.setValueMemory(buttonPressed);
    }

    function subscribeObservers(newFunction){
        observers.push(newFunction);
    }

    useEffect(()=>{
        document.querySelector('input').focus();
        subscribeObservers(acceptedButtons);
        subscribeObservers(updateMemory);
        subscribeObservers(calculatorMethods);
        subscribeObservers(updateDisplay);
    });

    return(
        <div className="calculator">
            <input type="text"
            onKeyDown={event => {
                event.preventDefault();
                notifyAll(event.key);
            }} />
            <table>
                <tbody>
                    <tr>
                        <td><button onClick={event => {
                            notifyAll(event.target.value);
                        }} value="Backspace">AC</button></td>
                        <td><button onClick={event => {
                            notifyAll(event.target.value);
                        }} value="Delete">DEL</button></td>
                        <td><button onClick={event => {
                            notifyAll(event.target.value);
                        }} value="%">%</button></td>
                        <td><button onClick={event => {
                            notifyAll(event.target.value);
                        }} value="/">/</button></td>
                    </tr>
                    <tr>
                        <td><button onClick={event => {
                            notifyAll(event.target.value);
                        }} value="7">7</button></td>
                        <td><button onClick={event => {
                            notifyAll(event.target.value);
                        }} value="8">8</button></td>
                        <td><button onClick={event => {
                            notifyAll(event.target.value);
                        }} value="9">9</button></td>
                        <td><button onClick={event => {
                            notifyAll(event.target.value);
                        }} value="*">*</button></td>
                    </tr>
                    <tr>
                        <td><button onClick={event => {
                            notifyAll(event.target.value);
                        }} value="4">4</button></td>
                        <td><button onClick={event => {
                            notifyAll(event.target.value);
                        }} value="5">5</button></td>
                        <td><button onClick={event => {
                            notifyAll(event.target.value);
                        }} value="6">6</button></td>
                        <td><button onClick={event => {
                            notifyAll(event.target.value);
                        }} value="-">-</button></td>
                    </tr>
                    <tr>
                        <td><button onClick={event => {
                            notifyAll(event.target.value);
                        }} value="1">1</button></td>
                        <td><button onClick={event => {
                            notifyAll(event.target.value);
                        }} value="2">2</button></td>
                        <td><button onClick={event => {
                            notifyAll(event.target.value);
                        }} value="3">3</button></td>
                        <td rowSpan="2"><button onClick={event => {
                            notifyAll(event.target.value);
                        }} value="+">+</button></td>
                    </tr>
                    <tr>
                        <td><button onClick={event => {
                            notifyAll(event.target.value);
                        }} value="0">0</button></td>
                        <td><button onClick={event => {
                            notifyAll(event.target.value);
                        }} value=",">,</button></td>
                        <td><button onClick={event => {
                            notifyAll(event.target.value);
                        }} value="Enter">=</button></td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}