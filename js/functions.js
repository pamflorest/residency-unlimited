(function($){

	"use strict";

	$(function(){


		console.log('hello from functions.js');


		/**
		 * Validación de emails
		 */
		window.validateEmail = function (email) {
			var regExp = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
			return regExp.test(email);
		};



		/**
		 * Regresa todos los valores de un formulario como un associative array
		 */
		window.getFormData = function (selector) {
			var result = [],
				data   = $(selector).serializeArray();

			$.map(data, function (attr) {
				result[attr.name] = attr.value;
			});
			return result;
		}


	});


	$(document).ready(function() {

		$('.popup').click(function(event) {
	    var width  = 575,
	        height = 400,
	        left   = ($(window).width()  - width)  / 2,
	        top    = ($(window).height() - height) / 2,
	        url    = this.href,
	        opts   = 'status=1' +
	                 ',width='  + width  +
	                 ',height=' + height +
	                 ',top='    + top    +
	                 ',left='   + left;

	    window.open(url, '', opts);

	    return false;
	  });


		$("#slider-principal").tinycarousel({
	        bullets  : true,
	        interval: true,
	        intervalTime : 4000,
	    });


		//tabs index
		$(function() {
		    $( "#tabs" ).tabs();
		  });
		//tabs index video
		$(function() {
		    $( "#tabs-video" ).tabs();
		  });

		$('.tab1').click(function() {
			$( "#tab1-span" ).addClass( "span-active").removeClass("hidden" );//quita hidden
		  	$( "#tab2-span" ).addClass( "hidden").removeClass("span-active" );//pone hidden
			$( "#tab3-span" ).addClass( "hidden").removeClass("span-active" );//pone hidden
		});

		$('.tab2').click(function() {
			$( "#tab1-span" ).addClass( "hidden").removeClass("span-active" );//pone hidden quita active
		  	$( "#tab2-span" ).addClass( "span-active").removeClass("hidden" );//quita hidden pone active
			$( "#tab3-span" ).addClass( "hidden").removeClass("span-active" );//pone hidden quita active
		});

		$('.tab3').click(function() {
			$( "#tab1-span" ).addClass( "hidden").removeClass("span-active" );//pone hidden
		  	$( "#tab2-span" ).addClass( "hidden").removeClass("span-active" );//pone hidden
			$( "#tab3-span" ).addClass( "span-active").removeClass("hidden" );//quita hidden
		});

		//tabs sidebar
	 	$('#tab-lomas').click(function(event) {
  				event.preventDefault();
		  		$( "a.loult" ).toggleClass( "lo-active" );//quita active
		  		$( "a.lomas" ).toggleClass( "lo-active" );//pone active
		  		$( "#tab-lo-feed" ).toggleClass( "hidden" );//quita active
		  		$( "#tab-lo-feed2" ).toggleClass( "hidden" );//pone active
		});

		$('#tab-loult').click(function(event) {
  				event.preventDefault();
		  		$( "a.loult" ).toggleClass( "lo-active" );//pone active
		  		$( "a.lomas" ).toggleClass( "lo-active" );//quita active
		  		$( "#tab-lo-feed" ).toggleClass( "hidden" );//pone active
		  		$( "#tab-lo-feed2" ).toggleClass( "hidden" );//quita active
		});

		$('#tab-semana').click(function(event) {
  				event.preventDefault();
		  		$( "#tab-semana" ).toggleClass( "active" );//quita active
		  		$( "#tab-hoy" ).toggleClass( "active" );//pone active
		  		$( "#tab-flechas" ).toggleClass( "flecha-active hidden" );//quita active pone hidden
		  		$( "#tab-flechah" ).toggleClass( "flecha-active hidden" );//pone active quita hidden
		  		$( "#tab-food" ).toggleClass( "hidden" );//quita active
		  		$( "#tab-food2" ).toggleClass( "hidden" );//pone active
		});

		$('#tab-hoy').click(function(event) {
  				event.preventDefault();
		  		$( "#tab-semana" ).toggleClass( "active" );//pone active
		  		$( "#tab-hoy" ).toggleClass( "active" );//quita active
		  		$( "#tab-flechas" ).toggleClass( "flecha-active hidden" );//pone active quita hidden
		  		$( "#tab-flechah" ).toggleClass( "flecha-active hidden" );//quita active pone hidden
		  		$( "#tab-food" ).toggleClass( "hidden" );//pone active
		  		$( "#tab-food2" ).toggleClass( "hidden" );//quita active
		});

	});



})(jQuery);







