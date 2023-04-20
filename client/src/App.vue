<template>
  <div class="main">
    <h3>Visitationtion List</h3>
    <div class="parent">
      <div class="row">
        <div class="column">
          <Datepicker />

          <div>
            <br />
            <form class="form">
              <input
                class="input"
                v-model="title"
                type="text"
                name="name"
                placeholder="Enter Name"
              />
              <br />
              <input
                class="input"
                v-model="description"
                type="text"
                name="description"
                placeholder="Enter Descriptiontion"
              />
              <br />
              <button class="submit-button" @click="addTodo">Add Visit</button>
            </form>
          </div>
          <div>
            <div class="todo-container">
              <ul>
                <li v-for="(todo, i) in todos" :key="todo._id">
                  <div class="todo">
                    <span class="todo-name">{{ todo.title }}</span>
                    <span class="todo-description">{{ todo.description }}</span>
                  </div>
                  <button class="delete-btn" @click="removeTodo(todo, i)">
                    DELETE TODO
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="column">
        <div>
          <GenderSlider gender="Man" />
          <GenderSlider gender="Woman" />
          <GenderSlider gender="Pokemon" />
          <GenderSlider gender="CSS magician" />
          <GenderSlider gender="Alien" />
          <GenderSlider gender="Orc" />
          <GenderSlider gender="Goblin" />
          <GenderSlider gender="Ethereal" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Datepicker from "./components/Date-picker.vue";
import GenderSlider from "./components/GenderSlider.vue";
export default {
  name: "App",
  data() {
    return {
      todos: [],
      description: "",
      title: "",
    };
  },
  async mounted() {
    const response = await axios.get("api/todoList/");
    this.todos = response.data;
  },
  methods: {
    async addTodo(e) {
      e.preventDefault();
      const response = await axios.post("api/todoList/", {
        title: this.title,
        description: this.description,
      });
      this.todos.push(response.data);
      this.title = "";
      this.description = "";
    },
    async removeTodo(item, i) {
      await axios.delete("api/todoList/" + item._id);
      this.todos.splice(i, 1);
    },
  },
  components: { Datepicker, GenderSlider },
};
</script>

<style>
.main {
  margin: 5px;
  margin-top: 3rem;
}

.form {
  display: flex;
  flex-direction: column;
  align-items: center;
}

h3 {
  font-size: 22px;
  font-weight: bold;
  text-align: center;
}

.input {
  width: 60%;
  margin-top: 10px;
  padding: 10px;
}

.submit-button {
  width: auto;
  padding: 10px;
  margin-top: 20px;
  background-color: #1976d2;
  color: white;
  cursor: pointer;
}

.todo-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.todo-container ul {
  width: 100%;
  list-style: none;
  padding: 0;
}

.todo-container ul li {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  border-bottom: 1px solid #e0e0e0;
}

.todo {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 10px;
  max-width: 250px;
}

.todo-name {
  font-size: 18px;
  font-weight: bold;
}

.todo-description {
  max-width: 70%;
  font-size: 14px;
}

.delete-btn {
  background-color: #f44336;
  color: white;
  padding: 10px;
  cursor: pointer;
  border: none;
}
.parent {
  display: grid;
  grid-template-columns: 1fr repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 50px;
  grid-row-gap: 50px;
}
</style>
