<template>
    <h1>Esta es la vista de SignUp/In</h1>
    <h4>Register and start to organize your tasks</h4>
    <form>
        <div class="formContainer">
            <label for="name" class="label">
                Enter your name:
                <input
                type="text"
                name="name"
                id="name"
                v-model="name"
                class="input"
                />
            </label>
            <label for="email" class="label">
                Enter your email:
                <input
                type="text"
                name="email"
                id="email"
                v-model="email"
                class="input"
                />
            </label>
            <label for="password" class="label">
                Enter your Password:
                <input
                type="password"
                name="password"
                id="password"
                v-model="password"
                class="input"
                />
            </label>
            <label for="passwordRepeat" class="label">
                Confirm your password:
                <input
                type="password"
                name="passwordRepeat"
                id="passwordRepeat"
                v-model="confirm"
                class="input"
                />
            </label>
        </div>
    </form>
    <button @click="handleSignUp">Sign Up</button>
    <p>Have registered already?</p><router-link to="/login">Click here</router-link>
</template>

<script>
import userStore from '@/store/user';
import { mapState, mapActions } from 'pinia';

export default {
  name: 'AuthView',
  data() {
    return {
      name: '',
      email: '',
      password: '',
      confirm: '',
    };
  },
  computed: {
    ...mapState(userStore, ['user']),
  },
  methods: {
    ...mapActions(userStore, ['signUp']),
    handleSignUp() {
      const enteredPassword = this.password;
      const enteredConfirm = this.confirm;

      if (enteredPassword === enteredConfirm) {
        this.signUp(this.email, this.password);
      }
    },
  },
  watch: {
    user() {
      if (this.user) {
        console.log(this.user);
        this.$router.push({ path: '/' });
      }
    },
  },
};
</script>
