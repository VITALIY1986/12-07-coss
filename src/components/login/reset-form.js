/**
 * External dependencies
 */
 import { useState } from 'react';
 import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
 import { faSkullCrossbones } from '@fortawesome/free-solid-svg-icons';
 import Success from './success';
 /**
  * Internal dependencies
  */
 import Field from '../login-function/field';
 import { useResetPassword } from '../login-function/use-reset-password';

 
 export const ResetForm = () => {
     const [ username, setUsername ] = useState( '' );
     const { sendResetPasswordEmail, error, status } = useResetPassword();
 
     const onReset = ( e ) => {
         e.preventDefault();
         sendResetPasswordEmail( username );
     };
 
     if ( status === 'resolved' && ! error ) {
         return (
            <Success>
                 <p className='text-white'>Інструкції надіслано вам електронною поштою. Перевірити свою поштову скриньку.</p>
                 </Success>
         );
     }
 
     return (
         <form onSubmit={ onReset } className="reset-form">
             { error && (
                 <div className="error-notice">
                     <FontAwesomeIcon
                         icon={ faSkullCrossbones }
                         aria-hidden={ true }
                     />
                     <p>{ error }</p>
                 </div>
             ) }
             <Field
                 label="Ім'я користувача або адреса електронної пошти"
                 value={ username }
                 onChange={ ( value ) => setUsername( value ) }
                 disabled={ status === 'resolving' }
             />
             <p>
                 <button
                     className="button button--inline button--large p-3 bg-gray-400 mt-4 text-white w-full rounded "
                     onClick={ onReset }
                     disabled={ status === 'resolving' }
                 >
                     Створити пароль
                 </button>
             </p>{ ' ' }
         </form>
     );
 };
 
 export default ResetForm;