class Game {
  constructor(bgMusic, rotateSound, clearSound) {
    this.grid = new Grid();
    this.blocks = this.GetAllBlocks();
    this.currentBlock = this.GetRandomBlock();
    this.nextBlock = this.GetRandomBlock();
    this.gameOver = false;
    this.score = 0;

    this.music = bgMusic;
    this.PlayMusic();

    this.rotateSound = rotateSound;
    this.clearSound = clearSound;
  }

  PlayMusic() {
    this.music.play();
    this.music.loop();
    this.music.setVolume(0.05);
  }

  StopMusic() {
    this.music.stop();
  }

  GetRandomBlock() {
    if (this.blocks.length === 0) {
      this.blocks = this.GetAllBlocks();
    }
    const randomIdx = floor(random() * this.blocks.length);
    const block = this.blocks[randomIdx];
    this.blocks.splice(randomIdx, 1);
    // console.log(randomIdx);

    return block;
  }

  GetAllBlocks() {
    return [
      new IBlock(),
      new JBlock(),
      new LBlock(),
      new OBlock(),
      new SBlock(),
      new TBlock(),
      new ZBlock(),
    ];
  }

  Draw() {
    this.grid.Draw();
    if (this.gameOver === false) {
      this.currentBlock.Draw(11, 11);
      switch (this.nextBlock.id) {
        case 3:
          this.nextBlock.Draw(255, 290);
          break;
        case 4:
          this.nextBlock.Draw(255, 280);
          break;
        default:
          this.nextBlock.Draw(270, 270);
          break;
      }
    }
  }

  HandleInput(event) {
    const { keyCode } = event;

    if (this.gameOver && keyCode !== 0) {
      this.gameOver = false;
      this.Reset();
    }

    switch (keyCode) {
      case LEFT_ARROW:
        this.MoveBlockLeft();
        break;
      case RIGHT_ARROW:
        this.MoveBlockRight();
        break;
      case DOWN_ARROW:
        this.MoveBlockDown();
        this.UpdateScore(0, 1);
        break;
      case UP_ARROW:
        this.RotateBlock();
        break;
      case 32: // Space bar
        this.MoveBlockDownFast();
        this.UpdateScore(0, 2, true);
        break;
    }
  }

  MoveBlockLeft() {
    if (this.gameOver) return;
    this.currentBlock.Move(0, -1);
    if (this.IsBlockOutside() || this.BlockFits() === false) {
      this.currentBlock.Move(0, 1);
    }
  }

  MoveBlockRight() {
    if (this.gameOver) return;
    this.currentBlock.Move(0, 1);
    if (this.IsBlockOutside() || this.BlockFits() === false) {
      this.currentBlock.Move(0, -1);
    }
  }

  MoveBlockDown(isFast = false) {
    if (this.gameOver) {
      return false;
    }

    this.currentBlock.Move(1, 0);

    if (this.IsBlockOutside() || this.BlockFits() === false) {
      this.currentBlock.Move(-1, 0);
      this.LockBlock(isFast);
      return false;
    }

    return true;
  }

  MoveBlockDownFast() {
    while (this.MoveBlockDown(true));
  }

  IsBlockOutside() {
    const tiles = this.currentBlock.GetCellPositions();

    for (const item of tiles) {
      if (this.grid.IsCellOutside(item.row, item.column)) return true;
    }

    return false;
  }

  RotateBlock() {
    if (this.gameOver) return;
    this.currentBlock.Rotate();
    if (this.IsBlockOutside() || this.BlockFits() === false) {
      this.currentBlock.UndoRotation();
    } else {
      this.rotateSound.play();
    }
  }

  LockBlock(isSoftDrop = false) {
    const tiles = this.currentBlock.GetCellPositions();
    for (const tile of tiles) {
      this.grid.grid[tile.row][tile.column] = this.currentBlock.id;
    }
    this.currentBlock = this.nextBlock;
    if (this.BlockFits() === false) {
      this.gameOver = true;
    }

    this.nextBlock = this.GetRandomBlock();

    const rowsCleared = this.grid.ClearFullRows();
    if (rowsCleared > 0) {
      this.clearSound.play();
      this.UpdateScore(rowsCleared, 0, isSoftDrop);
    }
  }

  BlockFits() {
    const tiles = this.currentBlock.GetCellPositions();
    for (const tile of tiles) {
      if (this.grid.IsCellEmpty(tile.row, tile.column) === false) return false;
    }

    return true;
  }

  Reset() {
    this.grid.Initialize();
    this.blocks = this.GetAllBlocks();
    this.currentBlock = this.GetRandomBlock();
    this.nextBlock = this.GetRandomBlock();
    this.score = 0;
  }

  UpdateScore(linesCleared, moveDownPoints, isSoftDrop = false) {
    // Original BPS scoring system;
    switch (linesCleared) {
      case 1:
        this.score += 40;
        break;
      case 2:
        this.score += 100;
        break;
      case 3:
        this.score += 300;
        break;
      case 4:
        this.score += 1200;
        break;
      default:
        break;
    }

    if (isSoftDrop) {
      this.score += linesCleared * 10;
    }

    this.score += moveDownPoints;
  }
}
