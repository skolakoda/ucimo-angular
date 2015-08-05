// Code goes here

var iApp = angular.module("App", []);
            iApp.controller('TestController', function($scope)
            {                
                $scope.search=[];
                $scope.hotels = [
                    {
                        name: 'the taj hotel',
                        star: 5,
                        type: 'luxury',
                        price: 5675
                    },
                    {
                        name: 'vivanta Palace',
                        star: 5,
                        type: 'luxury',
                        price: 8670
                    },
                    {
                        name: 'aviary',
                        star: 4,
                        type: 'double suite',
                        price: 3000
                    },
                     {
                        name: 'dummy',
                        star: 4,
                        type: 'dummy',
                        price: 33333100
                    },
                    {
                        name: 'good guest',
                        star: 3,
                        type: 'double suite',
                        price: 3500
                    },
                    {
                        name: 'the ramada',
                        star: 3,
                        type: 'luxury',
                        price: 7500
                    }
                ];                
            });   