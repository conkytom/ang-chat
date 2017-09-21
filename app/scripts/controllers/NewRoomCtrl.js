(function() {
    function NewRoomCtrl($uibModalInstance, Room) {

        this.addRoom = function() {
//        console.log(this.roomName);
                Room.add(this.roomName);
                $uibModalInstance.close();
        };

        this.cancel = function() {
            $uibModalInstance.dismiss('cancel');
        };

    }

    angular
        .module('blocChat')
        .controller('NewRoomCtrl', ['$uibModalInstance', 'Room', NewRoomCtrl])
})();
