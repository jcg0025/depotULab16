import {async, register} from 'platypus';
import BaseService from '../base/base.svc';
import BlogdataRepository from '../../repositories/blogdata/blogdata.repo'

export default class SubmitService extends BaseService {
    constructor(private repository: BlogdataRepository){
        super();
    }
    getPost(id: any): async.IAjaxThenable<any> {
        return this.http.json<any>({
            url: this.host + '/posts/' +id,
            method: 'GET'
        }).then((success) => {
            return success.response;
        }).catch((error) => {
            console.log(error);
        })
    }
    createPost(payload: any): any{
        return this.http.json<any>({
            url: this.host + '/posts',
            method: 'POST',
            data: payload
        }).then((success) => {
            console.log('success');
            return success.response.id;
        }).catch((error) => {
            console.log(error);
        })
    }
    
    getAllPosts(): any{
        return this.http.json<any>({
            url: this.host + '/posts',
            method: 'GET'
        }).then((success) => {
            console.log(success);
            return <Array<Object>>success.response;
        }).catch((error)=> {
            console.log(error);
        })
    }
}



register.injectable('submit-svc', SubmitService, []);
