var Package = {
  weight: function() {
    return this.weightAmount * 2; 
  },
  distance: function() {
    return ((this.distanceAmount / 500) * 5); 
  },

  price: function() {
    return ( this.weight() + this.distance());
  }
};


$(document).ready(function() {
  $('form').submit(function(event) {
    event.preventDefault();

    var inputWeight = parseInt($("#weight").val());
    var inputDistance = parseInt($("#distance").val());

    var newPrice = Object.create(Package);
    newPrice.weight = inputWeight;
    newPrice.distance = inputDistance;

    var totalPrice = inputWeight.weight() + inputDistance.distance();
    $('#price2').text(totalPrice);
  });
});
