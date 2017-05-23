/**
 * Created by black.ren on 2017/5/16.
 */

'use strict';
define([
    'testLazy/testLazy.module',
    'text!testLazy/testLazy-template.html',
    'testLazy/testLazy.service'
], function(testLazyModule, testLazyTemplate) {
    testLazyModule.component('appTestLazy', {
        template: testLazyTemplate,
        controller: ['testLazyService', function(testLazyService) {
            var ctrl = this;
            ctrl.service = testLazyService;
            ctrl.test = function() {
                testLazyService.data = 65656565;
            }
        }]
    })
})