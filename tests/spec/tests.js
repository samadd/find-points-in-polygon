/* global describe, it, expect, PointsInPolygonFinder  */
(function() {
    
    var testData = {
        squareArray: [[0,0], [10,0], [10,10], [0,10]],
        singlePointInSquare: [5,5],
        singlePointOutSquare: [5,15]
    };
    
    describe('FindPointsInPolygon', function() {
        
        describe('find', function() {
            it(
                'Should match a point within an array defining a square',
                function() {
                    var result = PointsInPolygonFinder.find(testData.squareArray, testData.singlePointInSquare);
                    expect(result).toEqual([testData.singlePointInSquare]);
                }
            );
            it(
                'Should match nothing an array defining a square does not contain point',
                function() {
                    var result = PointsInPolygonFinder.find(testData.squareArray, testData.singlePointOutSquare);
                    expect(result.length).toBe(0);
                }
            );
            it(
                'Should match a point within an array defining a square when given 2 points, one in and one out',
                function() {
                    var result = PointsInPolygonFinder.find(testData.squareArray, [testData.singlePointInSquare, testData.singlePointOutSquare]);
                    expect(result).toEqual([testData.singlePointInSquare]);
                }
            );
        });
        
    });
    
}());