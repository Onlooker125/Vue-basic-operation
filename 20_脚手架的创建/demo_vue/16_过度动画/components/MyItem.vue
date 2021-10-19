<template>
  <transition name="Item" appear>
    <li>
      <label>
        <input
          type="checkbox"
          :checked="todo.done"
          @change="handleCheck(todo.id)"
        />
        <!-- 如下代码也能实现功能，但是不太推荐，因为有点违反原则，因为修改了props -->
        <!-- <input type="checkbox" v-model="todo.done"/> -->
        <span v-show="!todo.isEdit">{{ todo.title }}</span>
        <!-- 编辑框 -->
        <input
          type="text"
          v-show="todo.isEdit"
          :value="todo.title"
          @blur="editBlur(todo, $event)"
          ref="editFocus"
        />
      </label>
      <button class="btn btn-danger" @click="handleDelete(todo.id)">
        删除
      </button>
      <button class="btn btn-edit" @click="handleEdit(todo)">编辑</button>
    </li>
  </transition>
</template>

<script>
// 引入pubsub库
import pubsub from "pubsub-js";
export default {
  name: "MyItem",
  //声明接收todo
  props: ["todo"],
  methods: {
    //勾选or取消勾选
    handleCheck(id) {
      //通知App组件将对应的todo对象的done值取反
      // this.checkTodo(id)
      this.$bus.$emit("checkTodo", id);
    },
    //删除
    handleDelete(id) {
      if (confirm("确定删除吗？")) {
        //通知App组件将对应的todo对象删除
        // this.deleteTodo(id)
        // this.$bus.$emit("deleteTodo", id);
        // 消息发布
        pubsub.publish("deleteTodo", id);
      }
    },
    // 编辑
    handleEdit(todo) {
      // eslint-disable-next-line no-prototype-builtins
      if (todo.hasOwnProperty("isEdit")) {
        todo.isEdit = true;
      } else {
        this.$set(todo, "isEdit", true);
      }
      this.$nextTick(function () {
        this.$refs.editFocus.focus();
      });
    },
    // 编辑输入框失去焦点回调
    editBlur(todo, e) {
      todo.isEdit = false;
      if (!e.target.value.trim()) {
        return alert("输入不能为空");
      }
      this.$bus.$emit("updateTodo", todo.id, e.target.value);
    },
  },
};
</script>

<style scoped>
/*item*/
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  display: none;
  margin-top: 3px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}

li:hover {
  background-color: #ddd;
}

li:hover button {
  display: block;
}
/* 过度动画 */
.Item-enter-active{
		animation: TodoItem 0.5s linear;
	}

	.Item-leave-active{
		animation: TodoItem 0.5s linear reverse;
	}

	@keyframes TodoItem {
		from{
			transform: translateX(100%);
		}
		to{
			transform: translateX(0px);
		}
	}
</style>