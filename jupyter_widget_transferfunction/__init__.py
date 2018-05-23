from ._version import version_info, __version__

from .transfer_function import *

def _jupyter_nbextension_paths():
    return [{
        'section': 'notebook',
        'src': 'static',
        'dest': 'jupyter-widget-transferfunction',
        'require': 'jupyter-widget-transferfunction/extension'
    }]
