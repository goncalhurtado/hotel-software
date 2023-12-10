export const validate = (formData, setError) => {

    const { firstName, lastName, email, phone, country, passportType, passport, arrivalTime, paymentMethod, additionalComments } = formData;


    if (!firstName || !lastName || !email || !phone || !country || !passportType || !passport || !arrivalTime || !paymentMethod) {
        setError({ status: true, message: 'Please fill all the required fields.' });
        return false;
    }


    console.log(formData);
}