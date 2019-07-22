
<style scoped>
  h2{
    text-align: center;
    padding: 30px;
    font-size: 18px;
  }
  #chart_example{
    width: 50%;
    height: 500px;
    border: 1px solid red;
    margin: 0 auto;
  }
</style>
<template>
  <div>
    <h2> {{ title }} </h2>

  </div>
</template>

<script >
export default {
  data() {
    return { 'title': 'test-axios' }
  },
  mounted: function() {
    console.log('RUNED')
    const url = 'http://localhost:3322/cso/mg/user/login'
    const params = {
      username: 'admin001',
      password: '112233..'
    }
    this.$ajax.post(url, params).then(function(res) {
      console.log(res)
      this.title = res.token
    }).catch(function(err) {
      console.log(err)
    })
  }
}
</script>
