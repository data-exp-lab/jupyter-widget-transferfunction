import ipywidgets as widgets
from traitlets import Unicode

@widgets.register
class TransferFunctionEditor(widgets.DOMWidget):
    """An example widget."""
    _view_name = Unicode('TransferFunctionEditorView').tag(sync=True)
    _model_name = Unicode('TransferFunctionEditorModel').tag(sync=True)
    _view_module = Unicode('jupyter-widget-transferfunction').tag(sync=True)
    _model_module = Unicode('jupyter-widget-transferfunction').tag(sync=True)
    _view_module_version = Unicode('^0.1.0').tag(sync=True)
    _model_module_version = Unicode('^0.1.0').tag(sync=True)
