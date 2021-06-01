export function fetchproject()
{
    return "https://kanzd123.pythonanywhere.com/api/getprojects";

}

export function addproject()
{
    return "https://kanzd123.pythonanywhere.com/api/addproject/";
}
export function deleteproject(id)
{
    return `https://kanzd123.pythonanywhere.com/api/deleteproject/${id}/`;
}

export function updateproject()
{
    return "https://kanzd123.pythonanywhere.com/api/updateproject/";
}