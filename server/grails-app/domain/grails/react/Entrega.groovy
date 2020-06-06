package grails.react

import grails.rest.*

@Resource(uri='/entrega')
class Entrega {

  String cliente
  String endereco
  double valorReceber
  double troco
  double frete
  int entregador_id
  int loja_id

  static constraints = {
      cliente blank:false
      endereco blank:false
      valorReceber blank:false
      troco blank:false
      frete blank:false
      entregador_id blank:false
      loja_id blank:false
  }

  String toString() {
    cliente
  }
}