import IMask from "imask";

class Mask {
  constructor() {
    this.masks = [{
      class: ".imask-phone",
      mask: [{
        mask: "(00) 0000-0000"
      }, {
        mask: "(00) 00000-0000"
      }]
    }]
  }

  apply() {
    this.masks.forEach(item => {
      let domElements = document.querySelectorAll(item.class);
      let options = {
        mask: item.mask
      };
      let maskedElements = [];
      domElements.forEach(domElement => {
        maskedElements.push(new IMask(domElement, options));
      });
    })
  }

}

export default new Mask();