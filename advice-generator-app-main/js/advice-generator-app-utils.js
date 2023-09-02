"use strict";
console.log(`hello from advice-generator-app-utils.js`);

export class Setup {
    static testFromUtil() {
        return `test from utils`;
    }
}

/** Get advice object */
export class ApiInteraction {
    static async getAdviceObject() {
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
}

/** Need: Render function ...*/
export const renderAdviceObject = async () => {
    const dynamicAdvice = document.querySelector('#adviceObject');

}

