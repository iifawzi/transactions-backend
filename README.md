# Transactions
Time is money, save both.

## Goal 

Building a system following the Domain driven design techniques might take some time at first,
but for real, it will be a deal breaker in the future! What really matters in the end,
is not the framework or the database we're currently using, but instead, the `use cases`. 

The use cases is the logic that makes our program do what it's supposed to do. 

if our program is coupled, tied to a external resource, like a database for example, then when that resource changes, we would need to change our entire code 
including the core logic, because everything is coupled, which's a huge mess that could be avodied.

The goal is to make it simple and clear, the `use cases` (bussiness needs / domain ) is the most important layer
and it must be independent from anything else, all the concrete details can be built on top of that layer.
By following this, whenever we want to change any resource of the infrastructure or the presentation, 
like the db, or whether we should use REST or GraphQL, we wouldn't need to change anything related to the domain, 
and the changes will be just a matter of some new files, that will not affect the core bussiness logic, Thanks to the abstractions!

Using these abstractions and layers would also help us in testing, making the code more modular and easy to be read and improved. 

- ### Domain
  The domain is the core of our system, this's when we ask our bussiness experts, what do you know about the model?
  we will be adding our entities that represent the core bussiness model, and  also the use cases
  which're explaining the operations that could be made on these entities. 

  so, for the task, we have `Transaction` entity that represent the transactions in the real world,
  and you will notice here that it doesn't need to know anything about how the data is actually stored,
  (no foreign keys, relations, or anything!).
  
  We then have the Transactions `useCases`, as mentioned earlier it explains what operations can be made
  on the transactions, in our task, it's just the `GetAllTransactions` functionality. 

  This layer knows nothing about the other layers. More specifically, the other layers manage this layer. 

- ### Data
  The data layer is where we will be storing our business logic, there you'll find the concrete implementation 
  of the useCases, `transactionServices` in our case. 
  
  The most important point here is that, our services shouldn't depend on any external layers like databases for example. 
  In order to achieve such a level of decoupling we need to apply the `Dependency inversion principle`, one of the SOLID principles. 


  Basically, we will invert the dependency of our service by applying an interface on the class constructor. This is gonna
  allow us substitute the implementation of the class. Because from our service's point of view, it does not matter if our 
  data is being stored in `PostgreSQL`, `MongoDB` or even `locally`, as long as we have a class that `implements the interface` and provides the methods we need
  everything is supposed to work. 
  
  And here, we've applied another SOLID principle, `The Liskov Substitution` principle.

- ### Infra
  The infrastructure layer is where we talk to the outside world to provide some features. Usually, the concrete 
  implementation for our repositories will be found here, Once again, here we can have as many implementations as we want. 
  
  This is really important feature, because we don't even need a real database when testing or developing our application. 
  We can create a class in memory that implements the interface of the repository and passes it to the service. 
  And, as long as our fake repository implements all the interface methods, everything is going to work as expected. 
  Later on, adapting a real database is as simple as creating another repository class that implements the same interface and pass it to the service 
  instead of the fake one.


- ### Presentation
  Here is the place where we finally calling the concrete implementations of our useCases and let the magic happens.
  
  Thanks to the levels of abstractions mentioned above, we can have as much presentations techniques as we wish, 
  without affecting any of the other layers, for example here, we're using Apollo server, but at anytime in the future
  if we decided to move to REST API, this wouldn't require more than creating a presentation class for it! 

- ### Types
  Types is not one of the core domain driven design layers, i'm just using it to have some types shared among the layers. 

## Installation

- ### Manual Setup: 
You must have a postgre instance in your device, then you can just change the URI of the database at the env file and
the `src/infra/seed.sh` file, then: 
  - `npm install`
  - `npm run prepareDatabase`
  - `npm run start`
<br/>
And enjoy!
