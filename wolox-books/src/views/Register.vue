<template lang='pug'>
  .container
      .container-register
        img.logo(alt='Wolox logo' src='../assets/logo.png')
        form(@click='onSubmit')
          .container-field(v-for='(field, name) in fields' :key='name')
            label.label(:for='name')
              | {{field.label}}
            input.input(:type='field.type' v-model='field.value' :id='name' :class="{'error-input': field.validation.submitError}")
            .error(v-if='field.validation.submitError') {{ field.validation.error }}
          button.button-sign-up(type='button') Sign Up
        .separator
        button.button-login(type='submit') Login
</template>
<script>

import { email, numeric, helpers } from 'vuelidate/lib/validators'
import { validationPassword } from '../validations/inputValidations';
import { errorPass, errorEmail } from '../validations/constants';

export default {
  name: 'Register',
  data () {
    return {
      fields: {
        firstName: { 
          label: 'First name',
          value: null ,
          validation: {}
        },
        lastName: {
          label: 'Last name',
          value: null,
          validation: {}
        },
        email: { 
          label: 'Email',
          value: null,
          validation: {
            submitError: false,
            error: errorEmail
          }
        },
        password: {
          label: 'Password',
          value: null,
          type: 'password', 
          validation: {
            submitError: false,
            error: errorPass
          }
        }
      },
      errors: []
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
    validationsFields() {
      this.fields.email.validation.submitError = this.$v.fields.email.$invalid
      this.fields.password.validation.submitError = this.$v.fields.password.$invalid
    },
    onSubmit() {
      this.$v.$touch()
        this.validationsFields()
        if (!this.$v.fields.$invalid) {
          this.errors = []
          console.log(JSON.parse(JSON.stringify(this.fields)))
        }
    }
  }
}
</script> 

<style lang="scss" scoped>
@import '../scss/variables/colors.scss';

.error {
  color: $red;
  font-size: 13px;
  font-weight: 600;
}

  .error-input {
    border: solid 1.5px $red !important;
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

.separator {
  border: $dark-grey solid 1px;
  width: 100%;
  margin: 18px 0px;
}

.logo {
  width: 250px;
}
</style>
