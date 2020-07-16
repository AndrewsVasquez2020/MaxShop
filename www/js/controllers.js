var firebaseConfig = {
    apiKey: "AIzaSyBEQchNvXca08lIzxdUj1948Iz3Xk5zelY",
    authDomain: "maxshop-14692.firebaseapp.com",
    databaseURL: "https://maxshop-14692.firebaseio.com",
    projectId: "maxshop-14692",
    storageBucket: "maxshop-14692.appspot.com",
    messagingSenderId: "496031797811",
    appId: "1:496031797811:web:1051daf9f72d354a6a0946",
    measurementId: "G-3SBXF90CKS"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  //base de datos
  var database = firebase.database();

angular.module('starter.controllers', [])

.controller("registroCtrl",function($scope){
  $scope.obtener = function(datos){
    firebase.auth().createUserWithEmailAndPassword(datos.email, datos.password).then(function a(y){
      swal("Se ingreso el correo");
        firebase.database().ref("/datos").set()({
          correo: datos.email
    })
    firebase.out().signout().then(function(){
      // sign-out successful
    }).catch(function(error){
      // An error.
    }); // hasta aqui
    }).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // ...
    });
  }
})

.controller('DashCtrl', function($scope) {})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('categoriasCtrl',function($scope){

})

.controller('loginCtrl',function($scope){
  
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
