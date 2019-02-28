var map;
var initialCenter;
var initialZoom;
var elevationService;
var geocoder;

function init() {
    var mapOptions = {
        center: new google.maps.LatLng(52.373922, -3.427734),
        zoom: 8,
        mapTypeId: google.maps.MapTypeId.TERRAIN,
        mapTypeControl: false
    };

    map = new google.maps.Map(document.getElementById("mapDiv"), mapOptions);

    initialCenter = mapOptions.center;
    initialZoom = mapOptions.zoom;

    addButtons();
    addGroundOverlay();
    addMarkers();
    addPolyline();
    addEditablePolygon();
    addDraggableRectangle();
    addCircle();
    addKmlLayer();
    addGeoJSONDataLayer();
    addElevationService();
    addGeocodingService();
    addGoToInitialExtent();
    addShowCoords();
}
google.maps.event.addDomListener(window, "load", init);
