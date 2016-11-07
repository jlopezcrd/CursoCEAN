class Hello {
    // Atributos de la clase
    // Se declaran al reves
    element: HTMLDivElement;
    elementInput: HTMLInputElement;
    elementText: HTMLDivElement;

    // Constructor con parametro string
    constructor(defaultName:string)
    {
        this.element = document.createElement('div');
        this.elementInput = document.createElement('input');
        this.elementText = document.createElement('div');

        const elementButton = document.createElement('button');
        elementButton.textContent = "Saludar";

        //process
        this.element.appendChild(this.elementInput);
        this.element.appendChild(elementButton);
        this.element.appendChild(this.elementText);

        this.elementInput.value = defaultName;
        elementButton.addEventListener('click', () => this.saludar());
    }

    saludar()
    {
        this.elementText.textContent = `Hola ${this.elementInput.value}`;
    }

    mostrar(parent:HTMLElement)
    {
        parent.appendChild(this.element);
    }
}

const hola = new Hello('Test');
hola.mostrar(document.body);
