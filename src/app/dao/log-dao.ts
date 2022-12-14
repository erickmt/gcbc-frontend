import { Log } from "../models/log";

let logs : Log[] = [];
let id = 1;

let logsDao = {
    adicionar : function(log:Log) {
        logs.push(log)
    },

    obterTodos : function(){
        return logs;
    },

    ultimoId: function() {
        return id++;
    }
}

export default logsDao;