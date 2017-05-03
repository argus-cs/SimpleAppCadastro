var app = angular.module('cadastroApp', ['ngMaterial']);
app.controller('cadastroCtrl', function($scope, $mdSidenav) {
  $scope.openLeftMenu = function() {
    $mdSidenav('left').toggle();
  };

  var imagePath = 'images/avatar.png';

  $scope.novoAluno = new Aluno({});

  $scope.alunos = todosAlunos();

  $scope.addAluno = function(){
    $scope.alunos.push($scope.novoAluno);
    $scope.novoAluno = new Aluno({});
  }

  function todosAlunos(){
    var lista = [
    new Aluno({face : imagePath, matricula: 201483728987, nome: 'Zoraide', email: 'zoraide@aluno.com', idade: 31, sexo: 'F'}),
    new Aluno({face : imagePath, matricula: 201483744437, nome: 'Argus', email: 'argus@aluno.com', idade: 21, sexo: 'M'}),
    new Aluno({face : imagePath, matricula: 201483231987, nome: 'hermanotel', email: 'hermanotel@aluno.com', idade: 41, sexo: 'M'}),
    new Aluno({face : imagePath, matricula: 201799847328, nome: 'Quaraguatatuba', email: 'quaraguatatuba@aluno.com', idade: 135, sexo: 'F'})
    ];
    return lista;
  }

  function Aluno(args){
    this.face = imagePath
    this.matricula = args.matricula;
    this.nome = args.nome;
    this.email = args.email;
    this.idade = args.idade;
    this.sexo = args.sexo;
  }

});
