var _ = require('underscore');
var L = require('leaflet');
var template = _.template(
  '<div class="Popup Popup--vertical">' +
    '<a href="<%- experienceLink %>">' +
      '<div class="Popup-image">' +
        '<i class="fa fa-circle-o-notch fa-2x fa-spin Color--emphasis Popup-imageLoader"></i>' +
        '<img src="<%- imageUrl %>" alt="<%- title %>" title="<%- title %>" />' +
      '</div>' +
      '<div class="Popup-info Text">' +
        '<h4 class="Text--large Color--secondary"><%- title %><i class="fa fa-link Popup-link u-lSpace"></i></h4>' +
        '<p class="Text--med Color--paragraph"><%- desc %></p>' +
      '</div>' +
    '</a>' +
  '</div>'
);

var HIGHLIGHT_STYLE = {
  color: '#AAA',
  weight: 1.5,
  opacity: 0.65
};

var HIGHLIGHT_HOVER_STYLE = {
  color: '#F88B52',
  weight: 1.5,
  opacity: 0.65
};

module.exports = function (layer, experienceData) {
  layer.setStyle(HIGHLIGHT_STYLE);

  layer.on('mouseover', function () {
    layer.setStyle(HIGHLIGHT_HOVER_STYLE);
  });

  layer.on('mouseout', function () {
    layer.setStyle(HIGHLIGHT_STYLE);
  });

  layer.bindPopup(
    template({
      experienceLink: experienceData.link,
      imageUrl: experienceData.image,
      title: experienceData.title,
      desc: experienceData.short_desc
    })
  );
}
