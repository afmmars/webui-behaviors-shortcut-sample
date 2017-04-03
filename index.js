'use strict';

var globalShorcuts = [
    {
        shortcut: 'shift+alt+g',
        href: 'http:\\google.com'
    }
];

function configureApp(pipShortcutsProvider) {
    pipShortcutsProvider.globalShortcuts = globalShorcuts;
    pipShortcutsProvider.localShortcuts = [];
}

function pipSampleController($scope, $timeout, pipShortcuts) {
    let localShortcuts = [];

    localShortcuts.push({ shortcut: 'ctrl+m', keypress: showAlert });
    localShortcuts.push({ shortcut: 'shift+q', keypress: saveTextArea, options: { Target: 'textarea_shortcut' } });
    localShortcuts.push({ shortcut: 'alt+s', keypress: focusedButton });

    pipShortcuts.localShortcuts = localShortcuts;

    $scope.keyEvent = function ($event) {
         console.log('keyEvent Textarea2 are cleared');
        $scope.onClear();
        showResult('Textarea2 are cleared.');
    }
    
    function showResult(text) {
        $timeout( function () {
            $scope.result = text;
        });
    }

    function focusedButton() {
        console.log('focusedButton');
        let el = angular.element(document.getElementById('clearedИutton'));
        if (el) {
            console.log('focusedButton1 Button focused', el);
            el.focus();
            showResult('Button focused.');
        }
    }

    function showAlert() {
        console.log('showAlert Alert showed');
        alert('Pressed ctrl+m');
        showResult('Alert showed.');
    }

    function saveTextArea() {
        console.log('saveTextArea Text in textarea1 is saved');
        showResult('Text in textarea1 is saved.');
    }

    $scope.onClear = function () {
        $scope.text2 = '';
    }
}


angular
    .module('appBehaviors', [
        'ngMaterial',

        'pipBehaviors',
    ])
    .config(configureApp)
    .controller('pipSampleController', pipSampleController);