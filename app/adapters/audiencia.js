import ApplicationAdapter from './application';

export default ApplicationAdapter.extend({
  findAll() {
    return this.get('spreadsheet').fetch('audiencia');
  }
});
