import Immerable from '@Models/GeneralImmer';

class Global extends Immerable {
  constructor() {
    super();
    this.globalLang = 'en';
  }
}

export default Global;
