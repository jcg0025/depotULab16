import {register} from 'platypus';
import BaseViewControl from '../base/base.vc';
import BlogdateRepository from '../../repositories/blogdata/blogdata.repo'

export default class SinglepostViewControl extends BaseViewControl {
    templateString: string = require('./singlepost.vc.html');

    context: any = {
        
            title: '',
            author: '',
            createdAt: '',
            content: ''
       
    };
    
    constructor(private repo: BlogdateRepository){
        super();
    }
    
    navigatedTo(parameters: any) {
        let id = parameters.id;
        this.repo.getPost(id).then((success) => {
            console.log(success);
            this.context.title = success.title;
            this.context.author = success.author;
            this.context.createdAt = success.createdAt;
            this.context.content = success.content
        })
    }
    
}

register.viewControl('singlepost-vc', SinglepostViewControl, [BlogdateRepository]);
