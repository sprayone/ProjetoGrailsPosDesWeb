package grails.react

import grails.rest.*

@Resource(uri='/loja')
class Loja {

  String nome
  String telefone
  String email

  static constraints = {
      nome blank:false
      telefone blank:false
      email blank:false
  }

  String toString() {
    nome
  }
}