import * as Yup from 'yup';

export const RegisterFormSchema = Yup.object().shape({  
    email: Yup.string().email('Geçersiz email adresi').required('Email zorunludur.'),
    age: Yup.number().min(0, 'Geçersiz yaş').required('Yaş zorunludur.'),
    password: Yup.string().min(6, 'Şifre en az 6 karakter olmalıdır.').required('Şifre zorunludur.'),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), undefined], 'Şifreler eşleşmiyor')
        .required('Şifre tekrar zorunludur.'),
    terms: Yup.boolean().oneOf([true], 'Kullanıcı sözleşmesini onaylamalısınız.')
});