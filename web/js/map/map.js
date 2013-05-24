function map_clone() {
	
	/*
	 * Initialize left map
	 */
    
    // Create the map using the specified DOM element
    map_a = new OpenLayers.Map("map_a");
    // Add a WMS layer
    var wms = new OpenLayers.Layer.WMS("WMS Ground", "http://vmap0.tiles.osgeo.org/wms/vmap0",
    {
        layers: 'coastline_01'
    },
    {
        isBaseLayer: true
    });
    map_a.addLayer(wms);
    
    // Add a WMS layer
    var topo = new OpenLayers.Layer.WMS("WMS Ground", "http://vmap0.tiles.osgeo.org/wms/vmap0",
    {
        layers: "ground_01"
    },
    {
        opacity: 0.5,
        isBaseLayer: false
    });
    map_a.addLayer(topo);
    // Add LayerSwitcher control
    map_a.addControl(new OpenLayers.Control.LayerSwitcher());
    
    // Set view to zoom maximum map extent
    // NOTE: This will fail if there is no base layer defined
    map_a.setCenter(new OpenLayers.LonLat(-100, 40), 3);
    
    
    /*
     * Initialize right map
     */
    
    /*// Create the map using the specified DOM element
    map_b = new OpenLayers.Map("map_b");
    // Add a WMS layer
    var wms = new OpenLayers.Layer.WMS("WMS Coastline", "http://vmap0.tiles.osgeo.org/wms/vmap0",
    {
        layers: 'coastline_01'
    });
    map_b.addLayer(wms);
    // Add a WMS layer
    var topo = new OpenLayers.Layer.WMS("WMS Ground", "http://vmap0.tiles.osgeo.org/wms/vmap0",
    {
        layers: "ground_01"
    });
    map_b.addLayer(topo);
    // Add LayerSwitcher control
    map_b.addControl(new OpenLayers.Control.LayerSwitcher());
           
    // Set view to zoom maximum map extent
    // NOTE: This will fail if there is no base layer defined
    map_b.setCenter(new OpenLayers.LonLat(-100, 40), 3);*/
};

function pickMapElement() {
	console.log('map_a.getCenter(): '+map_a.getCenter());
	console.log('map_a.getNumLayers(): '+map_a.getNumLayers());
	console.log('map_a.getLayers(): '+map_a.getLayersByName('WMS Ground'));
	if(map_b.getNumLayers()>0) {
		map_b.destroy();
		map_b = new OpenLayers.Map("map_b");
	}
	
	for(var i=0;i<map_a.getLayersByName('WMS Ground').length;i++) {
		map_b.addLayer(map_a.getLayersByName('WMS Ground')[i].clone());
	}
    map_b.addControl(new OpenLayers.Control.LayerSwitcher());
    map_b.addControl(new OpenLayers.Control.MousePosition());
	map_b.setCenter(map_a.getCenter(),map_a.getZoom());
	console.log('map_a.getExtent(): '+map_b.getExtent());
}
