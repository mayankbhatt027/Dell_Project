function Canvas(){
    document.querySelector(".canvas_hide").classList.toggle("canvas_show");
    document.querySelector(".backdrop").classList.toggle("backdrop_show");
    document.querySelector("body").classList.toggle("body_show");

  }

  function Products_Toggle(){
    document.querySelector(".products_menu_hide").classList.toggle("products_menu_show");
    // e.target.children[0].classList.add("products_menu_show");
    
  }

  function Like(n){
    document.querySelectorAll(".fa-heart")[n].classList.toggle("fa-heart-red");
  }


  var Images = document.querySelectorAll(".one");
      var move = 0;
      function move_left() {
          if (move < Images.length - 1) {
              move++;
          } else {
              move = 0;
          }
          slider();
      }

      //setInterval(move_left, 1000);
      //function stop_move_left(move_left) {
            //clearInterval(move_left);
        //}
        
        function mover() {
            if (move > 0) {
                move--;
                slider();
            }
        }
        for (let i = 0; i < Images.length; i++) {
            Images[i].style.left = i * 100 + "%";
        }
        function slider() {
            Images.forEach(imge => {
                imge.style.transform = "translateX(-" + move * 100 + "%)";
            });
        }




        var Val=0;
        function Counter(){
            if(Val<64){
                document.querySelector("#percnt1 span").innerHTML=++Val;
            }
        }
         window.addEventListener("scroll",()=>{
          if(window.pageYOffset>1600){

            setInterval(Counter,110);
            // console.log(window.pageYOffset);
          };
         });




         var Vaal=0;
                function Counter1(){
                   if(Vaal<38){
                    document.querySelector("#percent2 span").innerHTML=++Vaal;
                   }

                }
                window.addEventListener("scroll",()=>{
                    if(window.pageYOffset>1556){
                      setInterval(Counter1,110);
                    };
                   });


                   var Vaaal=0;
                   function Counter2(){
                      if(Vaaal<59){
                       document.querySelector("#percent3 span").innerHTML=++Vaaal;
                      }
   
                   }
                   window.addEventListener("scroll",()=>{
             if(window.pageYOffset>1556){
               setInterval(Counter2,110);
             };
            });



            //faq

            function Acc(e){
                e.target.parentElement.classList.toggle("faq_main_show");
              }


              //popup

              function FormShow(){
                document.querySelector(".backdrop_new").classList.toggle("backdrop_new_show");
                document.querySelector("body ").classList.toggle("body_show_new");
            }
            setTimeout(FormShow,3000);

            //popup validation

            function Validate()
            {
                let em=document.querySelector(".popforminputemail").value;
                let pas=document.querySelector(".popforminputpass").value;

                let emailPattern= /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
                
                let passPattern=  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&^])[A-Za-z\d@.#$!%*?&]{8,15}$/;
                
                if(passPattern.test(pas)===false)
                    {
                        document.querySelector(".err2").innerHTML="Enter valid password";

                        if(emailPattern.test(em)===false)
                            {
                                document.querySelector(".err1").innerHTML="Enter valid email";
                               
                            }
                    }
                else
                {
                    document.querySelector(".done").innerHTML="Done";
                }


            }