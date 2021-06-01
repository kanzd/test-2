export function fetchtask(id)
{
    return `https://kanzd123.pythonanywhere.com/api/gettasks/${id}`;
}


export function addtask()
{
    return "https://kanzd123.pythonanywhere.com/api/addtask/";
}

export function deletetask(id)
{
    return `https://kanzd123.pythonanywhere.com/api/deletetask/${id}/`;

}
export function updatetask()
{
    return "https://kanzd123.pythonanywhere.com/api/updatetask/";
}