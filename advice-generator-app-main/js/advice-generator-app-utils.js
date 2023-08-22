"use strict";
console.log(`hello from advice-generator-app-utils.js`);

export const testFromUtils = async () => {
    console.log(`test from utils`);
};

/** Getter function */
export const getAdviceObject = async () => {
    const url = `https://api.adviceslip.com/advice`;
    const optionsAdviceObject = {
        method: 'GET',
        headers: {
            accept: 'application/json'
        }
    };
    try {
        const response = await fetch(url, optionsAdviceObject);
        const data = response.json();
        return data;
    } catch (error) {
        console.log(error);
    }


}

