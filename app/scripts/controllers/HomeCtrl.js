(function() {
    function HomeCtrl(Room, Message, $uibModal, $cookies) {
//        var home = this;
        this.rooms = Room.all;
        this.currentRoom = null;
        this.currentUser = $cookies.get('blocChatCurrentUser');

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
        };

        this.sendMessage = function() {
            Message.send(this.message, this.currentUser, this.currentRoom.$id);
        };
    }

    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', 'Message', '$uibModal', '$cookies', HomeCtrl]);
})();
