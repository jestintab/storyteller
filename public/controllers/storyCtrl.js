angular.module('storyCtrl',['storyService'])

.controller('StoryController',function(Story){

	var vm = this;

	Story.allStory()
		.success(function(data){
			vm.stories = data;
		})

		vm.createStory = function(){
			Story.create(vm.storyData)
				.success(function(data){
					vm.storyData = '';

					vm.message = data.message; 
					
					vm.stories.push(data);

				});
		};


})