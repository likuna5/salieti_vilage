var wms_layers = [];


        var lyr_GoogleSatelliteHybrid_0 = new ol.layer.Tile({
            'title': 'Google Satellite Hybrid',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_saxli_poligon_1 = new ol.format.GeoJSON();
var features_saxli_poligon_1 = format_saxli_poligon_1.readFeatures(json_saxli_poligon_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_saxli_poligon_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_saxli_poligon_1.addFeatures(features_saxli_poligon_1);
var lyr_saxli_poligon_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_saxli_poligon_1, 
                style: style_saxli_poligon_1,
                popuplayertitle: 'saxli_poligon',
                interactive: true,
                title: '<img src="styles/legend/saxli_poligon_1.png" /> saxli_poligon'
            });
var format_stadioni_2 = new ol.format.GeoJSON();
var features_stadioni_2 = format_stadioni_2.readFeatures(json_stadioni_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_stadioni_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_stadioni_2.addFeatures(features_stadioni_2);
var lyr_stadioni_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_stadioni_2, 
                style: style_stadioni_2,
                popuplayertitle: 'stadioni',
                interactive: true,
    title: 'stadioni<br />\
    <img src="styles/legend/stadioni_2_0.png" /> safexburTo stadioni<br />\
    <img src="styles/legend/stadioni_2_1.png" /> sakaladburTo stadioni<br />' });
var format_mdinare_3 = new ol.format.GeoJSON();
var features_mdinare_3 = format_mdinare_3.readFeatures(json_mdinare_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_mdinare_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_mdinare_3.addFeatures(features_mdinare_3);
var lyr_mdinare_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_mdinare_3, 
                style: style_mdinare_3,
                popuplayertitle: 'mdinare',
                interactive: true,
                title: '<img src="styles/legend/mdinare_3.png" /> mdinare'
            });
var format_gza_4 = new ol.format.GeoJSON();
var features_gza_4 = format_gza_4.readFeatures(json_gza_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_gza_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_gza_4.addFeatures(features_gza_4);
var lyr_gza_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_gza_4, 
                style: style_gza_4,
                popuplayertitle: 'gza',
                interactive: true,
    title: 'gza<br />\
    <img src="styles/legend/gza_4_0.png" /> 1<br />\
    <img src="styles/legend/gza_4_1.png" /> 2<br />' });
var format_lampionebi_5 = new ol.format.GeoJSON();
var features_lampionebi_5 = format_lampionebi_5.readFeatures(json_lampionebi_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_lampionebi_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_lampionebi_5.addFeatures(features_lampionebi_5);
var lyr_lampionebi_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_lampionebi_5, 
                style: style_lampionebi_5,
                popuplayertitle: 'lampionebi',
                interactive: false,
                title: '<img src="styles/legend/lampionebi_5.png" /> lampionebi'
            });
var format_rkinigza_6 = new ol.format.GeoJSON();
var features_rkinigza_6 = format_rkinigza_6.readFeatures(json_rkinigza_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_rkinigza_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_rkinigza_6.addFeatures(features_rkinigza_6);
var lyr_rkinigza_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_rkinigza_6, 
                style: style_rkinigza_6,
                popuplayertitle: 'rkinigza',
                interactive: true,
                title: '<img src="styles/legend/rkinigza_6.png" /> rkinigza'
            });
var format_sadguri_7 = new ol.format.GeoJSON();
var features_sadguri_7 = format_sadguri_7.readFeatures(json_sadguri_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_sadguri_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_sadguri_7.addFeatures(features_sadguri_7);
var lyr_sadguri_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_sadguri_7, 
                style: style_sadguri_7,
                popuplayertitle: 'sadguri',
                interactive: true,
                title: '<img src="styles/legend/sadguri_7.png" /> sadguri'
            });
var format_saxli_UTM_zone_38N_8 = new ol.format.GeoJSON();
var features_saxli_UTM_zone_38N_8 = format_saxli_UTM_zone_38N_8.readFeatures(json_saxli_UTM_zone_38N_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_saxli_UTM_zone_38N_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_saxli_UTM_zone_38N_8.addFeatures(features_saxli_UTM_zone_38N_8);
var lyr_saxli_UTM_zone_38N_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_saxli_UTM_zone_38N_8, 
                style: style_saxli_UTM_zone_38N_8,
                popuplayertitle: 'saxli_UTM_zone_38N',
                interactive: true,
                title: '<img src="styles/legend/saxli_UTM_zone_38N_8.png" /> saxli_UTM_zone_38N'
            });
var format_skola_9 = new ol.format.GeoJSON();
var features_skola_9 = format_skola_9.readFeatures(json_skola_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_skola_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_skola_9.addFeatures(features_skola_9);
var lyr_skola_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_skola_9, 
                style: style_skola_9,
                popuplayertitle: 'skola',
                interactive: true,
                title: '<img src="styles/legend/skola_9.png" /> skola'
            });
var format_stadioni_10 = new ol.format.GeoJSON();
var features_stadioni_10 = format_stadioni_10.readFeatures(json_stadioni_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_stadioni_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_stadioni_10.addFeatures(features_stadioni_10);
var lyr_stadioni_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_stadioni_10, 
                style: style_stadioni_10,
                popuplayertitle: 'stadioni',
                interactive: true,
                title: '<img src="styles/legend/stadioni_10.png" /> stadioni'
            });
var group_mylayers = new ol.layer.Group({
                                layers: [lyr_saxli_poligon_1,lyr_stadioni_2,lyr_mdinare_3,lyr_gza_4,lyr_lampionebi_5,lyr_rkinigza_6,lyr_sadguri_7,lyr_saxli_UTM_zone_38N_8,lyr_skola_9,lyr_stadioni_10,],
                                fold: 'open',
                                title: 'mylayers'});

lyr_GoogleSatelliteHybrid_0.setVisible(true);lyr_saxli_poligon_1.setVisible(true);lyr_stadioni_2.setVisible(true);lyr_mdinare_3.setVisible(true);lyr_gza_4.setVisible(true);lyr_lampionebi_5.setVisible(true);lyr_rkinigza_6.setVisible(true);lyr_sadguri_7.setVisible(true);lyr_saxli_UTM_zone_38N_8.setVisible(true);lyr_skola_9.setVisible(true);lyr_stadioni_10.setVisible(true);
var layersList = [lyr_GoogleSatelliteHybrid_0,group_mylayers];
lyr_saxli_poligon_1.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Cadastral_code': 'Cadastral_code', 'Cadastral_CD': 'Cadastral_CD', 'Area': 'Area', 'Area_integer': 'Area_integer', 'Perimeter': 'Perimeter', 'type': 'type', });
lyr_stadioni_2.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'type': 'type', 'length_m': 'length_m', 'length_km': 'length_km', 'Area': 'Area', 'Area_real': 'Area_real', 'Perimeter': 'Perimeter', 'name': 'name', 'type_int': 'type_int', });
lyr_mdinare_3.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'name': 'name', 'length_m': 'length_m', 'length_km': 'length_km', });
lyr_gza_4.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'name': 'name', 'length_m': 'length_m', 'length_km': 'length_km', 'type': 'type', });
lyr_lampionebi_5.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'name': 'name', 'length_m': 'length_m', 'length_km': 'length_km', 'type': 'type', 'distance': 'distance', 'angle': 'angle', });
lyr_rkinigza_6.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'name': 'name', 'length': 'length', 'length_m': 'length_m', 'length_km': 'length_km', });
lyr_sadguri_7.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'type_int': 'type_int', 'type_string': 'type_string', 'X': 'X', 'Y': 'Y', 'X_real': 'X_real', 'Y_real': 'Y_real', });
lyr_saxli_UTM_zone_38N_8.set('fieldAliases', {'fid': 'fid', 'X': 'X', 'Y': 'Y', });
lyr_skola_9.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'name': 'name', 'X': 'X', 'Y': 'Y', 'X_real': 'X_real', 'Y_real': 'Y_real', });
lyr_stadioni_10.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'type_string': 'type_string', 'type_int': 'type_int', 'X': 'X', 'Y': 'Y', 'X_real': 'X_real', 'Y_real': 'Y_real', 'Y_rl': 'Y_rl', });
lyr_saxli_poligon_1.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'Cadastral_code': 'TextEdit', 'Cadastral_CD': 'TextEdit', 'Area': 'TextEdit', 'Area_integer': 'Range', 'Perimeter': 'TextEdit', 'type': 'Range', });
lyr_stadioni_2.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'type': 'TextEdit', 'length_m': 'Range', 'length_km': 'Range', 'Area': 'Range', 'Area_real': 'TextEdit', 'Perimeter': 'TextEdit', 'name': 'TextEdit', 'type_int': 'Range', });
lyr_mdinare_3.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'name': 'TextEdit', 'length_m': 'Range', 'length_km': 'TextEdit', });
lyr_gza_4.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'name': 'TextEdit', 'length_m': 'Range', 'length_km': 'TextEdit', 'type': 'Range', });
lyr_lampionebi_5.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'name': 'TextEdit', 'length_m': 'Range', 'length_km': 'TextEdit', 'type': 'Range', 'distance': 'TextEdit', 'angle': 'TextEdit', });
lyr_rkinigza_6.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'name': 'TextEdit', 'length': 'Range', 'length_m': 'Range', 'length_km': 'TextEdit', });
lyr_sadguri_7.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'type_int': 'Range', 'type_string': 'TextEdit', 'X': 'Range', 'Y': 'Range', 'X_real': 'TextEdit', 'Y_real': 'TextEdit', });
lyr_saxli_UTM_zone_38N_8.set('fieldImages', {'fid': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', });
lyr_skola_9.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'name': 'TextEdit', 'X': 'Range', 'Y': 'Range', 'X_real': 'TextEdit', 'Y_real': 'TextEdit', });
lyr_stadioni_10.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'type_string': 'TextEdit', 'type_int': 'Range', 'X': 'Range', 'Y': 'Range', 'X_real': 'TextEdit', 'Y_real': 'Range', 'Y_rl': 'TextEdit', });
lyr_saxli_poligon_1.set('fieldLabels', {'fid': 'inline label - always visible', 'id': 'no label', 'Cadastral_code': 'inline label - always visible', 'Cadastral_CD': 'inline label - always visible', 'Area': 'inline label - always visible', 'Area_integer': 'inline label - always visible', 'Perimeter': 'inline label - always visible', 'type': 'inline label - always visible', });
lyr_stadioni_2.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'type': 'inline label - always visible', 'length_m': 'inline label - always visible', 'length_km': 'inline label - always visible', 'Area': 'inline label - always visible', 'Area_real': 'no label', 'Perimeter': 'no label', 'name': 'inline label - always visible', 'type_int': 'no label', });
lyr_mdinare_3.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'name': 'inline label - always visible', 'length_m': 'inline label - always visible', 'length_km': 'inline label - always visible', });
lyr_gza_4.set('fieldLabels', {'fid': 'inline label - always visible', 'id': 'inline label - always visible', 'name': 'inline label - always visible', 'length_m': 'inline label - always visible', 'length_km': 'inline label - always visible', 'type': 'inline label - always visible', });
lyr_lampionebi_5.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'name': 'no label', 'length_m': 'no label', 'length_km': 'no label', 'type': 'no label', 'distance': 'no label', 'angle': 'no label', });
lyr_rkinigza_6.set('fieldLabels', {'fid': 'inline label - always visible', 'id': 'inline label - always visible', 'name': 'inline label - always visible', 'length': 'inline label - always visible', 'length_m': 'inline label - always visible', 'length_km': 'inline label - always visible', });
lyr_sadguri_7.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'type_int': 'inline label - visible with data', 'type_string': 'inline label - always visible', 'X': 'inline label - always visible', 'Y': 'inline label - always visible', 'X_real': 'inline label - always visible', 'Y_real': 'inline label - always visible', });
lyr_saxli_UTM_zone_38N_8.set('fieldLabels', {'fid': 'no label', 'X': 'no label', 'Y': 'no label', });
lyr_skola_9.set('fieldLabels', {'fid': 'inline label - always visible', 'id': 'inline label - always visible', 'name': 'no label', 'X': 'no label', 'Y': 'no label', 'X_real': 'no label', 'Y_real': 'no label', });
lyr_stadioni_10.set('fieldLabels', {'fid': 'inline label - always visible', 'id': 'inline label - always visible', 'type_string': 'inline label - always visible', 'type_int': 'inline label - always visible', 'X': 'inline label - always visible', 'Y': 'inline label - always visible', 'X_real': 'no label', 'Y_real': 'inline label - always visible', 'Y_rl': 'inline label - always visible', });
lyr_stadioni_10.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});