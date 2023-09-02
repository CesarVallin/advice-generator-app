"use strict";
console.log(`hello from main.js`);

import {Setup, ApiInteraction} from './advice-generator-app-utils.js'

(async () => {
    const testMessage = Setup.testFromUtil();
    console.log(testMessage);

    const adviceObject = await ApiInteraction.getAdviceObject();
    console.log(adviceObject);
    console.log(adviceObject.slip.advice);
    console.log(adviceObject.slip.id);

}) ();

