<template>
  <div id="main-wrapper">
    <div class="wrapper style2">
      <div class="inner">
        <div class="container">
          <div id="content">
            <!-- Content -->

            <article>
              <header class="major">
                <h2>Ma Collection</h2>
              </header>
              <!--<tbody>
          <tr v-for="movie in movies" :key="movie.id">
              <td>{{movie.id}}</td>
              <td>{{movie.title}}</td>
              <td>{{movie.release_date}}</td>
              <td @click="goToFilmsDetails(movie.id)">👀</td>
          </tr>
              </tbody>
              <div class="card-list" v-for="card in cards" :key="card.id">
                <div class="card-title"><b>{{cards.id}}</b> Card Title</div>
                <div class="card-action"><a href="#">👀</a></div>
              </div> -->
              <div class="card-list" v-for="card in magic" :key="card.id">
                <div class="card-title"><b>{{card.id}}</b> {{card.name}}</div>
                <div class="card-action"><a>👀</a></div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: "MagicColl",
  data:()=>({
    magic:[]
}),
methods:{
    goToCardsDetails(cardsId){
        this.$router.push({name: 'cardDetails' , params: {cardsId}})
    }
},
async created(){
let magic = await axios.get("https://api.magicthegathering.io/v1/cards")
this.magic = magic.data
console.log('CREATED');
}
};
</script>

<style scoped>
</style>
