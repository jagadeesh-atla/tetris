let darkGrey,
  green,
  red,
  orange,
  yellow,
  purple,
  cyan,
  blue,
  lightBlue,
  darkBlue;

function setupColors() {
  darkGrey = color(26, 31, 40, 255);
  green = color(47, 230, 23, 255);
  red = color(232, 18, 18, 255);
  orange = color(226, 116, 17, 255);
  yellow = color(237, 234, 4, 255);
  purple = color(166, 0, 247, 255);
  cyan = color(21, 204, 209, 255);
  blue = color(13, 64, 216, 255);
  lightBlue = color(59, 85, 162, 255);
  darkBlue = color(44, 44, 127, 255);
}

function GetCellColors() {
  return [
    darkGrey,
    green,
    red,
    orange,
    yellow,
    purple,
    cyan,
    blue,
    lightBlue,
    darkBlue,
  ];
}
