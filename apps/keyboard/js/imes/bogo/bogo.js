'use strict';

(function () {

    var IMEngine = function ime() {
        var _keyboard;

        this.init = function ime_init(keyboard) {
          console.log("KEYBOARD: " + keyboard);
            _keyboard = keyboard;
        };

        this.click = function ime_click(keycode, x, y) {
            _keyboard.sendString("bogo");
        };
    }

    var bogo = new IMEngine();

    // Expose the engine to the Gaia keyboard
    if (typeof InputMethods !== 'undefined') {
      InputMethods.bogo = bogo;
    }

})();
