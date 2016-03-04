/* global window */
(function (expose) {
    'use strict';
    
    function testCondition(testX, testY, thisPointX, thisPointY, nextPointX, nextPointY) {
        return ((thisPointY > testY) !== (nextPointY > testY)) && (testX < (nextPointX - thisPointX) * (testY - thisPointY) / (nextPointY - thisPointY) + thisPointX);
    }
    
    function pointsFilter(polygon) {
        var numVert = polygon.length;
        function PolyMadras(point) {
            var result = false, testX = point[0], testY = point[1], i, nextVert;
            for (i = 0, nextVert = numVert - 1; i < numVert; nextVert = i++) {
                if (testCondition(testX, testY, polygon[i][0], polygon[i][1], polygon[nextVert][0], polygon[nextVert][1])) {
                    result = !result;
                }
            }
            return result;
        }
        return PolyMadras;
    }
    
    function findPointsInPolygon(polygon, points) {
        return points.filter(
            pointsFilter(polygon)
        );
    }
    
    function interpretPolygonInput(data) {
        var polygon;
        if (Array.isArray(data)) {
            polygon = data;
        } else if (data.type === "Polygon") {
            polygon = data.coordinates;
        }
        return polygon;
    }
    function interpretPointInput(data) {
        if (data[0][0] === undefined) {
            return [data];
        } else {
            return data;
        }
    }
    
    expose.PointsInPolygonFinder = {
        /**
         * [[Description]]
         * @param   {Object || Array} polygon : either a GeoJSON Polygon geometry, or a 2d array as per GeoJSON Polygon geometry coordinates ([lng, lat] if lng/lat, or just [x,y])
         * @param   {Array[Array]} points  : either 1d 2 element array of [lng,lat] or [x,y], or 2d array containing list of such
         * @returns {Array} : list of points [x,y] or [lng,lat] depending on what was passed in.
         */
        
        find: function (polygon, points) {
            return findPointsInPolygon(interpretPolygonInput(polygon), interpretPointInput(points));
        }
    };
    
}(window));