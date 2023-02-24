export const getPosts = async () => {
    try{
        const res = fetch("http://localhost:5000/posts");
        const data = (await res).json();
        return data;
    }catch{
        throw new Error()
    }
}