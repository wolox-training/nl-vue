<template lang='pug'>
  .container
    .container-register
      img.logo(alt='Wolox logo' src='../assets/logo.png')
      form.container-form(@submit.prevent='onSubmit')
        .container-field(v-for='(field, name) in fields' :key='name')
          label.label(:for='name')
            | {{field.label}}
          input.input(:type='field.type' v-model='field.value' :id='name' :class="{'error-input': getFieldValidationByName(field.name)}")
          .error(v-if='getFieldValidationByName(field.name)')
            |  {{ field.validation.error }}
        button.button-sign-up(:type='button')
          | Sign Up
      button.button-login(:type='submit')
        routerLink.login(to='/login')
          | Login
</template>
<script>

import { email, numeric, helpers } from 'vuelidate/lib/validators'
import { validationPassword } from '../validations/inputValidations'
import { errorPass, errorEmail } from '../validations/constants'
import { createUser } from '../services/UserServices'

export default {
  name: 'Register',
  data () {
    return {
      fields: {
        firstName: {
          name: 'first_name',
          label: 'First name',
          value: null ,
          validation: {}
        },
        lastName: {
          name: 'last_name',
          label: 'Last name',
          value: null,
          validation: {}
        },
        email: {
          name: 'email',
          label: 'Email',
          value: null,
          validation: {
            error: errorEmail
          }
        },
        password: {
          name: 'password',
          label: 'Password',
          value: null,
          type: 'password', 
          validation: {
            error: errorPass
          }
        }
      }
    }
  },
  validations: {
    fields: {
      email: {
        value: { email }
      },
      password: {
        value: { validationPassword }
      }
    }
  },
  methods: {
    formatUser(fields) {
      return { 
        [fields.email.name]: fields.email.value,
        [fields.password.name]: fields.password.value,
        password_confirmation: fields.password.value,
        [fields.firstName.name]: fields.firstName.value,
        [fields.lastName.name]: fields.lastName.value,
        locale: 'en'
      }
    },
    onSubmit() {
      this.$v.$touch()
      if (!this.$v.fields.$invalid) {
        const user = this.formatUser(this.fields)
        createUser(user)
      }
    },
    getFieldValidationByName(name) {
      return this.$v.fields[name] && this.$v.fields[name].$invalid
    }
  }
}
</script> 

<style lang="scss" scoped>
@import '../scss/variables/colors.scss';

.login {
  color: $green;
}

.error {
  color: $red;
  font-size: 13px;
  font-weight: 600;
  margin: 5px;
}

.error-input {
  border: solid 2px $red !important;
}

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
  border: transparent;
  height: 30px;
  padding: 5px;
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
  margin-bottom: 10px;
}

.container-form {
  border-bottom: $dark-grey solid 1px;
  padding-bottom: 30px;
  margin-bottom: 30px;
}

.logo {
  width: 250px;
}
</style>
