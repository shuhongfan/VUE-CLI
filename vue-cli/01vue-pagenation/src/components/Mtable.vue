<template>
  <table class="table">
    <caption>学生基本信息</caption>
    <thead>
    <tr>
      <th v-for="item in title" :key="item">{{item}}</th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="item in newstus" :key="item.name">
      <!--<td>{{item.name}}</td>
      <td>{{item.age}}</td>-->
      <td v-for="val in item" :key="val.name">{{val}}</td>
    </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: 'Mtable',
  props: ['title', 'stus', 'newstus']
}
</script>

<style scoped>

</style>
