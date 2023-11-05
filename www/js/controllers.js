angular.module('starter.controllers',[])

.controller('MainCtrl', function($scope,$window,$state){
    $scope.doBack = function() {
        $window.history.back();
    };
})
.controller('NewsCtrl', function ($scope, $http, $state, $window) {
        $http.get("https://abata.sch.id/wp-json/wp/v2/posts")
            .then(function (response) {
                $scope.post = response.data;
            });
        $scope.doAbout = function () {
            $window.history.back();
        };
    })

.controller('DetailNewsCtrl', function ($scope, $http, $stateParams, $state, $window) {
        $http.get("https://abata.sch.id/wp-json/wp/v2/posts/" + $stateParams.id)
            .then(function (response) {
                $scope.post = response.data;
            });
        $scope.doAbout = function () {
            $window.history.back();
        };
    })
.controller('MapCtrl', function ($scope, $ionicLoading, $compile, $state, $window) {
        window.initMap = function () {
            var myLatlng = new google.maps.LatLng(-6.203133836512247, 106.75520136872423);

            var mapOptions = {
                center: myLatlng,
                zoom: 16,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            };
            var map = new google.maps.Map(document.getElementById("map"),
                mapOptions);

            var contentString = "<div><a ng-click ='clickTest()'>SDIT ABATA</a></div>";
            var compiled = $compile(contentString)($scope);

            var infowindow = new google.maps.InfoWindow({
                content: compiled[0]
            });

            var marker = new google.maps.Marker({
                position: myLatlng,
                map: map,
                title: 'SDIT ABATA'
            });

            google.maps.event.addListener(marker, 'click', function () {
                infowindow.open(map, marker);
            });

            $scope.map = map;
        }

        google.maps.event.addDomListener(window, 'load', initMap);
        initMap();
        $scope.doAbout = function () {
            $window.history.back(); 
        }
    })
    .controller('LoginCtrl', function ($scope, $ionicPopup, $http, $state, $ionicHistory) {
        var url = "http://localhost/api/";

        $scope.loginData = {};

        $scope.doLogin = function () {
            var adm_user = $scope.loginData.username;
            var adm_pass = $scope.loginData.userpass;

            if (adm_user && adm_pass) {
                str = url + "login.php?name=" + adm_user + "&pass=" + adm_pass;
                $http.get(str)
                    .success(function (response) {
                        if (response != '') {
                            $scope.u = response.records;

                            sessionStorage.setItem('login_status', true);
                            sessionStorage.setItem('login_id', $scope.u.userid);
                            sessionStorage.setItem('login_name', $scope.u.username);

                            $ionicHistory.nextViewOptions({
                                disableAnimate: true,
                                disableBack: true
                            })

                            $ionicPopup.alert({
                                title: 'Sukses',
                                template: 'Login Sukses'
                            })

                            $state.go('app.home', { id: $scope.u.userid }, { location: "replace", reload: true });
                        } else {
                            $ionicPopup.alert({
                                title: 'Error',
                                template: 'Username / Password Tidak Ditemukan'
                            })
                        }
                    })
            } else {
                $ionicPopup.alert({
                    title: 'Error',
                    template: 'Username/Password Salah'
                })
            }
        }
        $scope.id = sessionStorage.getItem('login_id');
        $scope.name = sessionStorage.getItem('login_name');

        $scope.jumMhs = function () {
            var jml_mhs = "";

            if (jml_mhs) {
                str = url + "login.php?hasil=" + jml_mhs;
                $http.get(str)
                    .success(function (response) {
                        $scope.u = response.records;
                        sessionStorage.setItem('jumlah_mhs', $scope.u.hasil);

                    })
            }
        }

        $scope.jmlMhs = sessionStorage.getItem('jumlah_mhs')

        $scope.doLogout = function () {
            sessionStorage.removeItem('login_status');
            sessionStorage.removeItem('login_id');
            sessionStorage.removeItem('login_name');

            $ionicHistory.nextViewOptions({
                disableAnimate: true,
                disableBack: true
            })

            $ionicPopup.alert({
                title: 'Sukses',
                template: 'Logout Dari Sistem'
            })

            $state.go('front', [], { location: "replace", reload: true });
        }


        $scope.logAdm = function () {
           
            $state.go('login', [], { location: "replace", reload: true });
        }

        $scope.logMhs = function () {
           
            $state.go('loginmhs', [], { location: "replace", reload: true });
        }
    })

