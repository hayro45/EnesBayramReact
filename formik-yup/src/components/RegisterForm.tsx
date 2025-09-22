import { useFormik } from 'formik'
import React from 'react'
import { RegisterFormSchema } from '../schemas/RegisterFormSchemas';



function RegisterForm() {
    const onSubmit = (values: any) => {
      console.log(values.terms);
    }
    
    const {values, errors, handleChange, handleSubmit} = useFormik({
        initialValues: {
        email: '',
        age: '',
        password: '',
        confirmPassword: '',
        terms: false,
    },  
    validationSchema: RegisterFormSchema,
    onSubmit: onSubmit
  });

  return (
    <div className='register-container'>
      <form onSubmit={handleSubmit}>
        <div>
            <label>Email</label>
            <input 
                value={values.email}
                onChange={handleChange}
                type="email" 
                name="email"
                id='email'
                placeholder='Email giriniz..' />
                {errors.email && <div className='error'>{errors.email}</div>}
        </div>
        <div>
            <label>Yaş</label>
            <input 
                value={values.age}
                onChange={handleChange}
                type="number" 
                name="age"
                id='age'
                placeholder='Yaş giriniz..' />
                {errors.age && <div className='error'>{errors.age}</div>}
        </div>

        <div>
            <label>Şifre</label>
            <input 
                value={values.password}
                onChange={handleChange}
                type="password" 
                name="password"
                id='password'
                placeholder='Şifre giriniz..' />
                {errors.password && <div className='error'>{errors.password}</div>}
        </div>
        <div>
            <label>Şifre Tekrar</label>
            <input 
                value={values.confirmPassword}
                onChange={handleChange}
                type="password" 
                name="confirmPassword"
                id='confirmPassword'
                placeholder='Şifre tekrar giriniz..' />
                {errors.confirmPassword && <div className='error'>{errors.confirmPassword}</div>}
        </div>

        <div style={{display: "flex", flexDirection: "row", marginTop: "10px"}}>
            
            <input type="checkbox" name="terms" id="terms" onChange={handleChange} checked={values.terms} />
            <label>Kullanıcı sözleşmesini onaylıyorum.</label>
            {errors.terms && <div className='error'>{errors.terms}</div>}
        </div>
        <button type="submit">Gönder</button>
      </form>
    </div>
  )
}

export default RegisterForm
