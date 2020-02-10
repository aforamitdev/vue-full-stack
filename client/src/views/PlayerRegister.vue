<template>
  <div class="flex justify-center items-center min-h-screen shadow-xl rounded-sm">
    <div class="flex justify-center bg-white w-1/3 px-2 shadow-md">
      <div class="items-center py-6">
        <div>
          <p class="text-3xl">Player Registration Form</p>
          <p class="text-xl font-hairline">Register to Participate In Upcomming Events</p>
        </div>
        <div class="flex justify-center">
          <div>
            <input type="text" v-model="userData.name" placeholder="Enter Name" class="block border px-2 py-2 my-6 " />
            <input type="email" v-model="userData.email" placeholder="Enter Email" class="block border px-2 py-2 my-6" />
            <input type="password" v-model="userData.password" placeholder="Enter Password" class="block border px-2 py-2 my-6" />
            <input type="password"  placeholder="Enter Password" class="block border px-2 py-2 my-6" />
            <input type="date" v-model="userData.dateOfBirth" placeholder="Date Of Birth" class="block border px-2 py-2 my-6" />
          </div>
        </div>
        <div class="flex justify-between">

        <button @click="onClickregister">Register</button>
        <button><router-link to="/login">Login</router-link> </button>
        {{getData()}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions} from "vuex";
export default {
  name: "PlayerRegisterPage",
  data:()=>{
    return{
      userData:{
        name:"",
        email:"",
        password:"",
        dateOfBirth:"",

      }      
    }
  },
  methods:{
    ...mapActions(["getData","postPlayerData"]),
    onClickregister(){
       this.postPlayerData(this.userData)
    }
  }
};
</script>

<style></style>
