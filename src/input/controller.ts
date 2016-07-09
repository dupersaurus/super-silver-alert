import {Actor} from "../world/actor";
import {Player} from "../world/actors/player";
import {GameManager} from "../states/game-manager";

/**
 * Base actor controller
 */
export class Controller {
	protected _actor: Player = null;

	constructor(protected _state:GameManager) {

	}

	assignActor(actor:Player) {
		this._actor = actor;
	}

	/**
	 * Update every tick
	 * @param {number} delta Time elapsed since last tick
	 */
	update(delta: number) {

	}
}