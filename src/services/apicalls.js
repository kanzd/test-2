import axios from 'axios';


export async function get(url)
{
    var res = await axios.get(url);
    return res.data;
}
export async function post(url,data)
{
    var res = await axios.post(url,data);
    return res.data;
}
export async function deletef(url)
{
    var res = await axios.delete(url);
    return res.data;
}
export async function put(url,data)
{
    var res = await axios.put(url,data);
    return res.data;
}