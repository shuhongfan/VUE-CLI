<template>
  <ul class="pagination">
    <li :class="currentpage<=1?'disabled':''"><a href="#" @click="prev">&laquo;</a></li>
    <li
      :class="currentpage===(index+1)?'active':''"
      v-for="(item,index) in pagecount"
      :key="index">
      <a href="#" @click="setpage(index+1)">{{index+1}}</a>
    </li>
    <li :class="currentpage>=pagecount?'disabled':''"><a href="#" @click="next">&raquo;</a></li>
  </ul>
</template>

<script>
export default {
  name: 'Pagination',
  props: ['count', 'pagesize', 'currentpage'],
  mounted () {
    this.$emit('handlepage', 1)
  },
  methods: {
    setpage (page) {
      this.$emit('handlepage', page)
    },
    prev () {
      if (this.currentpage > 1) {
        this.$emit('handlepage', this.currentpage - 1)
      } else {
        alert('到达第一页啦!!!')
      }
    },
    next () {
      if (this.currentpage < this.pagecount) {
        this.$emit('handlepage', this.currentpage + 1)
      } else {
        alert('到达最后一页啦!!!')
      }
    }
  },
  computed: {
    pagecount () {
      return Math.ceil(this.count / this.pagesize)
    }
  }
}
</script>

<style scoped>

</style>
