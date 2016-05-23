import alt from '../alt';

class ChromeActions {
  constructor() {
    this.generateActions(
      'submitLink',
      'loadLinks',
      'resetLinks',
      'addVisit'
    );
  }
}

export default alt.createActions(ChromeActions);
