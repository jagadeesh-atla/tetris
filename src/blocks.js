class LBlock extends Block {
  constructor() {
    super();
    this.id = 1;
    this.cells[0] = [
      new Position(0, 2),
      new Position(1, 0),
      new Position(1, 1),
      new Position(1, 2),
    ];
    this.cells[1] = [
      new Position(0, 1),
      new Position(1, 1),
      new Position(2, 1),
      new Position(2, 2),
    ];
    this.cells[2] = [
      new Position(1, 0),
      new Position(1, 1),
      new Position(1, 2),
      new Position(2, 0),
    ];
    this.cells[3] = [
      new Position(0, 0),
      new Position(0, 1),
      new Position(1, 1),
      new Position(2, 1),
    ];

    this.Move(0, 3);
  }
}

class JBlock extends Block {
  constructor() {
    super();
    this.id = 2;
    this.cells[0] = [
      new Position(0, 0),
      new Position(1, 0),
      new Position(1, 1),
      new Position(1, 2),
    ];
    this.cells[1] = [
      new Position(0, 1),
      new Position(0, 2),
      new Position(1, 1),
      new Position(2, 1),
    ];
    this.cells[2] = [
      new Position(1, 0),
      new Position(1, 1),
      new Position(1, 2),
      new Position(2, 2),
    ];
    this.cells[3] = [
      new Position(0, 1),
      new Position(1, 1),
      new Position(2, 0),
      new Position(2, 1),
    ];

    this.Move(0, 3);
  }
}

class IBlock extends Block {
  constructor() {
    super();
    this.id = 3;
    this.cells[0] = [
      new Position(1, 0),
      new Position(1, 1),
      new Position(1, 2),
      new Position(1, 3),
    ];
    this.cells[1] = [
      new Position(0, 2),
      new Position(1, 2),
      new Position(2, 2),
      new Position(3, 2),
    ];
    this.cells[2] = [
      new Position(2, 0),
      new Position(2, 1),
      new Position(2, 2),
      new Position(2, 3),
    ];
    this.cells[3] = [
      new Position(0, 1),
      new Position(1, 1),
      new Position(2, 1),
      new Position(3, 1),
    ];

    this.Move(-1, 3);
  }
}

class OBlock extends Block {
  constructor() {
    super();
    this.id = 4;
    this.cells[0] = [
      new Position(0, 0),
      new Position(0, 1),
      new Position(1, 0),
      new Position(1, 1),
    ];

    this.Move(0, 4);
  }
}

class SBlock extends Block {
  constructor() {
    super();
    this.id = 5;
    this.cells[0] = [
      new Position(0, 1),
      new Position(0, 2),
      new Position(1, 0),
      new Position(1, 1),
    ];
    this.cells[1] = [
      new Position(0, 1),
      new Position(1, 1),
      new Position(1, 2),
      new Position(2, 2),
    ];
    this.cells[2] = [
      new Position(1, 1),
      new Position(1, 2),
      new Position(2, 0),
      new Position(2, 1),
    ];
    this.cells[3] = [
      new Position(0, 0),
      new Position(1, 0),
      new Position(1, 1),
      new Position(2, 1),
    ];

    this.Move(0, 3);
  }
}

class TBlock extends Block {
  constructor() {
    super();
    this.id = 6;
    this.cells[0] = [
      new Position(0, 1),
      new Position(1, 0),
      new Position(1, 1),
      new Position(1, 2),
    ];
    this.cells[1] = [
      new Position(0, 1),
      new Position(1, 1),
      new Position(1, 2),
      new Position(2, 1),
    ];
    this.cells[2] = [
      new Position(1, 0),
      new Position(1, 1),
      new Position(1, 2),
      new Position(2, 1),
    ];
    this.cells[3] = [
      new Position(0, 1),
      new Position(1, 0),
      new Position(1, 1),
      new Position(2, 1),
    ];

    this.Move(0, 3);
  }
}

class ZBlock extends Block {
  constructor() {
    super();

    this.id = 7;
    this.cells[0] = [
      new Position(0, 0),
      new Position(0, 1),
      new Position(1, 1),
      new Position(1, 2),
    ];
    this.cells[1] = [
      new Position(0, 2),
      new Position(1, 1),
      new Position(1, 2),
      new Position(2, 1),
    ];
    this.cells[2] = [
      new Position(1, 0),
      new Position(1, 1),
      new Position(2, 1),
      new Position(2, 2),
    ];
    this.cells[3] = [
      new Position(0, 1),
      new Position(1, 0),
      new Position(1, 1),
      new Position(2, 0),
    ];

    this.Move(0, 3);
  }
}
