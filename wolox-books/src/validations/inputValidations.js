import { helpers } from 'vuelidate/lib/validators'

export const validationPassword = helpers.regex('password', /^(?=.*[A-Z])(?=.*[0-9])/)
