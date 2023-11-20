
import { useState, ChangeEvent, FormEvent, useEffect} from 'react';
import { ContactUsSendEmailForm } from '../../../../utils/interfaces/interfaces';
import { validateEmailReg } from '../../../../utils/regex/validateEmail';
import './ContactUsForm.css';
import { FormSubmittedMessage } from '../form-submitted-message/FormSubmittedMessage';

export const ContactUsForm = () => {

    const formAndErrorsInitState: ContactUsSendEmailForm = {
        email: '',
        name: '',
        message: ''
    }

    const [sendEmailForm, setSendEmailForm] = useState<ContactUsSendEmailForm>(formAndErrorsInitState);
    const [formErrors, setFormErrors] = useState<ContactUsSendEmailForm>(formAndErrorsInitState);
    const [isFormToSubmit, setIsFormToSubmit] = useState<boolean>(false);

    const handleSetOneInput = (key: string, value: string) => {
        setSendEmailForm((prevState) => (
            {
                ...prevState,
                [key]: value
            }  
        ))
    }

/*     const handleSetOneError = (key: string, value: string) => {
        setFormErrors((prevState) => (
            {
                ...prevState,
                [key]: value
            }  
        ))
    } */
    
    const handleWriting = (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => {
        const {value, name} = e.target;
        handleSetOneInput(name, value);
    }

 

    const validateForm = (values: ContactUsSendEmailForm) => {
        let errors: ContactUsSendEmailForm = {
            name: '',
            email: '',
            message: ''
        };
        const {name, email, message} = values;
        if(!name) {
            errors.name = "The name cannot be empty";
        }
        if(!email || !validateEmailReg(sendEmailForm.email)) {
            errors.email = "Please enter a valid email address";
        } 
        if(!message) {
            errors.message = "The message cannot be empty";
        }
        return errors;
    }

    const handleFormSubmit = (e: FormEvent) => {
        e.preventDefault();
        const errors = validateForm(sendEmailForm);
        setFormErrors(errors);
        const {name, email, message} = errors;
        if(name.length == 0 && email.length == 0 && message.length == 0) {
            setIsFormToSubmit(true);
        } else {
            console.log("errors")
        }
    }
   

    useEffect(() => {
        console.log(formErrors);
        if(Object.keys(formErrors).length === 0 && isFormToSubmit){
            console.log(sendEmailForm);
        }
    }, [formErrors])

    return (
        <>
            {
                !isFormToSubmit ?
                <form action="" className="contact-us-form" onSubmit={(e) => handleFormSubmit(e)}>
                <div className="input-label-container">
                    <input className="form-input" type="text" name="name" placeholder='Name*' onChange={(e) => handleWriting(e)} value={sendEmailForm.name}/>
                    {formErrors.name && <p className='form-error'>{formErrors.name}</p>}
                </div>
                <div className="input-label-container">
                    <input className="form-input" type="text" name="email" placeholder='Email*'onChange={(e) => handleWriting(e)}value={sendEmailForm.email}/>
                    {formErrors.email && <p className='form-error'>{formErrors.email}</p>}
                </div>
                <div className="input-label-container">
                    <textarea className="form-input" placeholder='Your message*' name='message' cols={5} rows={10} onChange={(e) => handleWriting(e)} value={sendEmailForm.message}></textarea>
                    {formErrors.message && <p className='form-error'>{formErrors.message}</p>}
                </div>
                <div className="contact-us-button-container">
                    <button type='submit' className='contact-us-form-btn'>Send</button>
                </div>
            </form>
            :
            <FormSubmittedMessage />
            }
        
        </>
       
    )
}
