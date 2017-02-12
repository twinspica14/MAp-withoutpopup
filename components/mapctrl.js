(function(){



    "use strict";

    angular
         .module('StarterApp')
         .controller('MapCtrl', function($scope, $state,classifiedsFactory3, $http,$mdSidenav,$mdToast,$mdDialog, NgMap){


         	$scope.points= classifiedsFactory3.ref;
       
       $scope.points.$loaded().then(function(points){
        $scope.categories=getcategories($scope.points)
       });

//we need to store filter options as another array, to display options we use the below syntax, but to use filter we will use ghdhg.categories.lol ssomething like this
$scope.images = [
          {
        
       
         "categories":
          "Public"
          
        
       
        
      },
      {
       
       
        "categories":
          "Private"
          
        
       
      }
      ];













         	
 $scope.saveobjects1=function(p1){
     if(p1){
     $scope.points.push(p1);
     $scope.points.$add(p1);
     $scope.p1={};
     display("saved");
     $scope.clo();
 }
}

 
 $scope.navi=function(){
     $mdSidenav('left').open();


 }
 $scope.clo=function(){
     $mdSidenav('left').close();
     
 }

$scope.naviR=function(){
     $mdSidenav('right').open();


 }
 $scope.cloR=function(){
     $mdSidenav('right').close();
     
 }



 /*
$scope.editing=function(object){ //editclassified 
    var id= object.$id; //id var tskes id of current object
       $scope.object=$scope.objects.$getRecord(id);// so does thi
    $scope.value=true;
    $scope.navi();
    $scope.objects1 = $scope.object;//objects1 is ng-model
    $scope.objects.$save($scope.objects1);//objects1 now will havedats ehich will be passed to objects
    }


$scope.dele=function(event, object){ //this is how dialogue is made
    var confirm = $mdDialog.confirm()
    .title("plz don't kill me")
    .ok('fuck yeah')
    .cancel('leave it')
    .targetEvent(event); //after confirm only it will either delete orwill keep it
    $mdDialog.show(confirm).then(function() {
        $scope.objects.$remove(object); //only code required to delete the item
    }


)
};
    



$scope.finished=function(){ //saveEdit
    $scope.objects.$save($scope.object).then(function(){
    $scope.value=false;
    $scope.objects1={};
    display("finished editing");
    $scope.clo();
})
}
*/

function display(mssg){
    $mdToast.show(
             $mdToast.simple()
             .content(mssg)
             .position('top, right')
             .hideDelay(3000)


         )
}


function getcategories(points){
    var categories = [];
    angular.forEach(points, function(item) //forEach is inbuilt angular function
    {
        angular.forEach(item.categories, function(category){
            categories.push(category);


        });
    });
    return _.uniq(categories);
}

     


















})

     })()