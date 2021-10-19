<template>
	<div id="root">
		<div class="todo-container">
			<div class="todo-wrap">
				<MyHeader @addTodo="addTodo"/>
				<MyList :todos="todos"/>
				<MyFooter :todos="todos" @checkAllTodo="checkAllTodo" @clearAllTodo="clearAllTodo"/>
			</div>
		</div>
	</div>
</template>

<script>
	// 引入pubsub库
	import pubsub from 'pubsub-js';
	import MyHeader from './components/MyHeader'
	import MyList from './components/MyList'
	import MyFooter from './components/MyFooter.vue'

	export default {
		name:'App',
		components:{MyHeader,MyList,MyFooter},
		data() {
			return {
				//由于todos是MyHeader组件和MyFooter组件都在使用，所以放在App中（状态提升）
				// todos:[
				// 	{id:'001',title:'抽烟',done:true},
				// 	{id:'002',title:'喝酒',done:false},
				// 	{id:'003',title:'开车',done:true}
				// ]
				todos:JSON.parse(localStorage.getItem("todos")) || []
			}
		},
		watch:{
			todos:{
				deep:true,
				handler(value){
					localStorage.setItem("todos",JSON.stringify(value))
				}
			}
		},
		methods: {
			//添加一个todo
			addTodo(todoObj){
				this.todos.unshift(todoObj)
			},
			//勾选or取消勾选一个todo
			checkTodo(id){
				this.todos.forEach((todo)=>{
					if(todo.id === id) todo.done = !todo.done
				})
			},
			//删除一个todo
			deleteTodo(msgName,id){
				this.todos = this.todos.filter( todo => todo.id !== id )
			},
			//全选or取消全选
			checkAllTodo(done){
				this.todos.forEach((todo)=>{
					todo.done = done
				})
			},
			//清除所有已经完成的todo
			clearAllTodo(){
				this.todos = this.todos.filter((todo)=>{
					return !todo.done
				})
			},
			// 编辑更新Todo
			updateTodo(id,title){
				this.todos.forEach((todo) => {
					if(todo.id === id) todo.title = title
				});
			}
		},
		mounted() {
			this.$bus.$on('checkTodo',this.checkTodo)
			this.$bus.$on('updateTodo',this.updateTodo)
			// this.$bus.$on('deleteTodo',this.deleteTodo)
			pubsub.subscribe("deleteTodo",this.deleteTodo)
		},
		// 解绑
		beforeDestroy() {
			this.$bus.$off(['checkTodo','deleteTodo'])
		},
	}
</script>

<style>
	/*base*/
	body {
		background: #fff;
	}
	.btn {
		display: inline-block;
		padding: 4px 12px;
		margin-bottom: 0;
		font-size: 14px;
		line-height: 20px;
		text-align: center;
		vertical-align: middle;
		cursor: pointer;
		box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
		border-radius: 4px;
	}
	.btn-danger {
		color: #fff;
		background-color: #da4f49;
		border: 1px solid #bd362f;
	}
	.btn-danger:hover {
		color: #fff;
		background-color: #bd362f;
	}
	.btn-edit {
		color: #fff;
		background-color: #18be3c;
		border: 1px solid #41811c;
		margin-right: 5px;
	}
	.btn-edit:hover {
		color: #fff;
		background-color: #087a21;
	}
	.btn:focus {
		outline: none;
	}
	.todo-container {
		width: 600px;
		margin: 0 auto;
	}
	.todo-container .todo-wrap {
		padding: 10px;
		border: 1px solid #ddd;
		border-radius: 5px;
	}
</style>
