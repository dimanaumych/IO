function isVisible() {
    let coords = document.querySelector('.service-score-wrapper').getBoundingClientRect();
    let windowHeight = document.documentElement.clientHeight;

    // верхний край элемента виден?
    let topVisible = coords.top > 0 && coords.top < windowHeight;
    // нижний край элемента виден?
    let bottomVisible = coords.bottom < windowHeight && coords.bottom > 0;

    return topVisible || bottomVisible;
}
let f = true;
function showVisible() {
    if (isVisible()) {
        f = false;
        var currentNumber = 0;
        $({numberValue: currentNumber}).animate({numberValue: 40}, {
            duration: 3000,
            easing: 'linear',
            step: function() {
                $('#first-number-block').text(Math.ceil(this.numberValue));
            }
        });
        $({numberValue: currentNumber}).animate({numberValue: 3}, {
            duration: 3000,
            easing: 'linear',
            step: function() {
                $('#second-number-block').text(Math.ceil(this.numberValue));
            }
        });

        $({numberValue: currentNumber}).animate({numberValue: 8000}, {
            duration: 3000,
            easing: 'linear',
            step: function() {
                $('#third-number-block').text(Math.ceil(this.numberValue));
            }
        });

        $({numberValue: currentNumber}).animate({numberValue: 13}, {
            duration: 3000,
            easing: 'linear',
            step: function() {
                $('#fourth-number-block').text(Math.ceil(this.numberValue));
            }
        });
        $({numberValue: currentNumber}).animate({numberValue: 20}, {
            duration: 3000,
            easing: 'linear',
            step: function() {
                $('#plus-number-block').text(Math.ceil(this.numberValue) + "+");
            }
        });
        // $('#first-number-block').text(0);
    }
    else{
        $('#first-number-block').text(0);
        $('#second-number-block').text(0);
        $('#third-number-block').text(0);
        $('#fourth-number-block').text(0);
        $('#plus-number-block').text(0);
    }
}

showVisible();
window.onscroll = function (){
    if(!f) return;
    showVisible();
};