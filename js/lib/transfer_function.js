var widgets = require('@jupyter-widgets/base');
var _ = require('lodash');
var tfpanel = require('./TF_panel.js');

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
        this.value_changed();
        this.model.on('change:value', this.value_changed, this);
    },

    value_changed: function() {
        this.el.textContent = "hi there";
    }
});


module.exports = {
    TransferFunctionEditorModel : TransferFunctionEditorModel,
    TransferFunctionEditorView : TransferFunctionEditorView
};
