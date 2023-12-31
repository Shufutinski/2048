import { Cell } from "./cell.js";

const GRID_SIZE = 4;
const CELLS_COUNT = GRID_SIZE * GRID_SIZE;

export class Grid {
	constructor(gridElement) {
		this.cells = [];
		for (let i = 0; i < CELLS_COUNT; i++) {
			this.cells.push(
				new Cell(gridElement , i % GRID_SIZE, Math.floor(i / GRID_SIZE))
			);    
		}

		this.cellsGroupedByColumn = this.groupCellsByColumn();
		this.cellsGroupedByReversedColumn = this.cellsGroupedByColumn.map(column => [...column].reverse());
		this.cellsGroupedByRow = this.groupCellsByRow();
		this.cellsGroupedByReversedRow = this.cellsGroupedByRow.map(row => [...row].reverse());
	}

	getRandomEmprtyCell() {
		const emprtyCells = this.cells.filter(cell => cell.isEmprty());
		const randomIndex = Math.floor(Math.random() * emprtyCells.length);
		return emprtyCells[randomIndex];
	}

	groupCellsByColumn() {
		return this.cells.reduce((groupedCells, cell) => {
			groupedCells[cell.x] = groupedCells[cell.x] || [];
			groupedCells[cell.x][cell.y] = cell;
			return groupedCells;
		}, []);
	}

	groupCellsByRow() {
		return this.cells.reduce((groupedCells, cell) => {
			groupedCells[cell.y] = groupedCells[cell.y] || [];
			groupedCells[cell.y][cell.x] = cell;
			return groupedCells;
		}, []);
	}
}