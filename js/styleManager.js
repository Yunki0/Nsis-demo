// styleManager.js
class ElementBuilder {
    constructor(elementType, classes = []) {
      this.element = document.createElement(elementType);
      this.addClasses(classes);
    }
  
    addClasses(classes) {
      this.element.classList.add(...classes);
      return this;
    }
  
    setText(content) {
      this.element.textContent = content;
      return this;
    }
  
    setAttribute(attributeName, attributeValue) {
      this.element.setAttribute(attributeName, attributeValue);
      return this;
    }
  
    setAttributes(attributes) {
      Object.entries(attributes).forEach(([name, value]) => {
        this.element.setAttribute(name, value);
      });
      return this;
    }
  
    render(parentElement) {
      parentElement.appendChild(this.element);
      return this;
    }
  }
  
  // // Exemple d'utilisation
  // document.addEventListener("DOMContentLoaded", () => {
  //   const container = document.querySelector("#app");
  
  //   // Crée un élément avec des classes CSS et des attributs HTML
  //   new ElementBuilder("a", ["text-primary", "border-rounded"])
  //     .setText("Clique ici pour en savoir plus")
  //     .setAttributes({
  //       href: "https://example.com",
  //       target: "_blank",
  //       id: "unique-link",
  //       "data-custom": "exemple-data"
  //     })
  //     .render(container);
  // });
  
  document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector(".container");
  
    new ElementBuilder("section", [])
      .setAttributes(
        
      )
  })