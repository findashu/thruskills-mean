// Scalar Fields

db.movie.find({name :'ashu'});

db.movie.find({"rating.tomato" : 100})

// Array fields

db.movie.find({"writes": ["Ethan", "Hello"]})