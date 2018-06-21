# MongoDB installation and basic command lines

## Download and install MongoDB 

1. download msi file from the following address

https://www.mongodb.com/download-center

2. Go to "Community Server"

3. Select the version corresponding to your operating system, for me I used windows

4. Click on the Download(msi) button

5. Open the msi file after downloading, follow the installation instruction

6. At the end of installation, uncheck the box "install compass" otherwise the installation will fail

## Set up configuration files for MongoDB

1. Change directory to the path where you installed mongoDB, for me I installed mongoDB in C:\mongodb

2. Create a new directory "data" under C:\mongodb, a new directory "db" under C:\mongodb\data, a new directory log under C:\mongodb

3. Run the following command lines in terminal as admin (search for cmd in windows applications and hit ctrl + shift + enter to run as admin)

```

C:\mongodb\bin>mongod --directoryperdb --dbpath C:\mongodb\data\db --logpath C:\mongodb\log\mongo.log --logappend --install

```
4. Run the following command line to start mongoDB service

```
C:\mongodb\bin>net start MongoDB

```

If service is running you should see the following response

```
The MongoDB service is starting.
The MongoDB service was started successfully.
```

5. Run the following command line to open mongoDB Shell

```
C:\mongodb\bin>mongo

```

## Basic commands

* mongod

mongod runs the exe file in the bin folder

* mongo

mongo opens mongoDB Shell

* help

to see all the available commands and how to use them

* show dbs

see all the available databases

* use

create a new db and switch to that db

* db.createCollection('collection_name')

create new collection in a specific db

* db.collection.insert({object})

insert items into certain collection

* db.collection.find({optional arg})

no arguments will return all items in this colleciton, given argument will return the corresponding subsets. argument could be {name: "John"}

* db.collection.update({key to find the item})

updates existing item

* db.collection.remove({key to find the item})

remove existing item

* db.collection.drop()

will delete everything in that collection

## Mongoose introduction

Mongoose provides a straight-forward, schema-based solution to model your application data. It includes built-in type casting, validation, query building, business logic hooks and more, out of the box.