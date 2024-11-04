



   function nav(){
    var nav1 = document.getElementById('navbar')
    var scroolvalue = window.scrollY;
    if(scroolvalue < 600) {
        nav1.classList.remove('nan-bar-1')
    } else {
        nav1.classList.add('nan-bar-1')
    }

   }
   window.addEventListener('scroll' , nav)




//    var myTooltipEl = document.getElementById('myTooltip')
//    var tooltip = new bootstrap.Tooltip(myTooltipEl)
   

//    myTooltipEl.addEventListener('shown.bs.tooltip', function () {
//      alert('The text has been copied')
//    })
   
//    myTooltipEln.show()

// function callAlert(msg) {
//     alert(msg)
// }

