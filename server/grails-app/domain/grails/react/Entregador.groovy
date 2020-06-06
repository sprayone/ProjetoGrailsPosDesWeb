package grails.react

import grails.rest.*

@Resource(uri='/entregadores')
class Entregador {

  String nome
  String sobrenome
  String telefone

  static constraints = {
      nome blank:false
      sobrenome blank:false
      telefone blank:false
  }

  String toString() {
    nome
  }
}