const db = require('./../db/db');

modelMethods = {

    primaryKey: 1,
  
    addShoe: function(name, year, description) {
  
      let newShoeEntry = {
        id: this.primaryKey,
        "name": name,
        "year": year,
        "description": description
      };
  
      db[this.primaryKey] = newShoeEntry;
      this.primaryKey++;
  
    },
  
    getAllShoes: function() {
      return db;
    },
  
    getShoe: function(id) {
      return db[id];
    },
  
    updateShoe: function(id, name, year, description) {
  
       db[id] = {
            id,
            name,
            year, 
            description
        };

    },
  
    deleteShoe:  function(id) {
      delete db[id]
    }
  
  };
  
  module.exports = modelMethods;
  