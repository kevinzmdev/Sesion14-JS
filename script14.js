

let app = angular.module("myApp", [])

app.controller("myCtrl", function ($scope) {
    $scope.horas = 0
    $scope.tarifa = 0

    $scope.calcularTarifa = function () {
        return $scope.horas * $scope.tarifa
    }

    $scope.calcularDescuento = function () {
        $scope.descuento = 0
        if ($scope.calcularTarifa() <= 500) {
            $scope.descuento = 0
            return $scope.calcularTarifa() * 0.00

        }
        else if ($scope.calcularTarifa() <= 1000) {
            $scope.descuento = 2
            return $scope.calcularTarifa() * 0.02

        } else if ($scope.calcularTarifa() <= 4000) {
            $scope.descuento = 8
            return $scope.calcularTarifa() * 0.08

        }
        else if ($scope.calcularTarifa() <= 8000) {
            $scope.descuento = 15
            return $scope.calcularTarifa() * 0.15

        }
        else if ($scope.calcularTarifa() <= 10000) {
            $scope.descuento = 21
            return $scope.calcularTarifa() * 0.21

        }
        else if ($scope.calcularTarifa() >= 10001) {
            $scope.descuento = 30
            return $scope.calcularTarifa() * 0.30

        }

        else {
            return 0
        }
    }

    $scope.Pago = function () {
        return $scope.calcularTarifa() - $scope.calcularDescuento()

    }
})
