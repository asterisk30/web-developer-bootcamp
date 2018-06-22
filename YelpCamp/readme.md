# YelpCamp

## Landing page

Landing page will have all the campgrounds listed

## Campground

Each Campground will have a name and an image

## Layout

Need to add header and footer and bootstrap styling

## RESTful Routes

|	name	|	url	|	request	|	desc	|
|	-------------	|	-------------	|	-------------	|	-------------	|
|	INDEX	|	/campground	|	GET	|	display a list of all campgrounds	|
|	NEW	|	/campgroundnew	|	GET	|	display a form to make new campground	|
|	CREATE	|	/campground	|	POST	|	add new campground to DB	|
|	SHOW	|	/campground/:id	|	GET	|	display info about one specific campground	|
|	Edit	|	/campground/:id/edit	|	GET	|	display edit form for one campground	|
|	Update	|	/campground/:id	|	PUT	|	update a particular campground, then redirect to somewhere else	|
|	Destroy	|	/campground/:id	|	DELETE	|	delete a particular campground, then redirect to somewhere else	|
