(function ($R) {
    $R.add('plugin', 'clear_format', {
        // set translations
        translations: {
            en: {
                "clear_format": "Clear Format"
            }
        },
        init: function (app) {
            this.app = app;
            this.toolbar = app.toolbar;
            this.inline = app.inline;
            this.lang = app.lang;
        },
        start: function () {
            // set up the button with lang variable
            var buttonData = {
                title: this.lang.get('clear_format'),
                api: 'plugin.clear_format.toggle',
                icon: '<i class="re-plugin-eraser"></i>'
            };            

            // add the button to the toolbar
            var $button = this.toolbar.addButton('clear_format', buttonData);
        },
        toggle: function () {
            this.inline.clearFormat();
        }
    });
})(Redactor);