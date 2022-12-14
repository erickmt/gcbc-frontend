import { Usuario } from '../models/usuario';

let loginAtual : Usuario | null;
let usuarios : Usuario[] = [{
    nome: "erick",
    senha: "123"
}];

let usuarioDao = {
    logar: function(novoLogin : Usuario) { 
        loginAtual = novoLogin
    },
    
    deslogar: function(){
        loginAtual = null;
    },

    adicionar: function(usuario: Usuario){
        usuarios.push(usuario)
    },

    remover: function(usuario: Usuario){
        usuarios = usuarios.filter(u => u.nome != usuario.nome)
    },

    atual: function(){
        return loginAtual;
    },

    existeUsuario: function(usuario: Usuario){
        return usuarios.filter(u=>u.nome == usuario.nome && u.senha == usuario.senha).length > 0;
    },

    obterTodos: function(){
        return usuarios;
    }
}

export default usuarioDao;