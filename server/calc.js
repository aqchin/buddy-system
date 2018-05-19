function getDistance(lat1,lon1,lat2,lon2) {
  var R = 3959;
  var dLat = deg2rad(lat2-lat1);
  var dLon = deg2rad(lon2-lon1); 
  var a = 
    Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * 
    Math.sin(dLon/2) * Math.sin(dLon/2)
    ; 
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
  var d = R * c;
  return Math.ceil(d);
}

function deg2rad(deg) {
  return deg * (Math.PI/180)
}

const dist = getDistance(37.423965, -122.056387, 37.408116, -121.759242);

module.exports.getDistance = getDistance