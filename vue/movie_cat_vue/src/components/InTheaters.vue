<template>
  <div class="InTheaters">
    <div class="list">
            <ul>
                <li v-for="item in arr">
                    <a href="#/details">
                        <img :src="item.images.large" alt="">
                    </a>
                    <div class="meta">
                        <h4><span>{{item.title}}</span> <em>9.9分</em></h4>
                        <div class="otherinfo">类型:<span>古装</span></div>
                    </div>
                </li>
            </ul>
            <div class="paging">
                <label>总共：0条记录,第0/0页;</label>
                <!-- 加上disable类样式，表示按钮禁用状态 -->
                <button class="prev disable ">上一页</button>
                <button class="next">下一页</button>
            </div>
        </div>
  </div>
</template>

<script>
export default {
  name: 'InTheaters',
  created(){
    this.page = this.$route.params.page;
    var nowPage = (this.page || '1') - 0;
    this.start = (nowPage - 1) * this.pageSize;
    this.fetchData();
    // this.fetchData();
  },
  methods:{
      fetchData(){
          this.$http.jsonp('http://api.douban.com/v2/movie/in_theaters',{params:{start:this.start,count:this.pageSize}}).then(function(data){
            console.log(data);
            this.arr = data.body.subjects;
          },function(err){

          });
      }
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      arr:[],
      page:1,
      pageSize:10,
      start:0
    }
  }
}
</script>

<style scoped>


</style>
