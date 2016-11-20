'use strict';

/**
 * @ngdoc function
 * @name landingPageApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the landingPageApp
 */
angular.module('landingPageApp')
.controller('MainCtrl', function () {
    this.awesomeThings = [
        'HTML5 Boilerplate',
        'AngularJS',
        'Karma'
    ];
    angular.element('body').removeClass('invisible');
});

$(function(){
    $( "#draggable" )
        .draggable({
            containment: "body",
            scroll: false,
            handle: ".panel-heading"
        })
        .resizable({
            containment: "body",
            maxHeight: 450,
            minHeight: 300,
            minWidth: 400
        });
    $("#welcome").typed({
        strings: ['^2000 sudo bash coolest_couple_ever.sh --puppies^1500\n installing .^500 .^500 .^500 .^500 .^500 .^500 .^500 .^500 \n ready => ^1000 \n\n Welcome to Talley-Yarhouse.us! \n\n\n Please select from the following options:'],
        typeSpeed: 30,
        backDelay: 500,
        loop: false,
        // defaults to false for infinite loop
        loopCount: false,
        callback: function(){
            $('#links').slideDown(400, 'linear')
        }
    });
});