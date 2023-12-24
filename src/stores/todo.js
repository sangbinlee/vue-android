import { defineStore } from 'pinia'
// import { ref } from 'vue'
import { ref, computed } from 'vue'

export const useTodoStore = defineStore('todo', () => {


  let nextId = 1 // 굳이 공개할 필요 없는 내부 변수
  const todos = ref([]) // 이런걸 store에서 관리한다는 건 사실 non sense
  const keys = ['all', 'ing', 'done'] // 반응성이 필요 없는 고정 데이터
  const key = ref('all')

  // action에 해당하는 insertTodo와 deleteTodo를 작성해보자.
  // const insertTodo = null, deleteTodo = null
  

//////////////////////////////////////////////////////////////// action 
const insertTodo = (text) => {
  todos.value.push({ id: nextId++, text, isDone: false })
}

const deleteTodo = (id) => {
  for (let i = 0; i < todos.value.length; i++) {
    if (todos.value[i].id === id) {
      todos.value.splice(i, 1)
      break
    }
  }
}






  // getters에 해당하는 needTodoCnt, filteredTodo를 작성해보자.
  // const needTodoCnt = null, filteredTodo = null




//////////////////////////////////////////////////////////////// getters 
const needTodoCnt = computed(() => {
  console.log(`[todo.js] needTodoCnt호출됨:`)
  return todos.value.filter((todo) => !todo.isDone).length
})

const filteredTodo = computed(() => {
  if (key.value == 'all') {
    return todos.value
  } else {
    const done = key.value !== 'ing'
    // const done = key.value === 'ing' ? false : true
    const result = todos.value.filter((todo) => todo.isDone === done)
    return result
  }
})











  
  return { todos, keys, key, insertTodo, deleteTodo, needTodoCnt, filteredTodo }





  // const count = ref(0)
  // const doubleCount = computed(() => count.value * 2)
  // function increment() {
  //   count.value++
  // }

  // return { count, doubleCount, increment }
})
