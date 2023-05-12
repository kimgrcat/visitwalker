<template>
  <div class="main">
    <h1 class="title">Visitationtion List</h1>
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
            <div>
              <GenderSlider gender="Man" />
              <GenderSlider gender="Woman" />
              <GenderSlider gender="Pokemon" />
            </div>
          </div>
        </div>
      </div>
      <div class="column">
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
@font-face {
  font-family: "Sevastopol";
  src: url("./assets/fonts/Sevastopol-Interface.ttf") format("truetype");
}
.custom-font {
  font-family: Sevastopol;
}
.title {
  font-size: 2.45em;
  padding: 20px;
  margin: 40px;
}
.main {
  padding: 40px;
  margin: -10px;
  background-color: rgb(8, 14, 10);
  color: #a4e4cb;
  font-family: Sevastopol;
  font-size: 1.5em;
  border: 2px solid #a4e4cb;
  opacity: 97%;
}

.form {
  display: flex;
  flex-direction: column;
  align-items: left;
}

h3 {
  font-size: 22px;
  font-weight: bold;
  text-align: left;
}

.input {
  background-color: rgb(8, 14, 10);
  color: #a4e4cb;
  width: 60%;
  margin: 10px;
  border: 2px solid #a4e4cb;
  padding-top: 10px;
  padding-bottom: 10px;
  margin-left: 10px;
}

.submit-button {
  background-color: rgb(8, 14, 10);
  width: 30%;
  color: #a4e4cb;
  padding: 20px;
  margin: 10px;
  cursor: pointer;
  border: 2px solid #a4e4cb;
}

.todo-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 2px solid #a4e4cb;
  border-radius: 3px;
  margin: 10px;
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
  font-size: 1.5em;
  font-weight: bold;
}

.todo-description {
  max-width: 70%;
  opacity: 70%;
  font-size: 1.3em;
}

.delete-btn {
  background-color: rgb(8, 14, 10);
  color: #a4e4cb;
  padding: 10px;
  cursor: pointer;
  border: 2px solid #a4e4cb;
  border-radius: 4px;
  font-family: Sevastopol;
  font-size: 1.2em;
}
.parent {
  display: grid;
  grid-template-columns: 1fr repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 50px;
  grid-row-gap: 50px;
}
</style>
