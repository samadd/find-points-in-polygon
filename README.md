# find-points-in-polygon
Javascript implementation of simple algorithm to determine which points reside within a given closed polygon. Based on the [PNPOLY algorithm](https://www.ecse.rpi.edu/Homepages/wrf/Research/Short_Notes/pnpoly.html). 

## How do I use this?
A PointsInPolygonFinder interface is exposed on the global window object.

At present this has only one method: find(polygon, points).

1. 'points' can either be a 1d array with x,y or lng,lat coordinates, or it can be a 2d array representing a list of points to test.
2. 'polygon' can either be a GeoJSON Polygon geometry, or a 2d array of the form that would be found in the coordinates property of a GeoJSON polygon. The method returns a 2d array representing a list of the matched points.

## TODO
* Support GeoJSON multipolygons.
* ES6 support
* Support more modular injection methods - ie something better than just adding it to window.
* Unit tests