$(document).ready(
    ()=>{
        $('input[type="button"]').click(
            ()=>{
                var username=$('input[type="text"]').val();
                var password=$('input[type="password"]').val();
                if(username=='' && password==''){
                    alert("username or password not entered");
                }
                else{
                    $ajax({
                        url="http://localhost:3000/user",
                        type:'GET',
                        data:{
                            "username":username,
                            "password":password,
                        
                        },
                        success:(x)=>{
                            alert(username+"welcome");
                            console.log(x);
                            window.location="https://127.0.0.1:5500/html/registration.html"
                        }
                    })
                }

            }
        )
    }
)