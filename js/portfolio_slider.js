$(function(){
$("#elastic_grid_demo").elastic_grid({
	'hoverDirection': true,
	'hoverDelay': 0,
	'hoverInverse': false,
	'expandingSpeed': 500,
	'expandingHeight': 500,
	'items' :
		[
			{
			'title' : 'ConciAIR',
			'description'   : 'ConciAIR solves the problem of your hotel room always being either stifling hot or freezing cold upon arrival. It accomplishes this by bringing home-automation into the hotel room and  allowing you to adjust the temperature of your room through the app, not just for your initial arrival but also when returning from being out and about.',
			'thumbnail' : ['images/portfolio/small/1.jpg'],
			'large' : ['images/portfolio/large/1.jpg'],
			'button_list'   :
			[
			{ 'title':'Demo', 'url' : 'http://mark-smithtb.github.io/ConciAIR' },
			{ 'title':'Code', 'url':'https://github.com/mark-smithtb/final_project'}
			],
			'tags'  : ['All']
			},

			{
			'title' : 'Iron Topics',
			'description'   : 'Iron Topics is an app that was developed to suggest additional topic during the last three weeks of the Iron Yard Back End course. It is set up so that you can add topics and further rate and comment on those topics.',
			'thumbnail' : ['images/portfolio/small/2.jpg'],
			'large' : ['images/portfolio/large/2.jpg'],
			'button_list'   :
			[
			{ 'title':'Demo', 'url' : 'http://salty-cliffs-4328.herokuapp.com/' },
			{ 'title':'Code', 'url':'https://github.com/mark-smithtb/iron_topic'}
			],
			'tags'  : ['All']
			},

			{
			'title' : 'Iron News',
			'description'   : 'A clone of Hacker News using the Sinatra framework.',
			'thumbnail' : ['images/portfolio/small/3.jpg'],
			'large' : ['images/portfolio/large/3.jpg'],
			'button_list'   :
			[
			{ 'title':'Demo', 'url' : 'http://fierce-caverns-5256.herokuapp.com/news' },
			{ 'title':'Code', 'url':'https://github.com/mark-smithtb/iron_news'}
			],
			'tags'  : ['All']
			},




		]
	});
});
