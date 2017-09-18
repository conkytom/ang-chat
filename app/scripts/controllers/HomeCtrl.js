(function() {
    function HomeCtrl(Room, $uibModal) {
        this.rooms = Room.all;


        this.newRoomButton = function(size, template) {

            $uibModal.open({
                animation: true,
                templateUrl: '/templates/modal.html',
                controller: 'NewRoomCtrl as newRoom'
            });
        };
    }

    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', '$uibModal', HomeCtrl]);
})();
