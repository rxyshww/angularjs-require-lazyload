/**
 * Created by black.ren on 2017/5/16.
 */

define([
    '../app.module',
    'text!index/index-template.html'
], function(appModule, indexTemplate) {
    appModule.component('appIndex', {
        template: indexTemplate,
        controller: function() {
            var ctrl = this;
            ctrl.$onInit = function() {
                ctrl.write = "father's write";
            };
            ctrl.change = function() {
                ctrl.write = 1234;
            }
        }
    })
});