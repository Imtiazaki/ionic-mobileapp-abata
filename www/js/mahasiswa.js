angular.module('starter.mahasiswa', [])

    .controller('MhsCtrl', function ($scope, $stateParams, $http, $state, $ionicPopup) {
        var url = "http://localhost/api/";

        $scope.mahasiswaData = {};

        $scope.tambahMhs = function () {
            var mhs_nim = $scope.mahasiswaData.mhs_nim;
            var mhs_nama = $scope.mahasiswaData.mhs_nama;
            var mhs_alamat = $scope.mahasiswaData.mhs_alamat;
            var mhs_jenkel = $scope.mahasiswaData.mhs_jenkel;  

            if (mhs_nim != undefined && mhs_nama != undefined && mhs_alamat != undefined && mhs_jenkel != undefined) {
                str = url + "tambah_mhs.php?nim=" + mhs_nim + "&nama=" + mhs_nama + "&alamat=" + mhs_alamat + "&jenkel=" + mhs_jenkel;
                $http.get(str)
                    .success(function (response) {
                        if (response == true) {
                            $ionicPopup.alert({
                                title: 'Sukses',
                                template: 'Data Berhasil Diinput'
                            })
                            $state.go('app.mhs', [], { location: "replace", reload: true });
                        } else {
                            
                                $ionicPopup.alert({
                                    title: 'Error',
                                    template: 'Data Gagal Diinput'
                                })
                                $state.go('app.mhs-add', [], { location: "replace", reload: true });
                        }

                        }) .error(function () {
                            $ionicPopup.alert({
                                title: 'Error',
                                template: 'Ada Kesalahan'
                            })
                        })
            } else {
                $ionicPopup.alert({
                    title: 'Error',
                    template: 'Mohon Isi Semua Data'
                })
            }        

        }
        $http.get(url + "list_mhs.php")
            .success(function (response) {
                $scope.showMahasiswa = response.records;
            });



        $scope.delUser = function (id) {
            if (id) {
                $str = url + "delete_mhs.php?id=" + id;
                $http.get($str)
                    .success(function (response) {
                        if (response == true) {
                            $ionicPopup.alert({
                                title: 'Sukses',
                                template: 'Data Berhasil Didelete'
                            })
                        } else {
                            $ionicPopup.alert({
                                title: 'Error',
                                template: 'Data Gagal Didelete'
                            })
                        }
                        $state.go('app.mhs', [], { location: "replace", reload: true });
                    }).error(function () {
                        $ionicPopup.alert({
                            title: 'Error',
                            template: 'Ada Yang Beda'
                        })
                    })
            } else {
                $ionicPopup.alert({
                    title: 'Error',
                    template: 'Ada Kesalahan'
                })
            }
        }

        $http.get(url + "mhs_update.php?nim=" + $stateParams.Nim)
            .success(function (response) {
                $scope.mhsData = response.records;
            })

        $scope.updateMhs = function () {
            var mhs_nim = $scope.mhsData.nim;
            var mhs_nama = $scope.mhsData.nama;
            var mhs_alamat = $scope.mhsData.alamat;
            var mhs_jenkel = $scope.mhsData.jenkel; 

            if (mhs_nim && mhs_nama != undefined && mhs_alamat != undefined && mhs_jenkel != undefined) {
                $str = url + "mhs_ubah.php?nama=" + mhs_nama + "&alamat=" + mhs_alamat + "&jenkel=" + mhs_jenkel + "&nim=" + mhs_nim;
                $http.get($str)
                    .success(function (response) {
                        if (response == true) {
                            $ionicPopup.alert({
                                title: 'Sukses',
                                template : 'Data Berhasi Diupdate'
                            })
                            $state.go('app.mhs', [], { location: "replace", reloade: true });
                        } else {
                            $ionicPopup.alert({
                                title: 'Error',
                                template: 'Data Gagal Diupdate'
                            })
                            $state.go('app.mhs-update', [], { location: "replace", reloade: true });
                        }
                    }).error(function () {
                        $ionicPopup.alert({
                            title: 'Error',
                            template: 'Ada Kesalahan'
                        })
                    })
            } else {
                $ionicPopup.alert({
                    title: 'Error',
                    template: 'Mohon Lengkapi Data'
                })
            }
        }
    })

    .controller('LoginMhsCtrl', function ($scope, $stateParams, $ionicPopup, $http, $state, $ionicHistory) {

        var url = "http://localhost/api/";
        $scope.loginMhs = {};

        $scope.doLoginMhs = function () {
            var mahasiswa_nim = $scope.loginMhs.mahasiswa_nim;
            var mahasiswa_pass = $scope.loginMhs.mahasiswa_pass;

            if (mahasiswa_nim && mahasiswa_pass) {
                str = url + "mahasiswalogin.php?nim=" + mahasiswa_nim + "&pass=" + mahasiswa_pass;
                $http.get(str)
                    .success(function (response) {
                        if (response != '') {
                            $scope.k = response.records;

                            sessionStorage.setItem('login_status', true);
                            sessionStorage.setItem('login_nim', $scope.k.nim);
                            sessionStorage.setItem('login_nama', $scope.k.nama);
                            sessionStorage.setItem('login_alamat', $scope.k.alamat);
                            sessionStorage.setItem('login_jenkel', $scope.k.jenkel);

                            $ionicHistory.nextViewOptions({
                                disableAnimate: true,
                                disableBack: true
                            })

                            $ionicPopup.alert({
                                title: 'Sukses',
                                template: 'Login Sukses'
                            })
                            $state.go('app2.homemhs', { nim: $scope.k.nim }, { location: "replace", reload: true });
                        } else {
                            $ionicPopup.alert({
                                title: 'Error',
                                template: 'Username/Password Salah'
                            })
                        }
                    })
            } else {
                $ionicPopup.alert({
                    title: 'Error',
                    template: 'Mohon Isi Semua Data'
                })
            }
        }

        $scope.id = sessionStorage.getItem('login_nim');
        $scope.name = sessionStorage.getItem('login_nama');
        $scope.alamat = sessionStorage.getItem('login_alamat');
        $scope.jenkel = sessionStorage.getItem('login_jenkel');

        $scope.doLogoutMhs = function () {
            sessionStorage.removeItem('login_status');
            sessionStorage.removeItem('login_nim');
            sessionStorage.removeItem('login_nama');
            sessionStorage.removeItem('login_alamat');
            sessionStorage.removeItem('login_jenkel');

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

        $http.get(url + "mahasiswaprof_update.php?nim=" + $stateParams.NIM)
            .success(function (response) {
                $scope.mhsUpdate = response.records;
            });

        $scope.PassMhs = function () {
            var mahasiswa_nim = $scope.mhsUpdate.nim;
            var mahasiswa_nama = $scope.mhsUpdate.nama;
            var mahasiswa_pass = $scope.mhsUpdate.pass;

            if (mahasiswa_nim && mahasiswa_nama && mahasiswa_pass != undefined) {
                $str = url + "mahasiswaprof_ubah.php?pw=" + mahasiswa_pass + "&nim=" + mahasiswa_nim + "&nama=" + mahasiswa_nama;
                $http.get($str)
                    .success(function (response) {
                        if (response == true) {
                            $ionicPopup.alert({
                                title: 'Sukses',
                                template: 'Data Berhasil Diupdate'
                            })


                        } else {
                            $ionicPopup.alert({
                                title: 'Error',
                                template: 'Data Gagal Diupdate'
                            })
                        }
                    }).error(function () {
                        $ionicPopup.alert({
                            title: 'Error',
                            template: 'Ada Kesalahan'
                        })
                    })
            } else {
                $ionicPopup.alert({
                    title: 'Error',
                    template: 'Mohon Isi Semua Data'
                })
            }
        }


    })
