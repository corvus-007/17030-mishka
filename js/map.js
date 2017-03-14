// Map

ymaps.ready(initMap);

function initMap() {
  map = new ymaps.Map("contacts-map", {
    center: [59.936326864825475, 30.321777768508905],
    zoom: 16,
    controls: []
  });

  map.behaviors.disable(['scrollZoom']);

  mapMarker = new ymaps.Placemark([59.936326864825475, 30.321777768508905], {
    hintContent: "г. Санкт-Петербург, ул. Большая Конюшенная, д. 19/8, офис 101"
  }, {
    iconLayout: 'default#image',
    iconImageHref: 'img/icon-map-pin.svg',
    iconImageSize: [67, 100],
    iconImageOffset: [-33, -100]
  });

  map.geoObjects.add(mapMarker);
}
