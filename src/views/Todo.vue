<template>
  <div class="left">
    <table>
      <tr><th>no</th> <th>text</th> <th>done</th> <th>삭제</th></tr>
      <tr v-for="(todo, id) in todoStore.filteredTodo" :key="id">
        <td>{{ todo.id }}</td>
        <td>{{ todo.text }}</td>
        <td><input type="checkbox" v-model="todo.isDone" /></td>
        <td><button @click="todoStore.deleteTodo(todo.id)">삭제</button></td>
      </tr>
    </table>
  </div>


  <div class="right">
    <label>새 할일: <input v-model="newTodo" /></label>
    <button @click="todoStore.insertTodo(newTodo)">등록</button> <hr />
    <label>처리할 일 개수: {{ todoStore.needTodoCnt }}</label> <hr />
    <label>상태별 필터링:</label>
    <select v-model="todoStore.key">
      <option :value="key" v-for="key in todoStore.keys" :key="key">{{ key }}</option>
    </select>
  </div>

</template>



<script setup>
import { useTodoStore } from '@/stores/todo.js'
const todoStore = useTodoStore()
console.log(`[TodoList.vue] todoStore:`, todoStore)
console.log(`[TodoList.vue] todos:`, todoStore.todos)
console.log(`[TodoList.vue] todos:`, todoStore.keys)
console.log(`[TodoList.vue] todos:`, todoStore.key)










</script>





<style>
/* @media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
} */
</style>
