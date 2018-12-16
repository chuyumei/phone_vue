<template>
    <div id="" v-if="list.length">
			<table class="table_border">
				<thead>
					<tr class="tip">
						<th>全选<input type="checkbox" @click="handleChecked()" v-model="allChecked"/></th>
						<th>商品编号</th>
						<th>商品名称</th>
						<th>商品单价</th>
						<th>购买数量</th>
						<th>小计</th>
						<th>操作</th>
					</tr>
				</thead>
				<tbody>
					<tr v-for="(item,index) in list">
						<td><input type="checkbox" v-model="item.checked"  name="all"/></td>
						<td>{{ index + 1}}</td>
						<td>{{ item.name }}</td>
						<td>￥{{ item.price }}</td>
						<td>
							<button @click="handleReduce(index)" :disabled="item.count===1">-</button>
							<input type="text" v-model="item.count" readonly="readonly" />
							<button @click="handleAdd(index)">+</button>
						</td>
						<td>￥{{ item.Stotal }}</td>
						<td>
							<el-button @click="handleRemove(index)" type="danger" icon="el-icon-delete" circle></el-button>
						</td>
					</tr>
					<tr>
						<td colspan="4"></td>
						<td colspan="3">
							总价 ：￥
							<span v-if="displayMoney=true">{{totalPrice}}</span>
							<span v-else="displayMoney=false">0</span>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
		<div id="" v-else>
			购物车为空
		</div>
</template>

<script>
   

    export default {
        data(){
            return {
                //全选
				allChecked:false,
				//总计一栏是否显示的标记
				displayMoney: false,
				//  	购物清单
				list: [{
					    checked:false,
						id: 1,
						name: '发动机',
						price: 180,
						count: 1,
						Stotal: 180
					},
					{
						checked:false,
						id: 2,
						name: '燃油机',
						price: 200,
						count: 1,
						Stotal: 200
					},
					{
						checked:false,
						id: 3,
						name: '滤清',
						price: 500,
						count: 1,
						Stotal: 500
					}
				]
            }
        },
  methods: {
      handleChecked: function(item) {
				//全选
				if(this.allChecked==false) {
					for(var i = 0; i < this.list.length; i++) {
						var item = this.list[i];
						item.checked = true;
					}
				} else {  //取消全选
					for(var i = 0; i < this.list.length; i++) {
                        var item = this.list[i];
						item.checked = false;
					}
				}
				this.allChecked = !this.allChecked;
			}
  }
}
</script>



<style scoped>

</style>