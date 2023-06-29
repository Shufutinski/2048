import { Grid } from "./grid.js";

const gameBoard = document.getElementById('game-board');

const grid = new Grid(gameBoard);
grid.getRandomEmprtyCell().linkTile(new Tile(gameboard));