import { fi } from "date-fns/locale";
import { axiosInstance } from "../config/axiosInstance"

let availableRooms = [];

export const getBookings = async(selected, setAvailables) => {


    try {

        selected.capacity = selected.capacity.toString();

        if (selected.capacity === "1") {
            selected.capacity = "2";
        }

        const response = await axiosInstance.get("/categories");
        const filteredCategories = response.data.filter(category => category.capacity === selected.capacity);


        try {
            const response = await axiosInstance.get("/rooms");

            const roomsPerCapacity = response.data.filter(room => {

                return filteredCategories.some(category => room.category_id === category.id);
            });


            try {
                const response = await axiosInstance.get("/booking");
                const bookings = response.data;

                availableRooms = roomsPerCapacity.filter(function(room) {


                    return !bookings.some(function(booking) {

                        const bookedCheckIn = new Date(booking.check_in);
                        const bookedCheckOut = new Date(booking.check_out);
                        const newCheckIn = new Date(selected.check_in);
                        const newCheckOut = new Date(selected.check_out);

                        return room.id === booking.room_id &&
                            !(newCheckIn >= bookedCheckOut || newCheckOut <= bookedCheckIn);
                    });

                });

                console.log(availableRooms);

                const categoriasUnicas = new Set();
                availableRooms.forEach(objeto => {
                    categoriasUnicas.add(objeto.category_id);
                });

                const arrayCategories = Array.from(categoriasUnicas);
                const categories = await axiosInstance.get("/categories");
                // const categoriesAvailable = categories.data.filter(objeto => arrayCategories.includes(categories.id));


                setAvailables({
                    categories: filteredCategories,
                    rooms: availableRooms
                })


            } catch (error) {
                console.log(error);
            }

        } catch (error) {
            console.log(error);
        }
    } catch (error) {
        console.log(error);
    }

}

export const setBooking = (formData) => {

    console.log("esta son las rooms disponibles", availableRooms);

    const matchingRoom = availableRooms.find(room => room.category_id === formData.selectedCategory);

    const reservation = {
        info: {
            firstName: formData.info.firstName,
            lastName: formData.info.lastName,
            phone: formData.info.phone,
            email: formData.info.email,
            country: formData.info.country,
            passaport: formData.info.passaport,
            arrivalTime: formData.info.arrivalTime,
            additionalComments: formData.info.additionalComments,
        },
        room_id: matchingRoom.id,
        check_in: formData.check_in,
        check_out: formData.check_out,
        id: Math.floor(10000 + Math.random() * 90000),
    }

    return reservation;

}