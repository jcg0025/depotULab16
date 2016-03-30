import {register} from 'platypus';
import BaseViewControl from '../base/base.vc';
import CreatepostViewControl from '../../viewcontrols/createpost/createpost.vc'
import BlogdataRepository from '../../repositories/blogdata/blogdata.repo'
import SinglepostViewControl from '../../viewcontrols/singlepost/singlepost.vc'

export default class HomeViewControl extends BaseViewControl {
    templateString: string = require('./home.vc.html');

    context: any = {
        posts: <Array<Object>>[],
        singleview: SinglepostViewControl
    };
    
    go(): any {
        this.navigator.navigate(CreatepostViewControl);
    }
  
    constructor(private repository: BlogdataRepository){
        super();
    }
    navigatedTo(){
        this.repository.getAllPosts().then((success) => {
            console.log(success);
            this.context.posts = success.reverse();
        }).catch((error) => {
            console.log(error);
        })
    }
      getPost(id: string) {
        this.navigator.navigate(SinglepostViewControl, {
            parameters: {
                id: id
            }
        })
    }
}

register.viewControl('home-vc', HomeViewControl, [BlogdataRepository, SinglepostViewControl]);
