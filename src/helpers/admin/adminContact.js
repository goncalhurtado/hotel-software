import { axiosInstance } from "../../config/axiosInstance";


export const getAdminContact = async(query = "all") => {
    try {
        const response = await axiosInstance.get(`/admin/contacts/${query}`);
        return response.data.contacts;
    } catch (error) {
        console.log(error);
    }
}

export const getContactsReport = async() => {
    try {
        const response = await axiosInstance.get(`/admin/contacts/pending/reports`);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}


export const setAnswered = async(row, setLoading, getContacts) => {
    try {
        setLoading(true);
        const response = await axiosInstance.put(`/admin/contacts/answered/${row._id}`);
        setLoading(false);
        getContacts(row.status);
        return response.data;
    } catch (error) {
        console.log(error);
        setLoading(false);
    }
}

export const setPending = async(row, setLoading, getContacts) => {
    try {
        setLoading(true);
        const response = await axiosInstance.put(`/admin/contacts/pending/${row._id}`);
        setLoading(false);
        getContacts(row.status);
        return response.data;
    } catch (error) {
        console.log(error);
        setLoading(false);
    }
}

export const deleteContact = async(row, setLoading, getContacts) => {
    try {
        setLoading(true);
        const response = await axiosInstance.delete(`/admin/contacts/${row._id}`);
        setLoading(false);
        getContacts(row.status);
        return response.data;
    } catch (error) {
        console.log(error);
        setLoading(false);
    }
}


export const postResponse = async(emailData, setLoading, setModal, getContacts) => {

    setLoading(true)
    try {
        const response = await axiosInstance.post("/admin/contacts/response", emailData);
        setLoading(false);
        getContacts(emailData.status);
        setModal({ state: false, data: {} })
    } catch (error) {
        console.log(error);
        setLoading(false);
        setModal({ state: false, data: {} })

    }
}