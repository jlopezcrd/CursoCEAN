var Hello = (function () {
    // Constructor con parametro string
    function Hello(defaultName) {
        var _this = this;
        this.element = document.createElement('div');
        this.elementInput = document.createElement('input');
        this.elementText = document.createElement('div');
        var elementButton = document.createElement('button');
        elementButton.textContent = "Saludar";
        //process
        this.element.appendChild(this.elementInput);
        this.element.appendChild(elementButton);
        this.element.appendChild(this.elementText);
        this.elementInput.value = defaultName;
        elementButton.addEventListener('click', function () { return _this.saludar(); });
    }
    Hello.prototype.saludar = function () {
        this.elementText.textContent = "Hola " + this.elementInput.value;
    };
    Hello.prototype.mostrar = function (parent) {
        parent.appendChild(this.element);
    };
    return Hello;
}());
var hola = new Hello('Test');
hola.mostrar(document.body);
