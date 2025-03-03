The database is split into three schemas: one representing users (professors/students), one representing listings, and one representing universities. All of this is probably going to end up modified down the line

# Users (userModel.js)

`_id`: unique identifier for users, PRIMARY KEY  
`username`: unique required string  
`password`: required string  
`role`: required string, either Student or Professor, defaults to student  
`university`: an optional reference to a university database object  
`listings`: a list of references to listings database objects created by a given user

# Listings (listingModel.js)

`_listingUser`: a required reference to the user database object that created the listing, PRIMARY KEY
`title`: required string  
`description`: required string  
`price`: required number  
`date`: date of listing, defaults to date of creation  
`universitySpecific`: boolean to select whether a listing is university specific, defaults to false
`university`: optional reference to a university object if universitySpecific is true  
`localPickup`: boolean to select if a listing is available for local pickup

> Note: validation must ensure that university is initialized if universitySpecific or localPickup are true. This should fetch the \_listingUser and use their associated university as the object. localPickupLocation should default to the university's location and only be initialized if localPickup is true.

# Universities (universityModel.js)

`_name`: a required and unique string for the university's name, PRIMARY KEY  
`location`: required string  
`description`: required string  
`students`: a reference to all student database objects that have this university set as their current university  
`professors`: a reference to all professor database objects that have this university set as their current university  
`universityListings`: a reference to all listings objects that are specific to this university
