"use strict";
console.log(`hello from main.js`);

import {Setup, ApiInteraction} from './advice-generator-app-utils.js'

(async () => {
    const testMessage = Setup.testFromUtil();
    console.log(testMessage);

    const adviceObject = await ApiInteraction.getAdviceObject();
    console.log(adviceObject);

    const adviceObjectAdvice = ApiInteraction.getAdviceObjectAdvice(adviceObject);
    console.log(adviceObjectAdvice);

    const adviceObjectId = ApiInteraction.getAdviceObjectId(adviceObject);
    console.log(adviceObjectId);


}) ();

