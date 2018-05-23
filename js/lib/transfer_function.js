var widgets = require('@jupyter-widgets/base');
var _ = require('lodash');
var tfpanel = require('./TF_panel.js');
var tfpanel_css = require('../css/ui.css');

// Custom Model. Custom widgets models must at least provide default values
// for model attributes, including
//
//  - `_view_name`
//  - `_view_module`
//  - `_view_module_version`
//
//  - `_model_name`
//  - `_model_module`
//  - `_model_module_version`
//
//  when different from the base class.

// When serialiazing the entire widget state for embedding, only values that
// differ from the defaults will be specified.
var TransferFunctionEditorModel = widgets.DOMWidgetModel.extend({
    defaults: _.extend(widgets.DOMWidgetModel.prototype.defaults(), {
        _model_name : 'TransferFunctionEditorModel',
        _view_name : 'TransferFunctionEditorView',
        _model_module : 'jupyter-widget-transferfunction',
        _view_module : 'jupyter-widget-transferfunction',
        _model_module_version : '0.1.0',
        _view_module_version : '0.1.0'
    })
});


// Custom View. Renders the widget model.
var TransferFunctionEditorView = widgets.DOMWidgetView.extend({
    render: function() {
        var wrapper = this.el;
        this.wrapper = document.createElement('div');
        $(this.wrapper)
          .css("max-width", "500px")
          .css("min-width", "500px")
          .css("min-height", "200px")
          .css("max-height", "200px")
          .css("display", "block")
          .css("position", "relative")
          .appendTo(this.el);
        options = {
          parent: this.wrapper,
          container: this.wrapper,
          panel: {
            showTFResult: true,
            resultBackground: 'rgb(230,230,230)',
            background:	'linear-gradient(to top, rgb(212,228,239) 30%, rgb(134,174,204) 100%)',
            border:	'3px solid rgba(134,174,204, 0.2)',
            colorScheme: 'light',
            width: 500,
            height: 180,
            resultHeight: 20
          }
        };
        this.tf_panel = new tfpanel.TF_panel(options);
        this.tf_panel.draw();
    },

    value_changed: function() {
        this.el.textContent = "hi there";
    }
});


module.exports = {
    TransferFunctionEditorModel : TransferFunctionEditorModel,
    TransferFunctionEditorView : TransferFunctionEditorView
};
