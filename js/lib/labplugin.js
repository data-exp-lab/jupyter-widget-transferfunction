var jupyter-widget-transferfunction = require('./index');
var base = require('@jupyter-widgets/base');

module.exports = {
  id: 'jupyter-widget-transferfunction',
  requires: [base.IJupyterWidgetRegistry],
  activate: function(app, widgets) {
      widgets.registerWidget({
          name: 'jupyter-widget-transferfunction',
          version: jupyter-widget-transferfunction.version,
          exports: jupyter-widget-transferfunction
      });
  },
  autoStart: true
};

