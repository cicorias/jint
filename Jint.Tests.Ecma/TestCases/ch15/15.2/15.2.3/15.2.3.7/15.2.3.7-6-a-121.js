/// Copyright (c) 2012 Ecma International.  All rights reserved. 
/**
 * @path ch15/15.2/15.2.3/15.2.3.7/15.2.3.7-6-a-121.js
 * @description Object.defineProperties - 'O' is an Array, 'P' is the length property of 'O', test RangeError is thrown when setting the [[Value]] field of 'desc' to undefined (15.4.5.1 step 3.c)
 */


function testcase() {

        var arr = [];

        try {
            Object.defineProperties(arr, {
                length: { value: undefined }
            });

            return false;
        } catch (e) {
            return e instanceof RangeError && arr.length === 0;
        }
    }
runTestCase(testcase);
