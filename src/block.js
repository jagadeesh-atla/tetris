class Block {
  constructor() {
    this.cellSize = 30;
    this.rotationState = 0;
    this.colors = GetCellColors();
    this.rowOffset = 0;
    this.columnOffset = 0;

    this.id = null;
    this.cells = {};
  }

  Draw(offsetX, offsetY) {
    const tiles = this.GetCellPositions();
    for (const item of tiles) {
      fill(this.colors[this.id]);
      rect(
        item.column * this.cellSize + offsetX,
        item.row * this.cellSize + offsetY,
        this.cellSize - 1,
        this.cellSize - 1
      );
    }
  }

  Move(rows, columns) {
    this.rowOffset += rows;
    this.columnOffset += columns;
  }

  GetCellPositions() {
    const tiles = this.cells[this.rotationState];
    const movedTiles = [];

    for (const item of tiles) {
      const newPos = new Position(
        item.row + this.rowOffset,
        item.column + this.columnOffset
      );
      movedTiles.push(newPos);
    }

    return movedTiles;
  }

  Rotate() {
    this.rotationState += 1;
    if (this.rotationState === Object.keys(this.cells).length) {
      this.rotationState = 0;
    }
  }

  UndoRotation() {
    this.rotationState -= 1;
    if (this.rotationState === -1) {
      this.rotationState = Object.keys(this.cells).length - 1;
    }
  }
}
