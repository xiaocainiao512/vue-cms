<template>
	<div>
		<mt-swipe :auto="4000">
		  <mt-swipe-item v-for="item in lunbotuList" :key="item.url">
		  	<img :src="item.img" alt="">
		  </mt-swipe-item>
		</mt-swipe>
	    <ul class="mui-table-view mui-grid-view mui-grid-9">
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4"><a href="#">
                    <span class="mui-icon mui-icon-home"></span>
                    <div class="mui-media-body">新闻资讯</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4"><a href="#">
                    <span class="mui-icon mui-icon-email"><span class="mui-badge">5</span></span>
                    <div class="mui-media-body">图片分享</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4"><a href="#">
                    <span class="mui-icon mui-icon-chatbubble"></span>
                    <div class="mui-media-body">商品购买</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4"><a href="#">
                    <span class="mui-icon mui-icon-location"></span>
                    <div class="mui-media-body">留言反馈</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4"><a href="#">
                    <span class="mui-icon mui-icon-search"></span>
                    <div class="mui-media-body">视频专区</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4"><a href="#">
                    <span class="mui-icon mui-icon-phone"></span>
                    <div class="mui-media-body">联系我们</div></a></li>
        </ul> 
	</div>
</template>

<script>

	export default{
		data(){
			return{
				lunbotuList:[
					{url:'1',img:'https://ss1.baidu.com/9vo3dSag_xI4khGko9WTAnF6hhy/image/h%3D300/sign=77d1cd475d43fbf2da2ca023807fca1e/9825bc315c6034a8ef5250cec5134954082376c9.jpg'},
					{url:'2',img:'https://ss1.baidu.com/9vo3dSag_xI4khGko9WTAnF6hhy/image/h%3D300/sign=ad628627aacc7cd9e52d32d909032104/32fa828ba61ea8d3fcd2e9ce9e0a304e241f5803.jpg'},
					{url:'3',img:'https://ss1.baidu.com/-4o3dSag_xI4khGko9WTAnF6hhy/image/h%3D300/sign=907f6e689ddda144c5096ab282b6d009/dc54564e9258d1092f7663c9db58ccbf6c814d30.jpg'}

				]
			}
		},
		methods:{
			/*getLunbotu(){
				this.$http.get("http://vue.studyit.io/api/getlunbo").then(result=>{
					if(result.body.status==0){
						this.lunbotuList = result.body.message;
					}else{
						Toast({
						  message: '获取轮播数据失败！',
						  position: 'middle',
						  duration: 1000
						});
					}
				})
			}*/
		},
		created(){
			//this.getLunbotu();
		}
	}
</script>
<style lang="scss" scoped>
	.mint-swipe{
		height:400px;
		.mint-swipe-item{
			&:nth-child(1){
				background-color:red;
			}

			&:nth-child(2){
				background-color:green;
			}

			&:nth-child(3){
				background-color:blue;
			}
			img{
				width:100%;
				height:100%;
			}
		}
	}
	.mui-grid-view.mui-grid-9{
		background-color:#fff;
		li{
			border-width:0px;
		}
	}
</style>