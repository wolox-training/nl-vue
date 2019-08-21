<template lang='pug'>
  div.container
      div.containerRegister
        img.logo(alt="Wolox logo" src="../assets/logo.png")
        form.containerFields(v-on:click='onSubmit')
          .containerField(v-for='(field, name) in fields')
            label.labelField {{field.label}}
            input.inputField(v-bind:type='field.type' v-model='field.value')
          button.buttonSignUp(type='button') Sign Up
        hr.separator
        button.buttonLogin(type='submit') Login
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
    onSubmit () {
      console.log(JSON.parse(JSON.stringify(this.fields)));
    }
  }
}
</script>

<style lang="scss">
@import '../scss/variables/colors.scss';
.containerRegister {
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

.containerFields {
  margin-bottom: 20px;
  }

.containerField {
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
}

.inputField {
  width: 100%;
  border-radius: 10px;
  border: none;
  height: 30px;
}

.labelField {
  margin: 0px 10px; 
  font-weight: 600;
}

%buttonField {
  width: 100%;
  border-radius: 10px;
  height: 40px;
  font-size: 14px;
}

.buttonLogin {
  @extend %buttonField;
  border: solid 1px $green;
  color: $green;
  background-color: transparent;
}

.buttonSignUp {
  @extend %buttonField;
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
