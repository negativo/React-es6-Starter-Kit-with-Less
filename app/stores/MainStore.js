import alt from '../alt';
import MainActions from '../actions/MainActions';
import {HistoryLocation} from 'react-router';
import axios from 'axios';
import Config from '../config';

class MainStore {

    constructor() {
        this.bindActions(MainActions);
    }
}

export default alt.createStore(MainStore, 'MainStore');
