import {register} from 'platypus';
import BaseViewControl from '../base/base.vc';
import BlogdataRepository from '../../repositories/blogdata/blogdata.repo'
import HomeViewControl from '../../viewcontrols/home/home.vc'
import SubmitService from '../../services/submit/submit.svc'


export default class CreatepostViewControl extends BaseViewControl {
    templateString: string = require('./createpost.vc.html');
    constructor(private repository: BlogdataRepository){
        super();
    }
    context: any = {
        payload: {
            title: '',
            author: '',
            content: ''
        }
    };
    createPost(): any{
        console.log(this.context.payload)
        this.context.error ='';
        this.repository.createPost(
            this.context.payload
        ).then((success: any)=> {
            this.navigator.navigate(HomeViewControl);
        }).catch((error:any) => {
            this.context.error =error;
        })
    }
    
  
}

register.viewControl('createpost-vc', CreatepostViewControl, [BlogdataRepository, SubmitService]);
