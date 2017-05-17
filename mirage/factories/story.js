import { Factory, faker, association } from 'ember-cli-mirage';

export default Factory.extend({
  name() {
    return faker.lorem.word();
  },
  title() {
    return faker.lorem.sentence();
  }
});
/*
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
  },
  
  user() {
    return association();
  },
  
  comments() {
    return association();
  }
});
*/
