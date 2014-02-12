function MyController($scope){
	//best practices to create an object and refer to properties of the object in the view
	// not the object itself
	// so here we create a clock object and reference clock.now instead of using just clock
	$scope.clock = {
		now: new Date()
	};
	var updateClock = function(){
		$scope.clock.now = new Date();
	};
	setInterval(function(){
		$scope.$apply(updateClock);
	}, 1000);
	updateClock();
};