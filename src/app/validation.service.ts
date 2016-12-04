export class ValidationService {

    /**
     * Funcion para validar los mensajes de errores
     * [getValidatorErrorMessage description]
     * @param  {string} validatorName  [description]
     * @param  {any}    validatorValue [description]
     * @return {[type]}                [description]
     */
    static getValidatorErrorMessage(validatorName: string, validatorValue?: any) {
        let config = {
            'required': 'The field is required.',
            'invalidEmailAddress': 'Invalid email address.',
            'invalidPhone': 'Invalid phone.',
            'minlength': `Minimum length ${validatorValue.requiredLength}`
        };
        return config[validatorName];
    }

    /**
     * Funcion para validar el campo de Email
     * [emailValidator description]
     * @param  {[type]} control [description]
     * @return {[type]}         [description]
     */
    static emailValidator(control) {
        // RFC 2822 compliant regex
        if (control.value.match(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/)) {
            return null;
        } else {
            return { 'invalidEmailAddress': true };
        }
    }

    /**
     * Funcion para validar nuestro campo telefono
     * [phoneValidator description]
     * @param  {[type]} number [description]
     * @return {[type]}        [description]
     */
    static phoneValidator(number){
      if (number.value.match(/[0-9]/)) {
        return null;
      }else{
        return { 'invalidPhone': true };
      }
    }
    
}
