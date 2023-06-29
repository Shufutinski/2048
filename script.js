import { Grid } from "./grid.js";
import { Tile } from "./tile.js";

const gameBoard = document.getElementById('game-board');

const grid = new Grid(gameBoard);
grid.getRandomEmprtyCell().linkTile(new Tile(gameBoard));