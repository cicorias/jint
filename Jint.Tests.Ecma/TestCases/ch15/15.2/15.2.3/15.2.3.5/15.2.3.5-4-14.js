/// Copyright (c) 2012 Ecma International.  All rights reserved. 
/**
 * @path ch15/15.2/15.2.3/15.2.3.5/15.2.3.5-4-14.js
 * @description Object.create - argument 'Properties' is an Error object (15.2.3.7 step 2)
 */


function testcase() {

        var props = new Error("test");
        var result = false;

        (Object.getOwnPropertyNames(props)).forEach(function(name){
            props[name] = {value:11, configurable:true}
        });

        Object.defineProperty(props, "prop15_2_3_5_4_14", {
            get: function () {
                result = this instanceof Error;
                return {};
            },
            enumerable: true
        });
        var newObj = Object.create({}, props);
        return result && newObj.hasOwnProperty("prop15_2_3_5_4_14");
    }
runTestCase(testcase);
