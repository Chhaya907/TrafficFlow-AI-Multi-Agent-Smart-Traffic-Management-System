async function getRoute(source, destination) {

  return {
    source,
    destination,
    distance: "15 km",
    duration: "30 minutes"
  };

}

module.exports = getRoute;