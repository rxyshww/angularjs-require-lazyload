/**
 * Created by black.ren on 2017/5/16.
 */

'use strict';

define([
    'index/index.component',
    'write/write.component'
], function() {
    angular.element(function() {
        angular.bootstrap(document, ['myApp'])
    })
});