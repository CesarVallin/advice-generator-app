"use strict";
console.log(`hello from main.js`);

import {testFromUtils, getAdviceObject} from './advice-generator-app-utils.js'

(async () => {
    testFromUtils();

    const adviceObject = await getAdviceObject();
    console.log(adviceObject);




}) ();

