/**
 * Created by black.ren on 2017/5/16.
 */
'use strict';

define([], function() {
    return [{
        name: 'app',
        url: '',
        redirectTo: 'index'
    }, {
        name: 'index',
        url: '/index',
        component: 'appIndex'
    }, {
        name: 'write',
        url: '/write',
        component: 'appWrite'
    }, {
        name: 'testLazy',
        url: '/testLazy',
        component: 'appTestLazy',
        authenticate: true,
        resolve: {
            lazyload: ['$ocLazyLoad', function ($ocLazyLoad) {
                return $ocLazyLoad.load({files: ['testLazy/testLazy.component'], cache: false}).then(function () {
                    $ocLazyLoad.inject('testLazy.module');
                });
            }]
        }
    }]
});