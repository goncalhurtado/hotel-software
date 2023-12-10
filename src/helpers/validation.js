export const validate = (formData, setError) => {

    const { firstName, lastName, email, phone, country, passportType, passport, arrivalTime, paymentMethod } = formData.info;

    if (!firstName || !lastName || !email || !phone || !country || !passportType || !passport || !arrivalTime || !paymentMethod) {
        setError({ status: true, message: 'Please fill all the required fields.' });
        return false;
    }

    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

    if (!emailRegex.test(email)) {
        setError({ status: true, message: 'Please enter a valid email address.' });
        return false;
    }

    const phoneRegex = /^\d{1,20}$/;

    if (!phoneRegex.test(phone)) {
        setError({ status: true, message: 'Please enter a valid phone number without special characters.' });

        return false;
    }

    return true;

}