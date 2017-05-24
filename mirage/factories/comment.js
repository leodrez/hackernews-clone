import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
  text() {
    return faker.lorem.paragraph();
  },

  createdAt() {
    return faker.date.past()
  }
});


/*

User and stories not working when enabled

  user() {
    return faker.internet.userName();
  },

  story() {
    return faker.lorem.sentence();
  },

*/
