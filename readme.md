### Question 1: What is the purpose of creating a model with an interface and schema in MongoDB? How does it help in defining the structure of a collection?

ans:MongoDB is a schema-less NoSQL document database. It means you can store JSON documents in it, and the structure of these documents can vary as it is not enforced like SQL databases. This is one of the advantages of using NoSQL as it speeds up application development and reduces the complexity of deployments.

### Question 2: Explain the concept of field filtering in MongoDB. How can you specify which fields to include or exclude in the returned documents?

ans: Field filtering in MongoDB can be achieved by using the projection parameter in query operations like find() or findOne(). The projection parameter is an optional argument that allows you to define the fields to include or exclude in the query result.

### Question 3: What are instance methods in MongoDB models? Provide an example of a custom instance method and explain its purpose.

ans: Instance methods are methods that perform some action on a specific instance of a Model rather than the entire Model itself. Methods that perform some action on the entire Model are known as static methods. Static methods are also come in handy in their own share of situations but if you’re looking for some functionality on an individual database entry itself then you’ll be wanting to deal with instance method

### Question 4: How do you use comparison operators like "$ne," "$gt," "$lt," "$gte," and "$lte" in MongoDB queries? Provide examples to illustrate their usage?

ans: $eq-> Matches values that are equal to a specified value.
$gt -> Matches values that are greater than a specified value.
$gte -> Matches values that are greater than or equal to a specified value.
$in -> Matches any of the values specified in an array.
$lt -> Matches values that are less than a specified value.
$lte -> Matches values that are less than or equal to a specified value.
$ne -> Matches all values that are not equal to a specified value.
$nin -> Matches none of the values specified in an array.

### Question 5: What are MongoDB’s “$in” and “$nin” operators? How can you use them to match values against an array of values or exclude values from a given array?

ans: $ne-> selects the documents where the value of the field is not equal to the specified value. This includes documents that do not contain the field.

$nin-> the field value is not in the specified array or the field does not exist.