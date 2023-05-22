<template>
  <div class="main">
    <h1 class="title">Visitationtion List</h1>
    <div class="parent">
      <div class="column">
        <div class="row">
          <div>
            
            <br />
            <form class="form">
              <Datepicker v-model="date"/>
              <input
                class="input"
                v-model="name"
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
              <button class="submit-button" @click="addVisitation">Add Visit</button>
            </form>
          </div>
          <div>
            <div>
              <GenderSlider gender="Man" />
              <GenderSlider gender="Woman" />
              <GenderSlider gender="Pokemon" />
            </div>
          </div>
          <VisitCamera></VisitCamera>
        </div>
      </div>
      <div class="column">
        <div class="todo-container">
          <ul>
            <li v-for="(visitation, i) in visitations" :key="visitation._id">
              <div class="visitation">
                <span class="visitation-name">{{ visitation.name }}</span>
                <br>
                <span class="visitation-description">{{ visitation.description }}</span>
                <br>
                <span class="visitation-date">{{ visitation.date }}</span>
                <br>
                <span class="visitation-device">{{ visitation.device }}</span>
              </div>
              <button class="delete-btn" @click="removeVisitation(visitation, i)">
                del visitation
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
import VisitCamera from "./components/VisitCamera.vue";

export default {
  name: "App",
  data() {
    return {
      visitations: [],
      date: new Date(),
      name: "",
      description: "",
      device: ""
    };
  },
  async mounted() {
    const response = await axios.get("api/visitationlist/");
    const responseFromBackend = await axios.get("http://localhost:8080/");
    
    console.log("responseFromBackend : ", responseFromBackend.data);
    this.visitations = response.data;
  },
  updated() {
    console.log('app.vue Updated ..');

  },
  methods: {
    async snapshot() {
      console.log('SNAPSHOT!!');

    },
    async addVisitation(e) {
      e.preventDefault();
      const response = await axios.post("api/visitationlist/", {
        date: new Date(),
        name: this.name,
        description: this.description,
        device: "COMP"
      });
      console.log("Inside addVisitation: ", response.data);
      this.visitations.push(response.data);
      this.date = new Date();
      this.name = "";
      this.description = "";
      this.device = "";
    },
    async removeVisitation(item, i) {
      await axios.delete("api/visitationlist/" + item._id);
      this.visitations.splice(i, 1);
    },
  },
  components: { Datepicker, GenderSlider, VisitCamera },
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
  height: fit-content;
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
  max-width: 100%;
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
  margin-right: 10%;
  cursor: pointer;
  border: 2px solid #a4e4cb;
  border-radius: 4px;
  font-family: Sevastopol;
  font-size: 1.2em;
}
.parent {
  display: grid;
  grid-template-columns: 1fr repeat(1, 1fr);
  grid-template-rows: repeat(1, 1fr);
  grid-column-gap: 50px;
  grid-row-gap: 50px;
}
</style>
