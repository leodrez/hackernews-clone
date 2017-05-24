import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
  url() {
    return faker.internet.url();
  },

  title() {
    return faker.lorem.sentence();
  },

  score() {
    return faker.random.number();
  },
  
  createdAt() {
    return faker.date.past();
  } 
});

/*

User and comment not working when enabeled

  user() {
    return faker.internet.userName();
  },
  
  comments() {
    return faker.lorem.paragraph();
  }

*/
