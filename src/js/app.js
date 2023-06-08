import goblin from '../images/goblin.png'

export default class gameTable {
    constructor(rows, columns) {
      if (Number.isInteger(rows) && (Number.isInteger(columns))) {
        this.rows = rows;
        this.columns = columns;
        this.elems = {};
        this.elemsNum = this.rows * this.columns;
        this.image = goblin;
        this.imageSection = 0;
        this.createGameTable();
        // this.mooveImage();
        this.timerId = setInterval(() => {this.mooveImage()}, 1000);
      } else {
        throw Error('Введенные данные не являются целыми числами!');
      }
    }
  
    createGameTable() {
      this.table = document.createElement('div');
      this.table.className = "table";
      document.body.append(this.table);

      const elem = document.createElement('div');
      elem.className = "table__section";
      elem.style.width = Math.round(90/this.columns) + "%";
      // elem.style.width = "50px";
      // elem.style.height = "50px";

      for (let i = 0; i < this.elemsNum; i++) {
        this.elems[i] = elem.cloneNode(true);
        this.table.appendChild(this.elems[i]);
        this.elems[i].style.height = this.elems[i].offsetWidth + "px";
      }
    }

    mooveImage() {
      this.elems[this.imageSection].className = 'table__section';
      let num = Math.floor(Math.random() * this.elemsNum);
      while (num == this.imageSection) {
        num = Math.floor(Math.random() * this.elemsNum);
      }
      this.imageSection = Math.floor(Math.random() * this.elemsNum);
      this.elems[this.imageSection].className = 'table__section__image';
    }
  }
  