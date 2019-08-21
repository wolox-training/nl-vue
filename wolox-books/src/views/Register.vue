<template lang='pug'>
  div.container
      div.container-register
        img.logo(alt="Wolox logo" src="../assets/logo.png")
        form(v-on:click='handleSignUp')
          .container-field(v-for='(field, name) in fields')
            label.label(:for='name') {{field.label}}
            input.input(v-bind:type='field.type' v-model='field.value' :id='name')
          button.button-sign-up(type='button') Sign Up
        hr.separator
        button.button-login(type='submit') Login
</template>
<script>

export default {
  name: 'Register',
  data () {
    return {
      fields: {
        firstName: { label: 'First name', value: null },
        lastName: { label: 'Last name', value: null },
        email: { label: 'Email', value: null },
        password: { label: 'Password', value: null, type: 'password' }
      }
    }
  },
  methods: {
    handleSignUp () {
      console.log(JSON.parse(JSON.stringify(this.fields)));
    }
  }
}
</script>

<style lang="scss">
@import '../scss/variables/colors.scss';
.container-register {
  width: 250px;
  padding: 20px;
  margin-top: 30px;
  background-color: $grey;
  border-top: solid 5px $blue;
}

.container {
  width: 100%;
  align-items: center;
  display: flex;
  flex-direction: column;
}

.container-field {
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
}

.input {
  width: 100%;
  border-radius: 10px;
  border: none;
  height: 30px;
}

.label {
  margin: 0px 10px; 
  font-weight: 600;
}

%button-basic {
  width: 100%;
  border-radius: 10px;
  height: 40px;
  font-size: 14px;
}

.button-login {
  @extend %button-basic;
  border: solid 1px $green;
  color: $green;
  background-color: transparent;
}

.button-sign-up {
  @extend %button-basic;
  background-color: $green;
  color: $white; 
}

.separator {
  border: $dark-grey solid 1px;
  width: 100%;
  margin: 18px 0px;
}

.logo {
  width: 250px;
}
</style>
