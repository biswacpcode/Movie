window.onscroll = function () {
    window.scrollTo(0,0);
};

function displayAll() {
    window.scrollTo(0,0);
    
    let name = document.querySelector('.name_ask');
    name.classList.add('hide');
    let input = document.querySelector('#input');
    let message = document.querySelector('#message');
    let any = document.querySelector('.newcontent');

    setTimeout(function(){
            any.classList.add('show');
    },200);

    setTimeout(function(){
        any.classList.add('disappear');
},2000);


    message.innerHTML = input.value;

    let msg = document.querySelector('.exp');

    setTimeout(function(){
    setTimeout(function(){
        msg.classList.add('show');
},200);

setTimeout(function(){
    msg.classList.add('disappear');
},2000);
},3000);

let vdo = document.querySelector('.video1');
setTimeout(function(){
setTimeout(function(){
    setTimeout(function(){
        vdo.classList.add('show');
},200);

setTimeout(function(){
    vdo.classList.add('disappear');
},2000);
},3000);
},3000);

let vdo1= document.querySelector('.video2');
setTimeout(function(){
    setTimeout(function(){
        setTimeout(function(){
            setTimeout(function(){
                vdo1.classList.add('show');
        },200);
        
        setTimeout(function(){
            vdo1.classList.add('disappear');
        },2000);
        },3000);
        },3000);
},3000);

const button2 = document.getElementById('botao2');
const button1 = document.getElementById('botao1');
    button2.innerHTML = "NO";

let main = document.querySelector('.main');
setTimeout(function(){
    setTimeout(function(){
        setTimeout(function(){
            setTimeout(function(){
                setTimeout(function(){
                    main.classList.add('show');
            },200);
            
            
            },3000);
            },3000);
    },3000);
},3000);

let left = 22;
    button2.addEventListener('mouseover', function() {
      if(left == 22){
        left = 75;
      }else{
        left = 22;
      }
      this.style.left = left + '%';
    });
    button2.addEventListener('click', function() {
        button2.innerHTML = "Yaaaaa Obvsly";
        this.style.left = '22%';
        setTimeout( function (){
            alert('Thanks .... U r booked to have a great DAY Den\n Thanks for clicking on Yaaaaa Obvsly\n YAAAA I dont take No for an Answer😅');
        location.reload();
        }, 1000);
    })

    document.getElementById('botao1').addEventListener('click', function() {
        alert('Thanks .... U r booked to have a great DAY Den');
        location.reload();
        });



}
