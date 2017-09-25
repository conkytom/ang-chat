(function() {
    function BlocChatCookies($cookies, $uibModal) {
        var currentUser = $cookies.get('blocChatCurrentUser');
        if (!currentUser || currentUser === ''){
            $uibModal.open({
                animation: true,
                templateUrl: '/templates/username.html',
                controller: 'UsernameCtrl as usernameCtrl'
            });
        }
    }

    angular
        .module('blocChat')
        .run(['$cookies', '$uibModal', BlocChatCookies]);
})();
