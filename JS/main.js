/**
 * @file:
 * @description:    this will take care of our navigation
 */



const $menuBtn          =   $('#menuBtn');
const $topNavContainer  =   $('#topNavContainer');

/**
 * @name:           bindMenuBtn
 * @description:    this will toggle navigation when we click on menuBtn
 */
const bindMenuBtn = () => {
    $menuBtn.on('click', () => {
        $topNavContainer.slideToggle();
    });
}; // bindMenuBtn

/**
 * @name:           bindEnquire
 * @description:    this will use enquire.js to hide/show our $topNavContainer
 */
const bindEnquire = () => {
    enquire.register('screen and (max-width: 767px)', {


        match: function () {
            $topNavContainer.hide();
        },


        unmatch: function () {
            $topNavContainer.show();
        }
    });
}; // bindEnquire



/**
 * @name:           init
 * @description:    initialising function
 */
const init = () => {
    bindMenuBtn();
    bindEnquire();
};

$(window).on('load', init);
