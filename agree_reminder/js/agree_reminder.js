jQuery( document ).ready(function() {
   jQuery('#datepicker-here').attr('readonly', true);
   
   jQuery("#edit-customer-profile-billing-field-addreass-title-und-0-value").attr("placeholder", "Address Name");
   jQuery('ul.navbar-nav li.海洋商店').addClass('ostore-link');
   jQuery('.view-home-3-blocks').addClass('home-image');
   jQuery('.page-checkout #edit-custom-contract-payment-newsletter').addClass('oceanfleet-custom-form');
   jQuery('div.view-user-refund-list div.line-items-details div.view-grouping div.view-grouping-header div.cart-product-title').addClass('order-refund');
   jQuery('node-type-streams .main-container, div.field-name-field-videos').addClass('streaming-video');
   jQuery('body.node-type-streams .main-container .field-name-field-videos > .field-items > .field-item').addClass('even-streaming-video');
   jQuery( ".node-streams" ).wrapAll( "<div class='live-streaming-section' />");
   if ( jQuery(window).width() < 767) {
   jQuery('body.page-reminder .block-title').wrap('<a class="reminder-link" href="http://confluence.qpsoftware.cn/oceanfleet/myaccount"></a>');
   }

   jQuery('#webform-client-form-18, #agree-reminder-datetime-form').addClass('oceanfleet-custom-form');
   jQuery('#webform-client-form-42, #agree-reminder-datetime-form').addClass('oceanfleet-custom-form');
   
   jQuery('#node-18 .field-name-field-webform-title .field-items .field-item').addClass('reminder-title');

   jQuery('#agree-reminder-datetime-form .form-item-date-date label').remove();
   jQuery('#agree-reminder-datetime-form .form-item-date-time label').remove();
   
   jQuery('.oceanfleet-custom-form .form-type-checkbox .form-checkbox').wrap('<div class="checkbox-wrapper"></div>');
   
   jQuery('<div class="mycheckbox"></div>').insertAfter('.oceanfleet-custom-form .form-type-checkbox .form-checkbox');
	
   jQuery('#agree-reminder-datetime-form .form-item-date #datepicker-here').attr('placeholder', 'dd/mm/yy');
   jQuery('<i class="fa fa-calendar"></i>').insertAfter('#agree-reminder-datetime-form .form-item-date #datepicker-here');
   
   jQuery('#agree-reminder-datetime-form .form-item-date-test #timepickerA').attr('placeholder', 'Time');
   jQuery('<i class="fa fa-clock-o"></i>').insertAfter('#agree-reminder-datetime-form .form-item-time #timepickerA');
   
   jQuery('.timepickerA').wickedpicker({ now: '00:00',twentyFour: false, title:
   'Time Picker', showSeconds: false,});
	
   jQuery('.contract_Payment_btn').hide();

   //~ for delivery page warning

   jQuery(".delivery-note").text(function () {
    return jQuery(this).text().replace("please", "please be"); 
   });

   jQuery(".views-field-line-item-title").text(function () {
    return jQuery(this).text().replace("Size Range(kg)", "Size Range (kg) "); 
   });


//~ var aa= jQuery('th.views-field-field-weekly-unit-price').html();
//~ if(aa!==undefined){
//~ aaa=aa.split(' (');
//~ 
//~ 
//~ bb=aaa[0];
//~ cc=aaa[1];
//~ 
//~ jQuery('th.views-field-field-weekly-unit-price').html(bb+'<span class="checkout-product">('+cc+'</span>');
//~ }


var order= jQuery('th.views-field-line-item-title').html();
if(order!==undefined){
aaa=order.split(' (');


bb=aaa[0];
cc=aaa[1];

jQuery('th.views-field-line-item-title').html(bb+'<span class="order-product">('+cc+'</span>');
}

var sales = jQuery('th.views-field-quantity').html();
if(sales!==undefined){
aaa=order.split(' (');


bb=aaa[0];
cc=aaa[1];

jQuery('th.views-field-quantity').html(bb+'<span class="sales-product">('+cc+'</span>');
}


jQuery('.checkout-buttons .panel-body').prepend('<a href="http://confluence.qpsoftware.cn/oceanfleet/seafood-products"><button id="edit-continue" class="checkout-back btn btn-default form-submit" type="submit" name="op" value="Continue">Go Back</button></a>');

   //~ for add a delivery address title
   jQuery('.page-user-addressbook form#commerce-addressbook-customer-profile-form').prepend('<h3 class="delivery-address-title">ADD A DELIVERY ADDRESS</h3>');

     //~ code for change the label of commerce order operation link(edit) 
	 jQuery('.commerce-order-edit a').text('Dispatch');
	
  jQuery('.oceanfleet-custom-form #edit-submitted-product-list-1, .oceanfleet-custom-form #edit-custom-contract-payment-newsletter-product-list-1').click(function(){
  jQuery('input:checkbox').not(this).prop('checked', this.checked);
  if(jQuery(this).prop('checked')){
        jQuery('.control-label .checkbox-wrapper #edit-agree-agree').prop('checked', false);
    }
});
 
    //~ jQuery(".oceanfleet-custom-form #edit-submitted-product-list-1, .oceanfleet-custom-form #edit-custom-contract-payment-newsletter-product-list-1").click(function () {
    //~ //jQuery('input:checkbox').not(this).prop('checked', this.checked);
    //~ }); 
   
     var isChromium = window.chrome;
     if ( jQuery(window).width() < 767) 
     {  
     if(isChromium){
   
jQuery('#navbar-collapse nav:nth-child(2)').each(function () { 
	jQuery(this).insertBefore(jQuery(this).prev('#navbar-collapse nav:nth-child(1)')); 
    jQuery('section#block-lang-dropdown-language form#lang_dropdown_form_language div.ldsSkin').prepend('<span class="menu-language">Language</span>');
    jQuery( document ).ajaxComplete(function() {
	jQuery('body #navbar-collapse section#block-custom-products-country-city-menu div.ddcommon').prepend('<span class="menu-country">Country/Currency</span>'); 
 });
    jQuery('div#city-wrapper').prepend('<span class="menu-city">City</span>');
   
 }); 
}else{
	jQuery('#navbar-collapse nav:nth-child(2)').each(function () { 
	jQuery(this).insertBefore(jQuery(this).prev('#navbar-collapse nav:nth-child(1)')); 
    jQuery('section#block-lang-dropdown-language form#lang_dropdown_form_language div.ldsSkin').prepend('<span class="menu-language">Language</span>');
    jQuery( document ).ajaxComplete(function() {
	jQuery('body #navbar-collapse section#block-custom-products-country-city-menu div.ddcommon  ').prepend('<span class="menu-country">Country/Currency</span>'); 
    });
    jQuery('div#city-wrapper').prepend('<span class="menu-city">City</span>');
   
 	 }); 
	}
}

var deviceAgent = navigator.userAgent.toLowerCase();
	var agentID = deviceAgent.match(/(iphone|android)/);
	if (agentID) {
    jQuery('#navbar-collapse nav:nth-child(2)').each(function () { 
	jQuery(this).insertBefore(jQuery(this).prev('#navbar-collapse nav:nth-child(1)')); 

 	 });     // mobile code here
	}


    
     
     
     //~ code for hide go to back button & on review page
 
         var query = window.location.search.substring(1);
         if(query){
	     jQuery('.checkout-buttons .checkout-cancel, .checkout-buttons .checkout-back').hide();
	     jQuery('form#commerce-checkout-form-review span.button-operator').hide();
	     jQuery('.radio input[type="radio"], .radio-inline input[type="radio"], .checkbox input[type="checkbox"], .checkbox-inline input[type="checkbox"]').prop('checked', true);
	     jQuery('form#commerce-checkout-form-review fieldset#edit-commerce-payment').hide();
         }

          //~ var interest_amount = jQuery('td.views-field.views-field-php').text();
          //~ jQuery('td.balance').replaceWith('<td class="balance">$'+interest_amount+'</td>');
          
          var segment3 = (window.location.href.split('/')[3]);
var segment4 = (window.location.href.split('/')[4]);
var segment5 = (window.location.href.split('/')[5]);

if((segment3=='reminder') || (segment4=='reminder'))
{
  jQuery('.last.leaf').addClass('active');
}

if((segment3=='refund') || (segment4=='refund'))
{
  jQuery('.my-refunds').addClass('active');
}

if((segment3=='my-message') || (segment4=='my-message'))
{
  jQuery('.my-messages').addClass('active');
}

if((segment3=='orders') || (segment4=='orders'))
{
  jQuery('.my-orders').addClass('active');
}

if(segment5=='addressbook')
{
  jQuery('.my-delivery-addresses a').addClass('active');
}        
});

//code for update total price
    jQuery( document ).ajaxComplete(function() {
    var myurls= window.location.href.split('=');
	var mydata = myurls[1];
	if(mydata){
	var amt = Number(mydata).toFixed(2);
    jQuery(".component-total" ).replaceWith("<td class='component-total'>$"+amt+"</td>");
    }
  //~ jQuery('#edit-country_child li').removeClass('selected');
  //~ jQuery("#edit-country_child li:nth-child(3)").addClass('selected');

   //~ jQuery.get("http://ipinfo.io", function (response) {
   //~ var ip = jQuery("#country-city-ajax-dropdown").val("IP: " + response.ip);
   //~ var country = jQuery("#country-city-ajax-dropdown").val("Location: " + response.country + ", " + response.region);
   
   //~ if(country != 'undefined'){
   //~ 
 //~ jQuery('select option[value="6"]').attr("selected",true);
//~ 
  //~ }
  //~ });

jQuery('.verify-button').html('Verify');
	   jQuery('#datepicker-here').attr('readonly', true);
	  

 });

