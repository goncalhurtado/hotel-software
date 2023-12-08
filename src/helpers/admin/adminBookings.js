export const dateFormater = (dateString) => {
    let date = new Date(dateString);
    let formattedDate = date.toLocaleDateString('en-US', { month: '2-digit', day: '2-digit', year: 'numeric' });
    let formattedTime = date.toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit' });
    return `${formattedDate} ${formattedTime}`;
}