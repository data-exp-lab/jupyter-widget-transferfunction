jupyter-widget-transferfunction
===============================

A transfer function widget for Jupyter.

This utilizes the work of Anna Fruehstueck, who developed the transfer function
widget as can be seen on her website at http://afruehstueck.github.io/ .

Installation
------------

To install use pip:

    $ pip install jupyter-widget-transferfunction
    $ jupyter nbextension enable --py --sys-prefix jupyter-widget-transferfunction


For a development installation (requires npm),

    $ git clone https://github.com/data-exp-lab/jupyter-widget-transferfunction.git
    $ cd jupyter-widget-transferfunction
    $ pip install -e .
    $ jupyter nbextension install --py --symlink --sys-prefix jupyter-widget-transferfunction
    $ jupyter nbextension enable --py --sys-prefix jupyter-widget-transferfunction
