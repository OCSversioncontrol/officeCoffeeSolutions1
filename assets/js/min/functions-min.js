$(document).ready(function(){$(function(){$(window).scroll(function(){$(".article, .whychoosehero, .serviceshero").each(function(o){var i=$(this).position().top+$(this).outerHeight(),t=$(window).scrollTop()+$(window).height();t+=200,t>i&&$(this).animate({opacity:"1"},500)})})})});