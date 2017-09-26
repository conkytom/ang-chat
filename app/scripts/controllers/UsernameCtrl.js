(function() {
    function UsernameCtrl($uibModalInstance, $cookies) {

        this.addUsername = function() {

            $cookies.put('blocChatCurrentUser', this.username);
            $uibModalInstance.close();
            console.log(document.cookie);
        };
    }

    angular
        .module('blocChat')
        .controller('UsernameCtrl', ['$uibModalInstance', '$cookies', UsernameCtrl]);
})();
