export default function(server) {

  server.createList('users', 10); 
  server.createList('comments', 10);
  server.createList('stories', 10);

}
