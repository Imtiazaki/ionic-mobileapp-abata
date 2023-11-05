// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic' , 'starter.controllers', 'starter.mahasiswa', 'starter.matakuliah', 'starter.nilai'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('gallery',{
     url: '/gallery',
      templateUrl: 'templates/gallery.html',
      controller: 'MainCtrl'
   })
    .state('profile',{
     url: '/profile',
      templateUrl: 'templates/profile.html',
      controller: 'MainCtrl'
   })
    .state('Social',{
     url: '/Social',
      templateUrl: 'templates/Social.html',
      controller: 'MainCtrl'
   })
    .state('detailnews',{
      url: '/detailnews/:id',
      templateUrl: 'templates/detailnews.html',
      controller: 'DetailNewsCtrl'
   })
    .state('news',{
     url: '/news',
      templateUrl: 'templates/news.html',
      controller: 'NewsCtrl'
   })
    .state('location',{
     url: '/location',
      templateUrl: 'templates/location.html',
      controller: 'MapCtrl'
   })
    .state('Extra',{
     url: '/extra',
      templateUrl: 'templates/extra.html',
      controller: 'MainCtrl'
   })
    .state('front',{
     url: '/front',
     templateUrl: 'templates/front.html'
   })
   .state('app', {
                url: '/app',
                abstract: true,
                templateUrl: 'templates/sidemenu.html'  
            })
            .state('app.home', {
                url: '/home',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/home.html',
                        controller: 'LoginCtrl'
                    }
                }
            })

            .state('app.mhs', {
                url: '/mhs',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/mhs.html',
                        controller: 'MhsCtrl'
                    }
                }
            })

            .state('app.mhs-add', {
                url: '/mhs-add',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/mhs-add.html',
                        controller: 'MhsCtrl'
                    }
                }
            })

            .state('app.mhs-update', {
                url: '/mhs-update/:Nim',
                cache: false,
                views: {
                    'menuContent': {
                        templateUrl: 'templates/mhs-update.html',
                        controller: 'MhsCtrl'
                    }
                }
            })

            .state('app.mtk', {
                url: '/mtk',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/mtk.html',
                        controller: 'MtkCtrl'
                    }
                }
            })

            .state('app.mtk-add', {
                url: '/mtk-add',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/mtk-add.html',
                        controller: 'MtkCtrl'
                    }
                }
            })

            .state('app.mtk-update', {
                url: '/mtk-update/:KDmtk',
                cache: false,
                views: {
                    'menuContent': {
                        templateUrl: 'templates/mtk-update.html',
                        controller: 'MtkCtrl'
                    }
                }
            })

            .state('app.nilai', {
                url: '/nilai',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/nilai.html',
                        controller: 'NilaiCtrl'
                    }
                }
            })

            .state('app.nilai-add', {
                url: '/nilai-add',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/nilai-add.html',
                        controller: 'NilaiCtrl'
                    }
                }
            })

            .state('app.nilai-update', {
                url: '/nilai-update/:NIM',
                cache: false,
                views: {
                    'menuContent': {
                        templateUrl: 'templates/nilai-update.html',
                        controller: 'NilaiCtrl'
                    }
                }
            })
            .state('login', {
                url: '/login',
                cache: false,
                controller: 'LoginCtrl',
                templateUrl: function () {
                    if (sessionStorage.getItem('login_status')) {
                        return 'app.home'
                    } else {
                        return 'templates/login.html'
                    }
                }
                
                
            })

            .state('awal', {
                url: '/awal',
                templateUrl: 'templates/awal.html',
                controller: 'LoginCtrl'
            })

            .state('loginmhs', {
                url: '/loginmhs',
                cache: false,
                controller: 'LoginMhsCtrl',
                templateUrl: function () {
                    if (sessionStorage.getItem('login_status')) {
                        return 'app2.homemhs'
                    } else {
                        return 'templates/loginmhs.html'
                    }
                }
            })

            .state('app2', {
                url: '/app2',
                abstract: true,
                templateUrl: 'templates/sidemenu2.html'
            })

            .state('app2.homemhs', {
                url: '/homemhs',
                views: {
                    'menuContent2': {
                        templateUrl: 'templates/homemhs.html',
                        controller: 'LoginMhsCtrl'
                    }
                }
            })

            .state('app2.profil-mhs', {
                url: '/profil-mhs',
                views: {
                    'menuContent2': {
                        templateUrl: 'templates/profil-mhs.html',
                        controller: 'LoginMhsCtrl'
                    }
                }
            })

            .state('app2.updatepw-mhs', {
                url: '/updatepw-mhs/:NIM',
                cache: false,
                views: {
                    'menuContent2': {
                        templateUrl: 'templates/updatepw-mhs.html',
                        controller: 'LoginMhsCtrl'
                    }
                }
            })
             .state('loginmnu', {
                url: '/loginmnu',
                templateUrl: 'templates/loginmnu.html',
                controller: 'LoginCtrl'
            })
   ;

  $urlRouterProvider.otherwise('/front');
})
