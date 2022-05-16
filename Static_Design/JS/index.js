const form = document.forms["get-in-touch"];
const name = document.getElementById("name");
const email = document.getElementById("email");
const message = document.getElementById("message");
const submitBtn = document.getElementById("submitBtn");

function isEmail(email) {
    let regexp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regexp.test(String(email).toLowerCase());
}

form.addEventListener("submit", (event) => {
    event.preventDefault();

    if (name.value == "") {
        swal("Error !", "Please enter a valid name", "error");
    }
    else if (!isEmail(email.value)) {
        swal("Error !", "Please enter a valid email", "error");
    }
    else if (message.value == "") {
        swal("Error !", "Please enter a message", "error");
    }
    else {

        // const scriptURL = "http://localhost:3000/submit";
        // const formData = new FormData(form);
        // const searchParams = new URLSearchParams();

        // for( const pair of formData){
        //     searchParams.append(pair[0],pair[1]);
        // }

        // fetch(
        //     scriptURL,
        //     { method : "post", body : searchParams}
        //   )
        //   .then( (res)=>{
        //       return res.text();
        //   })
        //   .then( (text)=>{
        //       console.log(text);
        //       swal("Thanks For connecting !","We will contact you soon !","success");
        //   })
        //   .catch( (err)=>{ 
        //       swal("Error !", "Please try again !","error");
        //       form.reset();
        // })
        form.submit();
    }
})

