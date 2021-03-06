import {Formatter} from '../../formatter/formatter';
import {MonitorValue} from '../../model/monitor-value';
import {ViewModel} from '../../model/view-model';
import {MultiLogMonitorView} from '../../view/monitor/multi-log';
import {MonitorController} from './monitor';

interface Config<T> {
	formatter: Formatter<T>;
	lineCount: number;
	value: MonitorValue<T>;
	viewModel: ViewModel;
}

/**
 * @hidden
 */
export class MultiLogMonitorController<T> implements MonitorController<T> {
	public readonly viewModel: ViewModel;
	public readonly value: MonitorValue<T>;
	public readonly view: MultiLogMonitorView<T>;

	constructor(document: Document, config: Config<T>) {
		this.value = config.value;

		this.viewModel = config.viewModel;
		this.view = new MultiLogMonitorView(document, {
			formatter: config.formatter,
			lineCount: config.lineCount,
			model: this.viewModel,
			value: this.value,
		});
	}
}
