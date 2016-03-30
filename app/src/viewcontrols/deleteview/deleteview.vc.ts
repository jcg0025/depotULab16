import {register} from 'platypus';
import BaseViewControl from '../base/base.vc';
import BlogdataRepository from '../../repositories/blogdata/blogdata.repo'

export default class DeleteViewViewControl extends BaseViewControl {
    templateString: string = require('./deleteview.vc.html');

    context: any = {};
    
    constructor(private repo: BlogdataRepository) {
        super();
    }
    navigatedTo(parameters: any) {
        let id = parameters.id;
        this.repo.deletePost(id).then((success: any) => {
            console.log(success)
        }, (error: any) => {
            console.log(error)
        });
    }
}

register.viewControl('deleteview-vc', DeleteViewViewControl, [BlogdataRepository]);
