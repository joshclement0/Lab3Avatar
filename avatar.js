angular.module('app', [])
    .controller('mainCtrl', mainCtrl)
    .directive('avatar', avatarDirective);

function mainCtrl($scope) {
    $scope.users = [];
    $scope.addNew = function(user) {
        $scope.users.push({
            name: user.name,
            avatarUrl: user.url
        }); /* [1] */

        user.name = ''; /* [2] */
        user.url = ''; /* [2] */
    };
}

function avatarDirective() {
    return {
        scope: {
            user: '=' /* [1] */
        },
        restrict: 'E',
        /* [2] */
        replace: 'true',
        template: (
            '<div class="Avatar">' +
            '<img ng-src="{{user.avatarUrl}}" />' +
            '<h4>{{user.name}}</h4>' +
            '</div>'
        ),
        /* [3] */
        link: link
    };

    function link(scope) { /* [4] */
        if (!scope.user.avatarUrl) {
            var defaultpics=['https://www.drupal.org/files/issues/default-avatar.png',"https://images.ecosia.org/WIalyfYW9Ay2lFYnFefGMzouyTQ=/0x390/smart/http%3A%2F%2Fcdn.onlinewebfonts.com%2Fsvg%2Fimg_504570.png","https://images.ecosia.org/k-wbsn4QLWZL9JkLjkt7QODAka4=/0x390/smart/https%3A%2F%2Fi.stack.imgur.com%2Fqwf7L.png","https://images.ecosia.org/SDR6u84d1r1-JEh-zpISTvu6W8U=/0x390/smart/https%3A%2F%2Fdiscordapp.com%2Fassets%2Fdd4dbc0016779df1378e7812eabaa04d.png","https://tse4.mm.bing.net/th?id=OIP.UxADOQ7o-poM87f7w29ZYAHaHa&pid=Api","https://images.ecosia.org/9PzGsZ7WnnPtBVHEzp-NLDcvwSQ=/0x390/smart/http%3A%2F%2F2.bp.blogspot.com%2F_JBHfzEovWs8%2FS8X4Ctks4HI%2FAAAAAAAAAP0%2Fmolj8O02slM%2Fs1600%2Fpope-for-facebook.jpg","https://images.ecosia.org/JdiW5SawQVGi4YlO_ZwHdl7lAZU=/0x390/smart/http%3A%2F%2Fi66.tinypic.com%2F2r43ptd.png","https://tse1.mm.bing.net/th?id=OIP.HxVB6227Q-CXvCnCYrv7iQHaHa&pid=Api"]
            scope.user.avatarUrl = defaultpics[Math.floor(Math.random() * Math.floor(defaultpics.length))]
        }
    }

}
