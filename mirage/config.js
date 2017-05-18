export default function() {

  this.get('/stories');
  this.get('/comments');

}

/*
When requesting model for specific route instea
of just setting model also affects url.

This does not work:

  this.get('/story/:id');
*/
