export default function() {
  this.namespace = '/';

  this.get('/news');
  this.get('/stories');
  this.get('/story/:id');

}
