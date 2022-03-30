
/* ~~~~~~~~~ Scroll To Top Button ~~~~~~~~ */

// from W3School
// Get the button
// var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
// window.onscroll = function () { scrollFunction() };

// function scrollFunction() {
//     if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
//         mybutton.style.display = "block";
//     } else {
//         mybutton.style.display = "none";
//     }
// }

// When the user clicks on the button, scroll to the top of the document
// function topFunction() {
//     document.body.scrollTop = 0;
//     document.documentElement.scrollTop = 0;
// }


// jQuery
$(function () {

    let mybutton = $('#myBtn').html();

    // 當用頁面向下滾動時，呼叫scrollFunction()
    $(window).scroll(function () {
        // alert('ok1');
        scrollFunction();
    });

    // 當用頁面向下滾動 20px 時，顯示按鈕
    function scrollFunction() {
        // alert("ok2");
        if ($('body').scrollTop() > 20 || $('html').scrollTop() > 20) {
            $('#myBtn').css('display', 'block');
        }
        else {
            $('#myBtn').css('display', 'none');
        }
    }

    // 按按鈕之後，呼叫scrollTop(0)，讓頁面回到頂端
    $('#myBtn').click(function () {
        // alert('ok3');
        $('body').scrollTop(0);
        $('html').scrollTop(0);
    })

})