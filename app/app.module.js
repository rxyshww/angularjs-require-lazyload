/**
 * Created by black.ren on 2017/5/16.
 */

define([
    'app.routers'
], function(routers) {

    function configRouter(ngModule, routersConfig) {
        ngModule.config(['$stateProvider', '$locationProvider', '$ocLazyLoadProvider', function($stateProvider, $locationProvider, $ocLazyLoadProvider) {
            $locationProvider.hashPrefix('');//去除浏览器url地址中的!

            $ocLazyLoadProvider.config({
                'debug': true, // For debugging 'true/false'
                'events': true // For Event 'true/false'
            });

            for (var i = 0; i < routersConfig.length; i++) {
                $stateProvider.state(routersConfig[i]);
            }
        }])
    }

    var appModule = angular.module('myApp', ['ui.router', 'oc.lazyLoad']);
    configRouter(appModule, routers);
    return appModule;
})