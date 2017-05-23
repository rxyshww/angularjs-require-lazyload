/**
 * Created by black.ren on 2017/5/16.
 */

define([
    '../app.module',
    'text!write/write-template.html'
], function(appModule, writeTemplate) {
    appModule.component('appWrite', {
        template: writeTemplate,
        bindings: {
          write: '<'
        },
        controller: function() {
            var ctrl = this;
           /* ctrl.$onChanges = function() {
                alert(3243)
            }*/
        }
    })
});