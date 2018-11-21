<template>
  <div id="app">

    <nav>
      <div class="nav-wrapper blue darken-1">
        <a href="#" class="brand-logo center">Itens Front</a>
      </div>
    </nav>

    <div class="container">

      <form>

          <!-- <label>Nome</label>
          <input type="text" placeholder="Nome">
          <label>Quantidade</label>
          <input type="number" placeholder="QTD">
          <label>Valor</label>
          <input type="text" placeholder="Valor">

          <button class="waves-effect waves-light btn-small">Salvar<i class="material-icons left">save</i></button> -->

          <label>Pesquisar</label>
          <input type="text" placeholder="Pesquisar">

      </form>

      <table>

        <thead>

          <tr>
            <th>NOME</th>
            <th>QTD</th>
            <th>VALOR</th>
            <th>OPÇÕES</th>
          </tr>

        </thead>

        <tbody>

          <tr v-for="produto of produtos" :key="produto.Auth">

            <td>{{ produto.name }}</td>
            <td>{{ produto.description }}</td>
            <td>{{ produto.score }}</td>
            
            <td>
              <button class="waves-effect btn-small blue darken-1"><i class="material-icons">create</i></button>
              <button class="waves-effect btn-small red darken-1"><i class="material-icons">delete_sweep</i></button>
            </td>

          </tr>

        </tbody>
      
      </table>

    </div>

  </div>
</template>


<script>
// import HelloWorld from './components/HelloWorld.vue'

// export default {
//   name: 'app',
//   components: {
//     HelloWorld
//   }
// }

import Produto from './services/produtos'

export default {

  data(){
    return {
      produtos:[]
    }
  },

  mounted() {
    Produto.listar().then(resposta =>{
      console.log(resposta.data);
      this.produtos = resposta.data
    });
  },

  created(){

    let promise = this.$http.get('https://api.royaleapi.com/clan/2CCCP');
    promise.then(res => {
      res.json().then(produtos => this.produtos = produtos);
    });
  }

}
</script>

<style>

</style>
