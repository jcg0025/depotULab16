import {async, register} from 'platypus';
import BaseRepository from '../base/base.repo';
import SubmitService from '../../services/submit/submit.svc'

export default class BlogdataRepository extends BaseRepository {
    constructor(private submitService: SubmitService){
        super();
    }
    createPost(payload: Object): async.IAjaxThenable<boolean> {
        return this.submitService.createPost(payload);
    }
    getAllPosts(): async.IAjaxThenable<Array<Object>> {
        return this.submitService.getAllPosts();
        
    }
}

register.injectable('blogdata-repo', BlogdataRepository, [SubmitService]);
