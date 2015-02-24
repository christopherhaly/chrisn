var app = angular.module('app', [ 'ui.bootstrap', 'ngTouch', 'ui.grid']);
 
app.controller('MainCtrl', [function () {
 
    var self = this;

    self.callLog = function (message, message2, message3) {
        self.myData.push({
        "firstName": message,
        "lastName": message2,
        "company": message3,
        "employed": false
        })



    };

    self.delete = function () {
        self.myData.pop();
    }

    self.myData = [
    {
        "firstName": "Cox",
        "lastName": "Carney",
        "company": "Enormo",
        "employed": true
    },
    {
        "firstName": "Lorraine",
        "lastName": "Wise",
        "company": "Comveyer",
        "employed": false
    },
    {
        "firstName": "Nancy",
        "lastName": "Waters",
        "company": "Fuelton",
        "employed": false
    }
];
}]);