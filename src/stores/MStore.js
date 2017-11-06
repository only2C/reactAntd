/**
 * Created by Administrator on 2017/11/2.
 */
import {observable, action, computed} from 'mobx';
import Config from '../config';
import  GlobalStore from './GlobalStore';
class  MStore {
    globalStore = GlobalStore;


    @action getDataBase (){

    }
}

export default MStore;