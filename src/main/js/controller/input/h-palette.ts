import {NumberUtil} from '../../misc/number-util';
import {PointerHandler} from '../../misc/pointer-handler';
import {PointerData} from '../../misc/pointer-handler';
import {Color} from '../../model/color';
import {Disposable} from '../../model/disposable';
import {InputValue} from '../../model/input-value';
import {HPaletteInputView} from '../../view/input/h-palette';
import {ControllerConfig} from '../controller';
import {InputController} from './input';

interface Config extends ControllerConfig {
	value: InputValue<Color>;
}

/**
 * @hidden
 */
export class HPaletteInputController implements InputController<Color> {
	public readonly disposable: Disposable;
	public readonly value: InputValue<Color>;
	public readonly view: HPaletteInputView;
	private ptHandler_: PointerHandler;

	constructor(document: Document, config: Config) {
		this.onPointerDown_ = this.onPointerDown_.bind(this);
		this.onPointerMove_ = this.onPointerMove_.bind(this);
		this.onPointerUp_ = this.onPointerUp_.bind(this);

		this.value = config.value;

		this.disposable = config.disposable;
		this.view = new HPaletteInputView(document, {
			disposable: this.disposable,
			value: this.value,
		});

		this.ptHandler_ = new PointerHandler(document, this.view.canvasElement);
		this.ptHandler_.emitter.on('down', this.onPointerDown_);
		this.ptHandler_.emitter.on('move', this.onPointerMove_);
		this.ptHandler_.emitter.on('up', this.onPointerUp_);
	}

	private handlePointerEvent_(d: PointerData): void {
		const hue = NumberUtil.map(d.py, 0, 1, 0, 360);

		const c = this.value.rawValue;
		const [, s, v] = c.getComponents('hsv');
		this.value.rawValue = new Color([hue, s, v], 'hsv');
		this.view.update();
	}

	private onPointerDown_(_: PointerHandler, d: PointerData): void {
		this.handlePointerEvent_(d);
	}

	private onPointerMove_(_: PointerHandler, d: PointerData): void {
		this.handlePointerEvent_(d);
	}

	private onPointerUp_(_: PointerHandler, d: PointerData): void {
		this.handlePointerEvent_(d);
	}
}