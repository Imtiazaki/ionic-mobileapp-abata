angular.module('starter.matakuliah', [])

    .controller('MtkCtrl', function ($scope, $stateParams, $http, $state, $ionicPopup) {
        var url = "http://localhost/api/";

        $scope.matakuliahData = {};

        $scope.tambahMtk = function () {
            var mtk_kd = $scope.matakuliahData.mtk_kdmtk;
            var mtk_nama = $scope.matakuliahData.mtk_namamtk;
            var mtk_sks = $scope.matakuliahData.mtk_sks;

            if (mtk_kd != undefined && mtk_nama != undefined && mtk_sks != undefined) {
                str = url + "tambah_mtk.php?kdmtk=" + mtk_kd + "&namamtk=" + mtk_nama + "&sks=" + mtk_sks;
                $http.get(str)
                    .success(function (response) {
                        if (response == true) {
                            $ionicPopup.alert({
                                title: 'Sukses',
                                template: 'Data Berhasil Diinput'
                            })
                            $state.go('app.mtk', [], { location: "replace", reload: true });
                        } else {

                            $ionicPopup.alert({
                                title: 'Error',
                                template: 'Data Gagal Diinput'
                            })
                            $state.go('app.mtk-add', [], { location: "replace", reload: true });
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


        $http.get(url + "list_mtk.php")
            .success(function (response) {
                $scope.showMatakuliah = response.records;
            });

        $http.get(url + "jml_mtk.php")
            .success(function (response) {
                $scope.jumlah_mtk = response.records;
            });

        $scope.delMtk = function (kdmtk) {
            if (kdmtk) {
                $str = url + "delete_mtk.php?kdmtk = " + kdmtk;
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
                        $state.go('app.mtk', [], { location: "replace", reload: true });
                    }).error(function () {
                        $ionicPopup.alert({
                            title: 'Error',
                            template: 'Ada Salah'
                        })
                    })
            } else {
                $ionicPopup.alert({
                    title: 'Error',
                    template: 'Ada Kesalahan'
                })
            }
        }
        

        $http.get(url + "mtk_update.php?kdmtk=" + $stateParams.KDmtk)
            .success(function (response) {
                $scope.mtkData = response.records;
            });

        $scope.updateMtk = function () {

            var mtk_kd = $scope.mtkData.kdmtk;
            var mtk_nama = $scope.mtkData.namamtk;
            var mtk_sks = $scope.mtkData.sks;

            if (mtk_kd && mtk_nama != undefined && mtk_sks != undefined) {
                $str = url + "mtk_ubah.php?namamtk=" + mtk_nama + "&sks=" + mtk_sks + "&kdmtk=" + mtk_kd;

                $http.get($str)
                    .success(function (response) {
                        if (response == true) {
                            $ionicPopup.alert({
                                title: 'Sukses',
                                template: 'Data Berhasil Diinput'
                            })
                            $state.go('app.mtk', [], { location: "replace", reload: true });
                        } else {

                            $ionicPopup.alert({
                                title: 'Error',
                                template: 'Data Gagal Diinput'
                            })
                            $state.go('app.mtk-add', [], { location: "replace", reload: true });
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