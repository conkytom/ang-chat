(function () {
    function Room($firebaseArray) {
        var Room = {};
        var ref = firebase.database().ref().child("rooms");
        var rooms = $firebaseArray(ref);

        //puts firebase arrays in room object to be called on by angular
        Room.all = rooms;

        //adds firebase array
        Room.add = function(room) {
            rooms.$add(room);
        }

        return Room;
    }

    angular
        .module('blocChat')
        .factory('Room', ['$firebaseArray', Room])
})();
