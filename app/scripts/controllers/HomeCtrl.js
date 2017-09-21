(function() {
    function HomeCtrl(Room, Message, $uibModal) {
//        var home = this;
        this.rooms = Room.all;
        this.currentRoom = null;

        this.newRoomButton = function(size, template) {

            $uibModal.open({
                animation: true,
                templateUrl: '/templates/modal.html',
                controller: 'NewRoomCtrl as newRoom'
            });
        };

        this.setCurrentRoom = function(room) {
            this.currentRoom = room;
            this.messages = Message.getByRoomId(this.currentRoom.$id);
        }
    }

    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', 'Message', '$uibModal', HomeCtrl]);
})();
