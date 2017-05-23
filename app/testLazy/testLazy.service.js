/**
 * Created by black.ren on 2017/5/16.
 */
'use strict';

define([
    'testLazy/testLazy.module'
], function(testLazyModule) {
    testLazyModule.service('testLazyService', function() {
        var service = {
            data: 123445
        };

        return service;
    })
})