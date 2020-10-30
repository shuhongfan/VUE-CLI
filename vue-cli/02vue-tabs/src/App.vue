<template>
  <div id="app">
    <div class="box">
      <ul>
        <li>
          <router-link to="/arrearage">待付款</router-link>
        </li>
        <li>
          <router-link to="/unprocessed">待发货</router-link>
        </li>
        <li>
          <router-link to="/dispatched">待收货</router-link>
        </li>
      </ul>
      <router-view></router-view>
    </div>
  </div>
</template>

<style scoped>
*{
  padding: 0;
  margin: 0;
}
.box{
  width: 500px;
  height: 500px;
  border: 2px solid red;
  margin: 0 auto;
}
ul{
  display: flex;
}
li{
  flex: 1;
  list-style: none;
  height: 50px;
  line-height: 50px;
  text-align: center;
  border-right: 2px solid red;
  border-bottom: 2px solid red;
}
li:last-child{
  border-right: none;
}
a{
  text-decoration: none;
  display: block;
  width: 100%;
  height: 100%;
}
.router-link-active{
  background-color: greenyellow;
}
</style>
