$( document ).ready(function() {

    $( "#home" ).click(function() {
        $("#ribbon").removeColourRibbon();
        $("#ribbon").addClass("ribbon_blue_grey");
        $("#divider").removeColourDivider();
        $("#divider").addClass("divider_cyan");
        $("#content").html("<p>Home content</p>");
    });

    $( "#education" ).click(function() {
        $("#ribbon").removeColourRibbon();
        $("#ribbon").addClass("ribbon_indigo");
        $("#divider").removeColourDivider();
        $("#divider").addClass("divider_red");
       $("#content").html("<p>Education content</p>");
    });

    $( "#skills" ).click(function() {
        $("#ribbon").removeColourRibbon();
        $("#ribbon").addClass("ribbon_green");
        $("#divider").removeColourDivider();
        $("#divider").addClass("divider_yellow");
        $("#content").html("<p>Skill content</p>");
    });

    $( "#contact" ).click(function() {
        $("#ribbon").removeColourRibbon();
        $("#ribbon").addClass("ribbon_purple");
        $("#divider").removeColourDivider();
        $("#divider").addClass("divider_pink");
        $("#content").html("<p>Contact content</p>");
    });

});

$.fn.removeColourRibbon = function() {
    this.removeClass("ribbon_blue_grey ribbon_green ribbon_indigo ribbon_purple");
};

$.fn.removeColourDivider = function() {
    this.removeClass("divider_cyan divider_red divider_yellow divider_pink");
};