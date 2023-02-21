import {
    JSBlock
} from './js-block';
import {
    TimerBlock
} from './timer-block';
import {
    JS_CREATION_DATE
} from '../core/constants/settings'

export default class App {
    #JSBlock
    #timerBlock
    constructor(){
        this.#JSBlock = new JSBlock();
        this.#timerBlock = new TimerBlock(JS_CREATION_DATE);
    }
    run() {
        const jsBlockHtml = this.#JSBlock.render();
        const jsTimerBlockHtml = this.#timerBlock.render();

        document.body.append(jsBlockHtml, jsTimerBlockHtml);
    }
}

