function setBounds() {
}

function pop_Vaikeustaso(feature, layer) {
    var popupContent = '<table>\
        </table>';
    layer.bindPopup(popupContent, {maxHeight: 400});
}

function style_Vaikeustaso(feature) {
    switch(String(feature.properties['Luokittelu'])) {
        case '1':
            return {
        pane: 'pane_Vaikeustaso',
        opacity: 1,
        color: 'rgba(0,200,0,1.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'round',
        weight: 4.0,
        fillOpacity: 0,
        interactive: true,
    }
            break;
        case '2':
            return {
        pane: 'pane_Vaikeustaso',
        opacity: 1,
        color: 'rgba(0,200,0,1.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'round',
        weight: 4.0,
        fillOpacity: 0,
        interactive: true,
    }
            break;
        case '3':
            return {
        pane: 'pane_Vaikeustaso',
        opacity: 1,
        color: 'rgba(255,0,0,1)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'round',
        weight: 4.0,
        fillOpacity: 0,
        interactive: true,
    }
            break;
        case '4':
            return {
        pane: 'pane_Vaikeustaso',
        opacity: 1,
        color: 'rgba(0,0,0,1.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'round',
        weight: 4.0,
        fillOpacity: 0,
        interactive: true,
    }
            break;
        case '5':
            return {
        pane: 'pane_Vaikeustaso',
        opacity: 1,
        color: 'rgba(0,0,0,1.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'round',
        weight: 4.0,
        fillOpacity: 0,
        interactive: true,
    }
            break;
    }
}

function pop_Nktorni_1(feature, layer) {
    var popupContent = '<table>\
            <tr>\
                <td colspan="2">' + (feature.properties['kuva'] !== null ? autolinker.link(feature.properties['kuva'].toLocaleString()) : '') + '</td>\
            </tr>\
        </table>';
    layer.bindPopup(popupContent, {maxHeight: 400});
}

function style_Nktorni_1_0() {
    return {
        radius: 8,
        fillColor: "#ff7800",
        color: "#000",
        weight: 1,
        opacity: 1,
        fillOpacity: 0.8
    }
}

function pop_Kohteet_2(feature, layer) {
    var popupContent = '<table>\
            <tr>\
                <td colspan="2">' + (feature.properties['embed'] !== null ? autolinker.link(feature.properties['embed'].toLocaleString()) : '') + '</td>\
            </tr>\
        </table>';
    layer.bindPopup(popupContent, {maxHeight: 400});
}

function style_Kohteet_2_0() {
    return {
        pane: 'pane_Kohteet_2',
rotationAngle: 0.0,
rotationOrigin: 'center center',
icon: L.icon({
    iconUrl: 'markers/sijanti 6.svg',
    iconSize: [15.2, 15.2]
}),
        interactive: true,
    }
}

function pop_Laavut_3(feature, layer) {
    var popupContent = '<table>\
            <tr>\
                <td colspan="2">' + (feature.properties['kuvat'] !== null ? autolinker.link(feature.properties['kuvat'].toLocaleString()) : '') + '</td>\
            </tr>\
        </table>';
    layer.bindPopup(popupContent, {maxHeight: 400});
}

function style_Laavut_3_0() {
    return {
        pane: 'pane_Laavut_3',
rotationAngle: 0.0,
rotationOrigin: 'center center',
icon: L.icon({
    iconUrl: 'markers/laavu2.svg',
    iconSize: [15.2, 15.2]
}),
        interactive: true,
    }
}
