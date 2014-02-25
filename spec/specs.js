describe('Package', function() {
  describe('weight', function() {
    it('should return 2 dollar per pound per package.', function() {
      var testWeight = Object.create(Package);
      testWeight.weightAmount = 50;
      testWeight.weight().should.equal(100);
    });
    describe('distance', function() {
      it('should return the price per mile', function() {
        var testDistance = Object.create(Package);
        testDistance.distanceAmount = 1000;
        testDistance.distance().should.equal(10);
       });
    });
    describe('price', function() {
      it('should return the price', function() {
        var testPrice = Object.create(Package);
        testPrice.distanceAmount = 1000;
        testPrice.weightAmount = 50;
        testPrice.price().should.equal(110);
       });  
    });

  });
});
