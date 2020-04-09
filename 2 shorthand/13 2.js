// 13. Destructuring Assignment Shorthand
// another example is when we use fetch
// usually when success API will send :
const response = { status: 'success', data: "result data", error: null };
// usually when fail API will send :
const response = { status: 'fail', data: null, error: { message: "something error" } };

const getData = async () => {
    try {
        const response = await fetch(URL);
        return response.data;
    } catch (error) {
        return error.message;
    }
}

const getData = async () => {
    try {
        const { data } = await fetch(URL);
        return data;
    } catch ({ message }) {
        return message;
    }
}
