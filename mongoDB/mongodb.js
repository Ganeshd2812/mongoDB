Atlas atlas-b8rgqx-shard-0 [primary] Ganesh_28> use movies
switched to db movies
Atlas atlas-b8rgqx-shard-0 [primary] movies> db.movies.insert({title:"Fight Club",writer:"chuck Palahniuko",year:1999,actors:["Brad Pitt,Edward Norton"]})
DeprecationWarning: Collection.insert() is deprecated. Use insertOne, insertMany, or bulkWrite.
{
  acknowledged: true,
  insertedIds: { '0': ObjectId("620502f5c6fafc8e31a14a09") }
}
Atlas atlas-b8rgqx-shard-0 [primary] movies> db.movies.insert({title:"Pulp Fiction",writer:"Quentin Tarantino",year:1994,actors:["John Travolta,Uma Thurman"]})
{
  acknowledged: true,
  insertedIds: { '0': ObjectId("620503bbc6fafc8e31a14a0a") }
}
Atlas atlas-b8rgqx-shard-0 [primary] movies> db.movies.insert({title:"Inglorious Basterds",writer:"Quentin Tarantino",year:2009,actors:["Brad Pitt,Diane Kruger,Eli Roth"]})
{
  acknowledged: true,
  insertedIds: { '0': ObjectId("620504aec6fafc8e31a14a0b") }
}
Atlas atlas-b8rgqx-shard-0 [primary] movies> db.movies.insert({title:"The Hobbit:An Unexpected Journey",writer:"J.R.R.Tolkein",year:2012,franchise:"The Hobbit"})
{
  acknowledged: true,
  insertedIds: { '0': ObjectId("6205160bc6fafc8e31a14a0c") }
}
Atlas atlas-b8rgqx-shard-0 [primary] movies> db.movies.insert({title:"The Hobbit:The Desolation of Smaug",writer:"J.R.R.Tolkein",year:2013,franchise:"The Hobbit"})
{
  acknowledged: true,
  insertedIds: { '0': ObjectId("620516f5c6fafc8e31a14a0d") }
}
Atlas atlas-b8rgqx-shard-0 [primary] movies> db.movies.insert({title:"The Hobbit:The Battle of the Five Armies",writer:"J.R.R.Tolkein",year:2012,franchise:"The Hobbit",synopsis:"Atlas atlas-b8rgqx-shard-0 [primary] movies>
{
  acknowledged: true,
  insertedIds: { '0': ObjectId("620518b9c6fafc8e31a14a0e") }
}
Atlas atlas-b8rgqx-shard-0 [primary] movies> db.movies.insert({title:"Pee Wee Herman's Big Adventure"})
{
  acknowledged: true,
  insertedIds: { '0': ObjectId("620518f8c6fafc8e31a14a0f") }
}
Atlas atlas-b8rgqx-shard-0 [primary] movies> db.movies.insert({title:"Avatar"})
{
  acknowledged: true,
  insertedIds: { '0': ObjectId("62051923c6fafc8e31a14a10") }
}
Atlas atlas-b8rgqx-shard-0 [primary] movies> db.movies.find()
[
  {
    _id: ObjectId("6204f543c9fc1e36da1da3b8"),
    title: 'fightclub',
    writer: 'chuck palahniuko',
    year: 1999,
    actors: [ 'brad pitt,edward norton' ]
  },
  {
    _id: ObjectId("6204f6bec9fc1e36da1da3b9"),
    title: 'Pulp Fiction',
    writer: 'Quentin Tarantino',
    year: 1994,
    actors: [ 'John Travolta,uma Thurman' ]
  },
  {
    _id: ObjectId("620502f5c6fafc8e31a14a09"),
    title: 'Fight Club',
    writer: 'chuck Palahniuko',
    year: 1999,
    actors: [ 'Brad Pitt,Edward Norton' ]
  },
  {
    _id: ObjectId("620503bbc6fafc8e31a14a0a"),
    title: 'Pulp Fiction',
    writer: 'Quentin Tarantino',
    year: 1994,
    actors: [ 'John Travolta,Uma Thurman' ]
  },
  {
    _id: ObjectId("620504aec6fafc8e31a14a0b"),
    title: 'Inglorious Basterds',
    writer: 'Quentin Tarantino',
    year: 2009,
    actors: [ 'Brad Pitt,Diane Kruger,Eli Roth' ]
  },
  {
    _id: ObjectId("6205160bc6fafc8e31a14a0c"),
    title: 'The Hobbit:An Unexpected Journey',
    writer: 'J.R.R.Tolkein',
    year: 2012,
    franchise: 'The Hobbit'
  },
  {
    _id: ObjectId("620516f5c6fafc8e31a14a0d"),
    title: 'The Hobbit:The Desolation of Smaug',
    writer: 'J.R.R.Tolkein',
    year: 2013,
    franchise: 'The Hobbit'
  },
  {
    _id: ObjectId("620518b9c6fafc8e31a14a0e"),
    title: 'The Hobbit:The Battle of the Five Armies',
    writer: 'J.R.R.Tolkein',
    year: 2012,
    franchise: 'The Hobbit',
    synopsis: 'Bilbo and Company are forced to engage in a war against an array of combatants and keep the Lonely Mountain from falling into the hands of a rising darkness'
  },
  {
    _id: ObjectId("620518f8c6fafc8e31a14a0f"),
    title: "Pee Wee Herman's Big Adventure"
  },
  { _id: ObjectId("62051923c6fafc8e31a14a10"), title: 'Avatar' }
]
Atlas atlas-b8rgqx-shard-0 [primary] movies> db.movies.find({writer:"Quentin Tarantino"})
[
  {
    _id: ObjectId("6204f6bec9fc1e36da1da3b9"),
    title: 'Pulp Fiction',
    writer: 'Quentin Tarantino',
    year: 1994,
    actors: [ 'John Travolta,uma Thurman' ]
  },
  {
    _id: ObjectId("620503bbc6fafc8e31a14a0a"),
    title: 'Pulp Fiction',
    writer: 'Quentin Tarantino',
    year: 1994,
    actors: [ 'John Travolta,Uma Thurman' ]
  },
  {
    _id: ObjectId("620504aec6fafc8e31a14a0b"),
    title: 'Inglorious Basterds',
    writer: 'Quentin Tarantino',
    year: 2009,
    actors: [ 'Brad Pitt,Diane Kruger,Eli Roth' ]
  }
]
Atlas atlas-b8rgqx-shard-0 [primary] movies> db.movies.find({actors:"Brad Pitt"})

Atlas atlas-b8rgqx-shard-0 [primary] movies> db.movies.find({franchise:"The Hobbit"})
[
  {
    _id: ObjectId("6205160bc6fafc8e31a14a0c"),
    title: 'The Hobbit:An Unexpected Journey',
    writer: 'J.R.R.Tolkein',
    year: 2012,
    franchise: 'The Hobbit'
  },
  {
    _id: ObjectId("620516f5c6fafc8e31a14a0d"),
    title: 'The Hobbit:The Desolation of Smaug',
    writer: 'J.R.R.Tolkein',
    year: 2013,
    franchise: 'The Hobbit'
  },
  {
    _id: ObjectId("620518b9c6fafc8e31a14a0e"),
    title: 'The Hobbit:The Battle of the Five Armies',
    writer: 'J.R.R.Tolkein',
    year: 2012,
    franchise: 'The Hobbit',
    synopsis: 'Bilbo and Company are forced to engage in a war against an array of combatants and keep the Lonely Mountain from falling into the hands of a rising darkness'
  }
]
Atlas atlas-b8rgqx-shard-0 [primary] movies> db.movies.find({year:{$lt:2000}})
[
  {
    _id: ObjectId("6204f543c9fc1e36da1da3b8"),
    title: 'fightclub',
    writer: 'chuck palahniuko',
    year: 1999,
    actors: [ 'brad pitt,edward norton' ]
  },
  {
    _id: ObjectId("6204f6bec9fc1e36da1da3b9"),
    title: 'Pulp Fiction',
    writer: 'Quentin Tarantino',
    year: 1994,
    actors: [ 'John Travolta,uma Thurman' ]
  },
  {
    _id: ObjectId("620502f5c6fafc8e31a14a09"),
    title: 'Fight Club',
    writer: 'chuck Palahniuko',
    year: 1999,
    actors: [ 'Brad Pitt,Edward Norton' ]
  },
  {
    _id: ObjectId("620503bbc6fafc8e31a14a0a"),
    title: 'Pulp Fiction',
    writer: 'Quentin Tarantino',
    year: 1994,
    actors: [ 'John Travolta,Uma Thurman' ]
  }
]
Atlas atlas-b8rgqx-shard-0 [primary] movies> db.movies.find({year:{$gt:2010}})
[
  {
    _id: ObjectId("6205160bc6fafc8e31a14a0c"),
    title: 'The Hobbit:An Unexpected Journey',
    writer: 'J.R.R.Tolkein',
    year: 2012,
    franchise: 'The Hobbit'
  },
  {
    _id: ObjectId("620516f5c6fafc8e31a14a0d"),
    title: 'The Hobbit:The Desolation of Smaug',
    writer: 'J.R.R.Tolkein',
    year: 2013,
    franchise: 'The Hobbit'
  },
  {
    _id: ObjectId("620518b9c6fafc8e31a14a0e"),
    title: 'The Hobbit:The Battle of the Five Armies',
    writer: 'J.R.R.Tolkein',
    year: 2012,
    franchise: 'The Hobbit',
    synopsis: 'Bilbo and Company are forced to engage in a war against an array of combatants and keep the Lonely Mountain from falling into the hands of a rising darkness'
  }
]

#UPDATE DOCUMENTS

1 Add a Synopsis to “The Hobbit: An Unexpected Journey”
 db.movies.updateOne({$set: {"synopsis": "A reluctant Hobbit, Bilbo Baggins, sets out to the Lonely Mountain with a spirited group of dwarves to reclaim their mountain home, and the gold within it from the dragon Smaug."}})

2. add a synopsis to "The Hobbit: The Desolation of Smaug"
 db.movies.updateOne({$set: {"synopsis": "The dwarves, along with Bilbo Baggins and Gandalf the Grey, continue their quest to reclaim Erebor, their homeland, from Smaug. Bilbo Baggins is in possession of a mysterious and magical ring."}})

3.	add an actor named "Samuel L. Jackson" to the movie "Pulp Fiction"
 db.movies.updateOne({"title":"Pulp Fiction"},{$addToSet: { actors: "Samuel L. Jackson" }})


#TEXT SEARCH

db.movies.createIndex({synopsis:"text"})

1.	find all movies that have a synopsis that contains the word "Bilbo" 
 db.movies.find({$text:{$search:"Bilbo"}})

2.	find all movies that have a synopsis that contains the word "Gandalf" 
 db.movies.find({$text:{$search:"Gandalf"}})

3.	find all movies that have a synopsis that contains the word "Bilbo" and not the word "Gandalf" 
 db.movies.find({$text:{$search:'Bilbo -Gandalf'}})

4.	find all movies that have a synopsis that contains the word "dwarves" or "hobbit" 
 db.movies.find({$or:[{$text:{$search:'dwarves, hobbit'}}]})

5.	find all movies that have a synopsis that contains the word "gold" and "dragon" 
 db.movies.find({$text:{$search:'gold, dragon'}})


#DELETE DOCUMENTS

1. delete the movie "Pee Wee Herman's Big Adventure" 
 db.movies.remove({"title":"Pee Wee Herman's Big Adventure"})  

2. delete the movie "Avatar" 
 db.movies.remove({"title":"Avatar"})


 #RELATIONSHIPS

use users
'switched to db users'
db.users.insertMany([{
"username" : "GoodGuyGreg",
"first_name" : "Good Guy",
"last_name" : "Greg"
},{
"username" : "ScumbagSteve",
"full_name" : {"first" : "Scumbag","last" : "Steve"}
}])
{ acknowledged: true,
  insertedIds: 
   { '0': ObjectId("620b2fbdc0105b647ac6cf86"),
     '1': ObjectId("620b2fbdc0105b647ac6cf87") }
}


use posts
'switched to db posts'
db.posts.insertMany([{
"username" : "GoodGuyGreg",
"title" : "Passes out at party",
"body" : "Wakes up early and cleans house"
},{
"username" : "GoodGuyGreg",
"title" : "Steals your identity",
"body" : "Raises your credit score"
},{
"username" : "GoodGuyGreg",
"title" : "Reports a bug in your code",
"body" : "Sends you a Pull Request"
},{
"username" : "ScumbagSteve",
"title" : "Borrows something",
"body" : "Sells it"
},{
"username" : "ScumbagSteve",
"title" : "Borrows everything",
"body" : "The end"
},{
 "username" : "ScumbagSteve",
"title" : "Forks your repo on github",
"body" : "Sets to private"
}])
{ acknowledged: true,
  insertedIds: 
   { '0': ObjectId("620b2fefc0105b647ac6cf88"),
     '1': ObjectId("620b2fefc0105b647ac6cf89"),
     '2': ObjectId("620b2fefc0105b647ac6cf8a"),
     '3': ObjectId("620b2fefc0105b647ac6cf8b"),
     '4': ObjectId("620b2fefc0105b647ac6cf8c"),
     '5': ObjectId("620b2fefc0105b647ac6cf8d") } 
}

use comments
'switched to db comments'
db.comments.insert([{"username" : "GoodGuyGreg","comment" : "Hope you got a good deal!","post":"620b2fefc0105b647ac6cf8b"}])
'DeprecationWarning: Collection.insert() is deprecated. Use insertOne, insertMany, or bulkWrite.'
{ acknowledged: true,
  insertedIds: { '0': ObjectId("620b3541c0105b647ac6cf96") } }
db.comments.insertMany([{"username" : "GoodGuyGreg","comment" : "What's mine is yours!","post":"620b2fefc0105b647ac6cf8c"}])
{ acknowledged: true,
  insertedIds: { '0': ObjectId("620b3606c0105b647ac6cf97") } }
db.comments.insertMany([{"username" : "GoodGuyGreg","comment" : "Don't violate the licensing agreement!","post":"620b2fefc0105b647ac6cf8d"}])
{ acknowledged: true,
  insertedIds: { '0': ObjectId("620b367bc0105b647ac6cf98") } }
db.comments.insertMany([{"username" : "ScumbagSteve","comment" : "It still isn't clean","post":"620b2fefc0105b647ac6cf88"}])
{ acknowledged: true,
  insertedIds: { '0': ObjectId("620b3790c0105b647ac6cf99") } }
db.comments.insertMany([{"username" : "ScumbagSteve","comment":"Denied your PR cause i found a hack","post":"620b2fefc0105b647ac6cf8a"}])
{ acknowledged: true,
  insertedIds: { '0': ObjectId("620b385ac0105b647ac6cf9a") } 
}



#QUERYING COLLLECTED COLLECTIONS

1. find all users 
 db.users.find()

2.	find all posts 
 db.posts.find()

3.	find all posts that was authored by "GoodGuyGreg" 
  db.posts.find({"username":"GoodGuyGreg"})

4.	find all posts that was authored by "ScumbagSteve" 
 db.posts.find({"username":"ScumbagSteve"})

5.	find all comments 
 db.comments.find()

6.	find all comments that was authored by "GoodGuyGreg" 
 db.comments.find({"username":"GoodGuyGreg"})

7.	find all comments that was authored by "ScumbagSteve" 
  db.comments.find({"username":"ScumbagSteve"})