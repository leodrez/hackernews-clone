import { Factory, faker, association } from 'ember-cli-mirage';

export default Factory.extend({
  comment() {
    return faker.lorem.sentence();
  }
});

/*
export default Factory.extend({
  
  text() {
    return faker.lorem.paragraph()
  },

  user() {
    return association()
  },

  story() {
    return association()
  },
  
  createdAt() {
    return faker.date.past()
  }

});
*/
