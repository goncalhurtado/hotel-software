export const validateBooking = (formData, setError) => {

    const { firstName, lastName, email, phone, country, passportType, passport, arrivalTime, paymentMethod } = formData.info;

    if (!firstName || !lastName || !email || !country || !passportType || !arrivalTime || !paymentMethod) {
        setError({ status: true, message: 'Please fill all the required fields.' });
        return false;
    }

    if (!phone) {
        setError({ status: true, message: 'Please enter a valid phone number without special characters.' });
        return false;
    }
    const phoneRegex = /^\d{1,20}$/;

    if (!phoneRegex.test(phone)) {
        setError({ status: true, message: `The phone number cannot exceed 20 characters` });

        return false;
    }

    if (!passport) {
        setError({ status: true, message: 'Please enter a valid passport number without special characters.' });
        return false;
    }

    const passportRegex = /^\d{1,20}$/;
    if (!passportRegex.test(passport)) {
        setError({ status: true, message: 'The passport number cannot exceed 20 characters' });
        return false;
    }

    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

    if (!emailRegex.test(email)) {
        setError({ status: true, message: 'Please enter a valid email address.' });
        return false;
    }



    return true;

}

export const validateContact = (formData, setError) => {

    const { firstName, lastName, email, phone, message } = formData;
    console.log(formData);
    if (!firstName || !lastName || !email || !message) {
        setError({ status: true, message: 'Please fill all the required fields.' });
        return false;
    }
    if (!phone) {
        setError({ status: true, message: 'Please enter a valid phone number without special characters.' });
        return false;
    }

    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

    if (!emailRegex.test(email)) {
        setError({ status: true, message: 'Please enter a valid email address.' });
        return false;
    }

    return true;

}