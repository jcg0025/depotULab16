import {async, register} from 'platypus';
import BaseRepository from '../base/base.repo';
import SubmitService from '../../services/submit/submit.svc'

export default class BlogdataRepository extends BaseRepository {
    constructor(private submitService: SubmitService){
        super();
    }
    createPost(payload: Object): async.IAjaxThenable<string> {
        return this.submitService.createPost(payload);
    }
    getAllPosts(): async.IAjaxThenable<Array<Object>> {
        return this.submitService.getAllPosts();
        
    }
    getPost(): async.IAjaxThenable<any> {
        return this.submitService.getPost();
    }
}

register.injectable('blogdata-repo', BlogdataRepository, [SubmitService]);
