import { fi } from "date-fns/locale";
import { axiosInstance } from "../config/axiosInstance"



export const getBookings = async(dataForm) => {


    try {

        dataForm.capacity = dataForm.capacity.toString();

        if (dataForm.capacity === "1") {
            dataForm.capacity = "2";
        }

        const response = await axiosInstance.get("/categories");
        const filteredCategories = response.data.filter(category => category.capacity === dataForm.capacity);


        try {
            const response = await axiosInstance.get("/rooms");

            const roomsPerCapacity = response.data.filter(room => {

                return filteredCategories.some(category => room.category_id === category.id);
            });


            try {
                const response = await axiosInstance.get("/booking");
                const bookings = response.data;

                const availableRooms = roomsPerCapacity.filter(function(room) {


                    return !bookings.some(function(booking) {

                        const bookedCheckIn = new Date(booking.check_in);
                        const bookedCheckOut = new Date(booking.check_out);
                        const newCheckIn = new Date(dataForm.check_in);
                        const newCheckOut = new Date(dataForm.check_out);

                        return room.id === booking.room_id &&
                            !(newCheckIn >= bookedCheckOut || newCheckOut <= bookedCheckIn);
                    });

                });


                console.log(availableRooms, "esto es availableRooms");


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