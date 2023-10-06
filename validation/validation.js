export default function Validation( values ) {

    const errors = {}
    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,6}$/;
    const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/;

    if (values.nomEmp === "") {

        errors.nomEmp = "Le nom est obligatoire";
    }

    if (values.prenomEmp === "") {

        errors.prenomEmp = "Le prénom est obligatoire";
    }


    if (values.email === "") {
        errors.email = "L'email est obligatoire";
    }
    else if(!email_pattern.test(values.email)) {

        errors.email = "L'adresse mail est incorrecte'";
    } 
    if(values.pwd===""){
     errors.pwd='Mot de passe obligatoire';
    }else if(!password_pattern.test(values.pwd)){
        errors.pwd = "Le mot de passe est incorrecte'";
    }
    return errors;
}