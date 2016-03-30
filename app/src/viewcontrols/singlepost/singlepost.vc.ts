import {register} from 'platypus';
import BaseViewControl from '../base/base.vc';
import BlogdataRepository from '../../repositories/blogdata/blogdata.repo'
import DeleteViewViewControl from '../../viewcontrols/deleteview/deleteview.vc'

export default class SinglepostViewControl extends BaseViewControl {
    templateString: string = require('./singlepost.vc.html');

    context: any = {
        
            title: '',
            author: '',
            createdAt: '',
            content: '',
            id: ''
       
    };
    
    constructor(private repo: BlogdataRepository){
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
            this.context.id = success.id;
        })
    }
    
    deleteThisPost(id: any) {
        this.navigator.navigate(DeleteViewViewControl, {
            parameters: {
                id: id
            }
        });
    }
    
    
}

register.viewControl('singlepost-vc', SinglepostViewControl, [BlogdataRepository, DeleteViewViewControl]);
