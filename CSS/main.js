//to secure the code and avoid bugs
"use strict";
//mobile menu box element
var menuBox
//the second picture of the mobile menu box element (the cross)
var menuActive
//the pop up mobile menu box 
var popUpMenu
//the photo inside the slide photo box and back/forward arrows
var slideImage
var back
var forward
//counter for slide show
var counter = 1;
//click sign on box "Show all" on background 5 
var clickSign = false;
//click sign to toggle width of bottom fixed panel
var hideShowSign = false;
//the main Window
var mainWindow = $(window); 
//backgound5, two arrows and 7 boxes. A lot of to get -)
var background5,boxBackground5,arrowUp,arrowDown,box0Background5,box1Background5,
box2Background5,box3Background5,box4Background5,box5Background5,box6Background5
//to get pictures and texts in boxes1-6 on background5
var text1,text2,text3,text4,text5,text6,picture1,picture2,picture3,picture4,picture5,picture6
//the form SendMessage and fields which need to be validated
var sendMessageForm, requiredElements
//elements of the bottom fixed panel in mobile view mode
var contactMeMobilePanel, sendEmail, showLocation, hideShowBox, contactInformation, showBottomPanel, hideBottomPanel
 

$(document).ready(function() {
  //getting mobile menu box element 
  menuBox = $("#menuBox");
  menuBox.click(menuBoxOnClick);
  //getting MenueActive picture
  menuActive = $("#menuActive");
  //getting the pop up menu box 
  popUpMenu = $("#popUpMenu");
  //getting the photo inside the slide photo box and back/forward arrows
  slideImage = $("#slideImage");
   back = $("#back");
    forward = $("#forward");
      forward.click(clickForward);
        back.click(clickBack);
  //getting background 5, arrows and boxes;
  background5 = $("#background5");
  // getting two ssmall arrows
  arrowDown =$("#down");
   arrowUp = $("#up");
  //getting all boxes on background 5
   box0Background5 = $("#box0Background5");
  //assign the action on click to drop down the rst of the boxes
   box0Background5.click(showAllOptions);
    box1Background5 = $("#box1Background5");
     box2Background5 = $("#box2Background5");
      box3Background5 = $("#box3Background5");
       box4Background5 = $("#box4Background5");
        box5Background5 = $("#box5Background5");
         box6Background5 = $("#box6Background5");

  //getting all texts and pictures in boxes1-6 on background5
  text1 = $("#text1");
  picture1 = $("#picture1");
    text2 = $("#text2");
  picture2 = $("#picture2");
    text3 = $("#text3");
  picture3 = $("#picture3");
    text4 = $("#text4");
  picture4 = $("#picture4");
    text5 = $("#text5");
  picture5 = $("#picture5");
    text6 = $("#text6");
  picture6 = $("#picture6");

//assigning activities on mouse in-out
//1 - mouse in key
//2 - mouse out key
//when the mouse is not present (in a mobile view mode) 
//we don't want to show pictures on clic to preserve system resourses,
//the user's time and efficiency of getting information about the offered service
   box1Background5.mouseenter(function() {showPictureHideText(text1, picture1,1)});
      box1Background5.mouseleave(function() {showPictureHideText(text1, picture1,2)});
   box2Background5.mouseenter(function() {showPictureHideText(text2, picture2,1)});
      box2Background5.mouseleave(function() {showPictureHideText(text2, picture2,2)});
   box3Background5.mouseenter(function() {showPictureHideText(text3, picture3,1)});
      box3Background5.mouseleave(function() {showPictureHideText(text3, picture3,2)});
   box4Background5.mouseenter(function() {showPictureHideText(text4, picture4,1)});
      box4Background5.mouseleave(function() {showPictureHideText(text4, picture4,2)});
   box5Background5.mouseenter(function() {showPictureHideText(text5, picture5,1)});
      box5Background5.mouseleave(function() {showPictureHideText(text5, picture5,2)});
   box6Background5.mouseenter(function() {showPictureHideText(text6, picture6,1)});
      box6Background5.mouseleave(function() {showPictureHideText(text6, picture6,2)});

//getting the form sendMessageForm and elements which need to be validated
  sendMessageForm = $("#sendMessageForm"); 
     sendMessageForm.submit(function(event) {getElementsValidated(event);});
//getting elements of the form sendMessage to be validated
  requiredElements = document.getElementsByClassName("needsToBeValidated");
//getting alements of the bottom fixed panel in mobile view mode
  contactMeMobilePanel =$("#contactMeMobilePanel");
   sendEmail=$("#sendEmail");
    showLocation=$("#showLocation");
     hideShowBox=$("#hideShowBox");
      showBottomPanel =$("#showBottomPanel");
       hideBottomPanel = $("#hideBottomPanel");
        contactInformation=$("#contactInformation");
        hideShowBox.click(showHideBottomPanel);

});

// extra control for background5 height when resizing the window.

//problem 1 to prevent: when all 6 boxes are visivble and the web page goes into a desctop view
//than upon returning back to a mobile view background5 height is as if only one box is present in it, whereas still six of them 
//are present

//problem 2 to prevent: when all 6 boxes are visivble and the web page goes into a desctop view
//the background5 height stays the same as for 6 boxes in one row for a mobile view and is too much for desctop view layout
mainWindow.resize(function() {
  if (mainWindow.outerWidth() >= 768) {background5.css("height","70rem");}
  else { 
  	 background5.css("height", clickSign ? "150rem":"30rem");
  }
});


//hiding/showing pop up menu and the button
function menuBoxOnClick() {
  menuActive.fadeToggle();
  popUpMenu.fadeToggle("slow");
}

//flipping photo forward
function clickForward() {
	//animate the forward arrow
	forward.fadeTo("fast",0).fadeTo("fast",1);
	//getting the ViewPort width
    var viewPortWidth = $(window).outerWidth();
	//if we have 5 pictures counter =5, if 10 then counter checking parameters shoud be set to 10
	counter = counter<5 ? ++counter : 1;
     //constract name of the loaded picture in code 
     if (viewPortWidth>=768) {
          slideImage.attr("src","Images/Maxim"+counter+".jpg").css("left","-30rem").animate({left:"0rem"},"slow");
         }
         else {
          slideImage.attr("src","Images/Maxim"+counter+".jpg").css("left","-50vw").animate({left:"0vw"},"slow");
        }
}

// flipping photo backward
function clickBack() {
	//animate the back arrow
	back.fadeTo("fast",0).fadeTo("fast",1);
	//getting the ViewPort width
    var viewPortWidth = $(window).outerWidth();
	//if we have 5 pictures counter =5, if 10 then counter checking parameters shoud be set to 10
	counter = counter<=1 ? 5 : --counter;
     //constract name of the loaded picture in code 
     if (viewPortWidth>=768) {
       slideImage.attr("src","Images/Maxim"+counter+".jpg").css("left","30rem").animate({left:"0rem"},"slow");
     }
     else {
       slideImage.attr("src","Images/Maxim"+counter+".jpg").css("left","50vw").animate({left:"0vw"},"slow");
     }
 }

 //to show all boxes on background 5
 function showAllOptions() {
 	//toggling the sign view mode(open/closed) to make changes to the background5 height
 	clickSign = !clickSign;
   if (clickSign) {
      //showing all boxes with animation effect 
      box1Background5.fadeToggle("slow");
      box2Background5.fadeToggle("slow");
      box3Background5.fadeToggle("slow");
      box4Background5.fadeToggle("slow");
      box5Background5.fadeToggle("slow");
      box6Background5.fadeToggle("slow");
    }
    else {
      //hiding all boxes fast
      box1Background5.toggle();
      box2Background5.toggle();
      box3Background5.toggle();
      box4Background5.toggle();
      box5Background5.toggle();
      box6Background5.toggle();
    }
   
    //toggle little black arrows fast
    arrowUp.toggle();
    arrowDown.toggle();

    //toggle the background5 height each time we click to expand the boxes
 	  background5.css("height", clickSign ? "150rem":"30rem");
}

//show picture and hide text in boxes on background5.
//key - indicates whether the mouse is entering (1) or leaving (2) the area
function showPictureHideText(text, picture, key) {
  switch (key) {
    case 1:
       //hide text fast and show picture slowly when the mouse is entering
       text.toggle();
       picture.fadeToggle("slow");
       break;
    case 2:
        //hide picture fast and show text slowly when the mouse is leaving
       picture.toggle();
       text.fadeToggle();
       break;
  }
}

//if the submit button pushed - call this method with event parameter 
function getElementsValidated(e) { 

//preventing submission by default
e.preventDefault();	

//if "shouldSubmit" less than amount of required-to-fill elements - no submission is sent
var shouldSubmit = 0;

for (var i = 0; i < requiredElements.length; i++) { 
   
   //calling for validation and changing background color 
   //validation() accepts a parameter:
   //  element - requered-to-fill element from the array
   //------------------------------
   //validation() also returns:
   // 1 - if the field has data
   // 0 - if the filed has no data (empty)
   shouldSubmit = shouldSubmit + validation(requiredElements[i]);
   
 }

//checking "shouldSubmit" parameter
//if shouldSubmit less than amount of elements need to be validated - no submission is sent
if (shouldSubmit == requiredElements.length ) {
   // $ajax mathod goes here ....
   $.ajax({
     type:"GET",
     url:"emailForm.php",
     data:sendMessageForm.serialize(),
     success: alert("The information has been submitted successfully!"),
     error: alert("The server did not respond")
   })
 }
}

//validating and changing background color of the required-to-fill elements
 //also returns 1 or 0
 function validation(element) {
    //compile a message for the user in case the field is empty
    var message = element.placeholder;
    //check if placeholder has already been altered
    if (message.search("please") < 0) {
      message = "please enter your "+element.placeholder; 
    }

    //deleting all spaces before and after to avoid data filled with spaces only
      if (element.value.trim() == "") {
        //setting warninig grey background color to the parrent
        element.style.backgroundColor = "#e0e6ef"; 
        element.placeholder = message;
        return 0; 
      } 
      else {
        element.style.backgroundColor = "white";
      	return 1;
      } 
  } 

// hide/show bottom fixed panel with animation
  function showHideBottomPanel() {
    hideBottomPanel.toggle();
    showBottomPanel.toggle();
    sendEmail.fadeToggle();
    showLocation.fadeToggle();
    contactInformation.fadeToggle();

    //changing boolean sign to toggle bottom fixed panel (contactMeMobilePanel)'s height with animation
    hideShowSign = !hideShowSign;
	contactMeMobilePanel.animate(hideShowSign?{height:"3rem"}:{height:"10rem"});        	
 }