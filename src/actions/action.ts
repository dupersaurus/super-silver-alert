import {GameManager} from "../states/game-manager";

export abstract class Action {

	protected _xLeft:number = 0;
	protected _xRight:number = 0;
	protected _direction: string = null;
	protected _z: number = 0;

	/** @type {boolean} Whether the action happens in the world (true) or in the inventory (false) */
	protected _isWorldAction: boolean = true;

	get isWorldAction(): boolean {
		return this._isWorldAction;
	}

	constructor(protected _manager:GameManager, protected _label: string) {

	}

	setBounds(left: number, right: number) {
		this._xLeft = left;
		this._xRight = right;
	}

	/**
	 * Returns whether a given position allows the action
	 * @param  {number}  x The x position, relative to the action's scope (probably chunk coords)
	 * @return {boolean}   Whether action can activate
	 */
	checkBounds(x: number): boolean {
		return this._xLeft <= x && x <= this._xRight;
	}

	get icon(): PIXI.DisplayObject {
		return null;
	}

	get label(): string {
		return this._label;
	}
	
	set direction(value: string) {
		this._direction = value;
	}

	get direction(): string {
		return this._direction;
	}

	get z(): number {
		return this._z;
	}

	set z(value: number) {
		this._z = value;
	}

	/**
	 * Activate the action
	 */
	performAction(data?:any) { }
}