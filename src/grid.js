class Grid {
  constructor() {
    this.numRows = 20;
    this.numCols = 10;
    this.cellSize = 30;
    this.colors = GetCellColors();

    this.grid = [];
    for (let i = 0; i < this.numRows; i++) {
      this.grid.push(Array(this.numCols).fill(0));
    }

    this.Initialize();
  }

  Initialize() {
    for (let i = 0; i < this.numRows; ++i) {
      for (let j = 0; j < this.numCols; ++j) {
        this.grid[i][j] = 0;
      }
    }
  }

  Print() {
    console.log(this.grid);
  }

  Draw() {
    for (let i = 0; i < this.numRows; ++i) {
      for (let j = 0; j < this.numCols; ++j) {
        const cellValue = this.grid[i][j];
        fill(this.colors[cellValue]);
        rect(
          j * this.cellSize + 11,
          i * this.cellSize + 11,
          this.cellSize - 1,
          this.cellSize - 1
        );
      }
    }
  }

  IsCellOutside(i, j) {
    return !(i >= 0 && i < this.numRows && j >= 0 && j < this.numCols);
  }

  IsCellEmpty(i, j) {
    return this.grid[i][j] === 0;
  }

  ClearFullRows() {
    let completed = 0;
    for (let i = this.numRows - 1; i >= 0; i--) {
      if (this.IsRowFull(i)) {
        this.ClearRow(i);
        completed += 1;
      } else if (completed > 0) {
        this.MoveRowDown(i, completed);
      }
    }

    return completed;
  }

  IsRowFull(i) {
    for (let j = 0; j < this.numCols; j++) {
      if (this.grid[i][j] === 0) return false;
    }

    return true;
  }

  ClearRow(i) {
    for (let j = 0; j < this.numCols; j++) {
      this.grid[i][j] = 0;
    }
  }

  MoveRowDown(i, completed) {
    for (let j = 0; j < this.numCols; j++) {
      this.grid[i + completed][j] = this.grid[i][j];
      this.grid[i][j] = 0;
    }
  }
}
