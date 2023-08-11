function leftScroll() {
    document.getElementById('container').scrollBy({
        left: Math.max(-1070),
        behavior: 'smooth'
    });
}

function rightScroll() {
    document.getElementById('container').scrollBy({
        left: Math.max(1070),
        behavior: 'smooth'
    });
}



function leftScroll_1() {
    document.getElementById('container_1').scrollBy({
        left: Math.max(-1070),
        behavior: 'smooth'
    });
}

function rightScroll_1() {
    document.getElementById('container_1').scrollBy({
        left: Math.max(1070),
        behavior: 'smooth'
    });
}



function leftScroll_2() {
    document.getElementById('container_2').scrollBy({
        left: Math.max(-1070),
        behavior: 'smooth'
    });
}

function rightScroll_2() {
    document.getElementById('container_2').scrollBy({
        left: Math.max(1070),
        behavior: 'smooth'
    });
}


function leftScroll_3() {
    document.getElementById('container_3').scrollBy({
        left: Math.max(-1070),
        behavior: 'smooth'
    });
}

function rightScroll_3() {
    document.getElementById('container_3').scrollBy({
        left: Math.max(1070),
        behavior: 'smooth'
    });
}

function leftScroll_4() {
    document.getElementById('container_4').scrollBy({
        left: Math.max(-1070),
        behavior: 'smooth'
    });
}

function rightScroll_4() {
    document.getElementById('container_4').scrollBy({
        left: Math.max(1070),
        behavior: 'smooth'
    });
}



// function placeHolder() {
$(document).ready(function () {
    var placeHolder = ['Search "milk"',
     'Search "bread"', 'Search "sugar"',
      'Search "butter"', 'Search "paneer"',
       'Search "chocolate"', 'Search "curd"',
        'Search "rice"', 'Search "egg"'
        , 'Search "chips"'];
    var n = 0;
    var loopLength = placeHolder.length;

    setInterval(function () {
        var newPlaceholder = placeHolder[n];
        if (n < loopLength) {
            n++;
            $('input').attr('placeholder', newPlaceholder);
        } else {
            $('input').attr('placeholder', newPlaceholder);
            n = 0;
        }
        console.log(newPlaceholder);
    }, 2000);
});
