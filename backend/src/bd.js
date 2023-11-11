const connection = require("../bd_con")
const QueryGenerator = require("./requete_generator")

class BD {
    static className = "BD"
    static exec(query,_callback,_catch) {
      try {
        connection.query(query, function (error, results, fields) {
          if(error) return;
          _callback(results);
        });  
      } catch (error) {
         console.log("ERROR: ", error);_catch(error);return;
      }
    }

    static exec_withParams(query,values,_callback,_catch) {
      try {
        connection.query(query, values, function (error, results, fields) {
          if(error) return;
          _callback(results);
        });
       } catch (error) {
         console.log("ERROR: ", error);_catch(error);return;
       }
    }

    static select = (_callback,_catch,tables,columns,conditions="",endquery="") =>{
      
		  let query = QueryGenerator.select(tables,columns,conditions,endquery);
      console.log("selecting["+tables.toString()+"]: BD select exec...");
      this.exec(query,_callback,_catch);
    }

    static select_one = (_callback,_catch,table,columns,conditions="",endquery="") =>{
      
		  let query = QueryGenerator.select(table,columns,conditions,endquery)
      console.log("selecting_one["+table+"]: BD select exec...");
      this.exec(query,_callback,_catch)
    }

    static insert = (_callback,_catch,table,columns,values) => {
      
      let query = QueryGenerator.insert(table,columns);
      console.log("putting["+table+"]: BD insert exec...");
      this.exec_withParams(query,values,_callback,_catch)
    }

    static delete = (_callback,_catch,table, conditions="") => {
      let query= QueryGenerator.delete(table, conditions)
      console.log("deleting["+table+"]: BD delete exec...");
      this.exec(query,_callback,_catch)
    }

    static update = (_callback,_catch,table,columns,values,conditions="") => {
      let query = QueryGenerator.update(table,columns,conditions);
      console.log("updating["+table+"]: BD update exec...");
      this.exec_withParams(query, values, _callback,_catch)
    }

    static select_count = (_callback,_catch,tables,column="*",conditions="") => {
      let query = QueryGenerator.select_count(tables,column,conditions);
      console.log("selecting_count["+tables.toString()+"]: BD select exec...");
      this.exec(query,_callback,_catch)
    }
    
    static search = (_callback,_catch,tables,columns=["*"],searchColumns=[],keys=[],conditions="",start=-1,limit=-1,endquery="") => {
      let query = QueryGenerator.search(_callback, _catch, tables, columns, searchColumns,
        keys, conditions, start, limit, endquery);
      console.log("searching["+tables.toString()+"]: BD search exec...");
      var keys_complete = [...keys];
      var len = keys_complete.length;
      keys_complete[len] = start;
      keys_complete[len+1] = limit;
      console.log("limit: "+limit + " - " + keys_complete);
      this.exec_withParams(query,keys_complete,_callback,_catch);
    }
}
module.exports = BD
