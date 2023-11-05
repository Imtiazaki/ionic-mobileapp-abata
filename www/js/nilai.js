angular.module('starter.nilai', [])

    .controller('NilaiCtrl', function ($scope, $stateParams, $http, $state, $ionicPopup) {
        var url = "http://localhost/api/";

        $scope.nilaiData = {};

        $scope.tambahNilai = function () {
            var nilai_nim = $scope.nilaiData.nilai_nim;
            var nilai_kdmtk = $scope.nilaiData.nilai_kdmtk;
            var nilai_absen = $scope.nilaiData.nilai_absen;
            var nilai_uts = $scope.nilaiData.nilai_uts;
            var nilai_uas = $scope.nilaiData.nilai_uas;

            if (nilai_nim != undefined && nilai_kdmtk != undefined && nilai_absen != undefined && nilai_uts != undefined && nilai_uas != undefined) {
                str = url + "tambah_nilai.php?nim=" + nilai_nim + "&kdmtk=" + nilai_kdmtk + "&absen=" + nilai_absen + "&uts=" + nilai_uts + "&uas=" + nilai_uas ;
                $http.get(str)
                    .success(function (response) {
                        if (response == true) {
                            $ionicPopup.alert({
                                title: 'Sukses',
                                template: 'Data Berhasil Diinput'
                            })
                            $state.go('app.nilai', [], { location: "replace", reload: true });
                        } else {

                            $ionicPopup.alert({
                                title: 'Error',
                                template: 'Data Gagal Diinput'
                            })
                            $state.go('app.nilai-add', [], { location: "replace", reload: true });
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

        $http.get(url + "list_nilai.php")
            .success(function (response) {
                $scope.showNilai = response.records;
            });
        $scope.delNilai = function (id) {
            if (id) {
                $str = url + "delete_nilai.php?id=" + id;
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
                        $state.go('app.nilai', [], { location: "replace", reload: true });
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

        $http.get(url + "nilai_update.php?nim=" + $stateParams.NIM)
            .success(function (response) {
                $scope.nilData = response.records;
            })

        $scope.updateNilai = function () {
            var nilai_nim = $scope.nilData.nim;
            var nilai_kdmtk = $scope.nilData.kdmtk;
            var nilai_absen = $scope.nilData.absen;
            var nilai_uts = $scope.nilData.uts;
            var nilai_uas = $scope.nilData.uas;

            if (nilai_nim && nilai_kdmtk != undefined && nilai_absen != undefined && nilai_uts != undefined && nilai_uas != undefined) {
                $str = url + "nilai_ubah.php?absen=" + nilai_absen + "&uts=" + nilai_uts + "&uas=" + nilai_uas + "&nim=" + nilai_nim + "&kdmtk=" + nilai_kdmtk;
                $http.get($str)
                    .success(function (response) {
                        if (response == true) {
                            $ionicPopup.alert({
                                title: 'Sukses',
                                template: 'Data Berhasi Diupdate'
                            })
                            $state.go('app.nilai', [], { location: "replace", reloade: true });
                        } else {
                            $ionicPopup.alert({
                                title: 'Error',
                                template: 'Data Gagal Diupdate'
                            })
                            $state.go('app.nilai-update', [], { location: "replace", reloade: true });
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
