<template>
  <div id="app">
    <div class="container text-center">
      <mtable :title="title" :stus="stus" :newstus="newstus"></mtable>
      <Pagination
        @handlepage="handlepage"
        :count="count"
        :currentpage="currentpage"
        :pagesize="pagesize"></Pagination>
    </div>
  </div>
</template>

<script>
import Pagination from '@/components/Pagination'
import Mtable from '@/components/Mtable'

export default {
  name: 'App',
  data () {
    return {
      title: ['姓名', '年龄'],
      stus: [
        {
          name: '张三',
          age: 18
        },
        {
          name: '李四',
          age: 20
        },
        {
          name: '王五',
          age: 16
        },
        {
          name: '赵六',
          age: 14
        },
        {
          name: '哈哈哈',
          age: 12
        }
      ],
      pagesize: 2,
      currentpage: 1,
      newstus: []
    }
  },
  methods: {
    handlepage (page) {
      this.currentpage = page
      this.newstus = this.stus.slice((this.currentpage - 1) * this.pagesize, this.pagesize * this.currentpage)
    }
  },
  computed: {
    count () {
      return this.stus.length
    }
  },
  components: {
    Mtable,
    Pagination
  }
}

</script>

<style scoped>

</style>
