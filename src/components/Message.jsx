
import { useState, useEffect } from 'react'




function Message () {
    const [validMessage, setValidMessage] = useState(false);
    // const [name, setName] = useState();
    // const [message, setMessage] = useState();
    // const [errorMsg, setErrorMsg] = useState("");
    const [form, setForm] = useState({});

    // useEffect ( () => {
    //     if (form?.message?.length > 5 && form?.name?.length > 3) {
    //         setValidMessage(true);
    //     } else {
    //         setValidMessage(false)
    //     }
    // }, [form]);

    const updateForm = (event) => {
        setForm({ ...form, [event.target.name]: event.target.value });
    };

    function messageSubmit (e) {
        e.preventDefault();
        // if (!validMessage) {
        //     setErrorMsg('Not a valid message');
        //     console.log(errorMsg);
        //     return;
        // } else {
        //     setErrorMsg("eegageg")
        //     setValidMessage(true)
        // }
        // const comment = {form}
        console.log("form submitted", form)


    };
    // const results = await fetch("https://sql.bocacode.com/comments", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(form),
    //   });
    //   console.log(results);
    //   const data = await results.json();
    //   console.log(data);
    return (
        <>
        <div>
            <form onSubmit={messageSubmit}>
            <label>Message: </label>
            <textarea onChange={updateForm} value={form.message} type="text" name="message" ></textarea><br/>
            <label>Name: </label>
            <textarea onChange={updateForm} value={form.name} type="text" name="author"></textarea><br/>
            <button>Submit</button>
            </form>
        </div>
        </>
        
    )
}







export default Message;