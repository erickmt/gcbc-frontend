import { Evento } from '../models/evento';

var eventos : Evento[] = [];
let eventoDao = {
    
    remover: function(id : number) {
        eventos = eventos.filter(e=>e.id != id);
    },

    adicionar: function(evento : Evento){
        eventos.push(evento);
    },

    obterTodos : function(){
        return eventos;
    },

    obter: function(id : number){
        return eventos.find(x=> x.id == id);
    }
}
export default eventoDao;