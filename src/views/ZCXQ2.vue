<template>
  <div id="ZCXQ">
    <div id='ZC'>
      <p id='ZC1' v-html='html1'></p>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue';

  export default {
    name: "ZCXQ2",
    data() {
      return {
        html1:"",
      };
    },
    mounted(){
      this.load()
    },
    methods: {
      load(){
        // fetch('../assets/1.html')
        //   .then((response)=>{
        //     var h=response.text()
        //     var a=Promise.resolve(h)
        //     // console.log(a)
        //     a.then(function(result){
        //       console.log(typeof(result))
        //       this.html1=result
        //     })
        //   })
        fetch("http://121.196.60.135:1338/data/djkcyzc")
          .then(result => result.json())
          .then(result => {           
            this.html1=result.content
          })
      }
    }
  }
</script>

<!-- 限定局部有效的样式 -->
<style scoped src="../css/ZCXQ2.css">
  
</style>