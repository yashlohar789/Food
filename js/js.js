const tab1 = document.querySelector(".tab-1");
const tab2 = document.querySelector(".tab-2");
const tab3 = document.querySelector(".tab-3");
const tab4 = document.querySelector(".tab-4");
const box1 = document.querySelector(".box-1");
const box2 = document.querySelector(".box-2");
const box3 = document.querySelector(".box-3");
const box4 = document.querySelector(".box-4");
const pizza= document.querySelector(".pizzas");

        tab1.addEventListener("click",function(){
              box1.classList.add("active");
              box2.classList.remove("active");
              box3.classList.remove("active");
              box4.classList.remove("active");

              this.classList.add("active-tab");
              tab2.classList.remove("active-tab");
              tab3.classList.remove("active-tab");
              tab4.classList.remove("active-tab");

              pizza.style.transform ="rotate(90deg)";
        });

        tab2.addEventListener("click",function(){
              box2.classList.add("active");
              box1.classList.remove("active");
              box3.classList.remove("active");
              box4.classList.remove("active");

              this.classList.add("active-tab");
              tab1.classList.remove("active-tab");
              tab3.classList.remove("active-tab");
              tab4.classList.remove("active-tab");

              pizza.style.transform ="rotate(180deg)";

        });

        tab3.addEventListener("click",function(){
              box3.classList.add("active");
              box1.classList.remove("active");
              box2.classList.remove("active");
              box4.classList.remove("active");

              this.classList.add("active-tab");
              tab2.classList.remove("active-tab");
              tab1.classList.remove("active-tab");
              tab4.classList.remove("active-tab");

              pizza.style.transform ="rotate(270deg)";
        });

        tab4.addEventListener("click",function(){
            box4.classList.add("active");
            box1.classList.remove("active");
            box2.classList.remove("active");
            box3.classList.remove("active");

            this.classList.add("active-tab");
            tab2.classList.remove("active-tab");
            tab3.classList.remove("active-tab");
            tab1.classList.remove("active-tab");

            pizza.style.transform ="rotate(360deg)";
      });