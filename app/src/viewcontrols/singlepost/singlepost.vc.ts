import {register} from 'platypus';
import BaseViewControl from '../base/base.vc';

export default class SinglepostViewControl extends BaseViewControl {
    templateString: string = require('./singlepost.vc.html');

    context: any = {};
}

register.viewControl('singlepost-vc', SinglepostViewControl);
