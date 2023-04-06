//маска для телефона
(function(e){function t(){var e=document.createElement("input"),t="onpaste";return e.setAttribute(t,""),"function"==typeof e[t]?"paste":"input"}var n,a=t()+".mask",r=navigator.userAgent,i=/iphone/i.test(r),o=/android/i.test(r);e.mask={definitions:{9:"[0-9]",a:"[A-Za-z]","*":"[A-Za-z0-9]"},dataName:"rawMaskFn",placeholder:"_"},e.fn.extend({caret:function(e,t){var n;if(0!==this.length&&!this.is(":hidden"))return"number"==typeof e?(t="number"==typeof t?t:e,this.each(function(){this.setSelectionRange?this.setSelectionRange(e,t):this.createTextRange&&(n=this.createTextRange(),n.collapse(!0),n.moveEnd("character",t),n.moveStart("character",e),n.select())})):(this[0].setSelectionRange?(e=this[0].selectionStart,t=this[0].selectionEnd):document.selection&&document.selection.createRange&&(n=document.selection.createRange(),e=0-n.duplicate().moveStart("character",-1e5),t=e+n.text.length),{begin:e,end:t})},unmask:function(){return this.trigger("unmask")},mask:function(t,r){var c,l,s,u,f,h;return!t&&this.length>0?(c=e(this[0]),c.data(e.mask.dataName)()):(r=e.extend({placeholder:e.mask.placeholder,completed:null},r),l=e.mask.definitions,s=[],u=h=t.length,f=null,e.each(t.split(""),function(e,t){"?"==t?(h--,u=e):l[t]?(s.push(RegExp(l[t])),null===f&&(f=s.length-1)):s.push(null)}),this.trigger("unmask").each(function(){function c(e){for(;h>++e&&!s[e];);return e}function d(e){for(;--e>=0&&!s[e];);return e}function m(e,t){var n,a;if(!(0>e)){for(n=e,a=c(t);h>n;n++)if(s[n]){if(!(h>a&&s[n].test(R[a])))break;R[n]=R[a],R[a]=r.placeholder,a=c(a)}b(),x.caret(Math.max(f,e))}}function p(e){var t,n,a,i;for(t=e,n=r.placeholder;h>t;t++)if(s[t]){if(a=c(t),i=R[t],R[t]=n,!(h>a&&s[a].test(i)))break;n=i}}function g(e){var t,n,a,r=e.which;8===r||46===r||i&&127===r?(t=x.caret(),n=t.begin,a=t.end,0===a-n&&(n=46!==r?d(n):a=c(n-1),a=46===r?c(a):a),k(n,a),m(n,a-1),e.preventDefault()):27==r&&(x.val(S),x.caret(0,y()),e.preventDefault())}function v(t){var n,a,i,l=t.which,u=x.caret();t.ctrlKey||t.altKey||t.metaKey||32>l||l&&(0!==u.end-u.begin&&(k(u.begin,u.end),m(u.begin,u.end-1)),n=c(u.begin-1),h>n&&(a=String.fromCharCode(l),s[n].test(a)&&(p(n),R[n]=a,b(),i=c(n),o?setTimeout(e.proxy(e.fn.caret,x,i),0):x.caret(i),r.completed&&i>=h&&r.completed.call(x))),t.preventDefault())}function k(e,t){var n;for(n=e;t>n&&h>n;n++)s[n]&&(R[n]=r.placeholder)}function b(){x.val(R.join(""))}function y(e){var t,n,a=x.val(),i=-1;for(t=0,pos=0;h>t;t++)if(s[t]){for(R[t]=r.placeholder;pos++<a.length;)if(n=a.charAt(pos-1),s[t].test(n)){R[t]=n,i=t;break}if(pos>a.length)break}else R[t]===a.charAt(pos)&&t!==u&&(pos++,i=t);return e?b():u>i+1?(x.val(""),k(0,h)):(b(),x.val(x.val().substring(0,i+1))),u?t:f}var x=e(this),R=e.map(t.split(""),function(e){return"?"!=e?l[e]?r.placeholder:e:void 0}),S=x.val();x.data(e.mask.dataName,function(){return e.map(R,function(e,t){return s[t]&&e!=r.placeholder?e:null}).join("")}),x.attr("readonly")||x.one("unmask",function(){x.unbind(".mask").removeData(e.mask.dataName)}).bind("focus.mask",function(){clearTimeout(n);var e;S=x.val(),e=y(),n=setTimeout(function(){b(),e==t.length?x.caret(0,e):x.caret(e)},10)}).bind("blur.mask",function(){y(),x.val()!=S&&x.change()}).bind("keydown.mask",g).bind("keypress.mask",v).bind(a,function(){setTimeout(function(){var e=y(!0);x.caret(e),r.completed&&e==x.val().length&&r.completed.call(x)},0)}),y()}))}})})(jQuery);
$.mask.definitions['~']='[9]';
$("input[name='tell']").mask("+7 (~99) 999-99-99");
$('input[name="number"]').mask('9999 9999 9999 9999');
// домен сайта
var thisDomainName = (location.host);
$('.domainName').text(thisDomainName);
$(document).ready(function(){
//фиксация header
var stickyOffset = $('#box2').offset().top;
$(window).scroll(function(){
var sticky = $('header'),
scroll = $(window).scrollTop();
if (scroll >= stickyOffset) sticky.addClass('header-fixed');
else sticky.removeClass('header-fixed');});
//стрелка на первом экране - скрол
$('.arrouDown').on('click', function() {
$('html,body').animate({scrollTop:$('#box2').offset().top-0+"px"},{duration:1E3});});
// показ 1-й или 2-й формы в зависимости от выбранного радиобаттона
$('.radios .label-js1').click(function(){	
$('.requisitesForm1').fadeOut(0);
$('.requisitesForm2').fadeIn(600);
});	
$('.radios .label-js2').click(function(){		
$('.requisitesForm2').fadeOut(0);
$('.requisitesForm1').fadeIn(600);
});
// вызываем feedback
$(document).on('click', '.btn1', function(){
$('.modal1').arcticmodal();});
$(document).on('click', '.btn2', function(){
$('.modal2').arcticmodal();});
$(document).on('click', '.btn5', function(){
$('.modal3').arcticmodal();});
$(document).on('click', '.btn6', function(){
$('.modal5').arcticmodal();});
$(document).on('click', '.btn7', function(){
$('.modal4').arcticmodal();});
$(document).on('click', '.btn8', function(){
$('.modal6').arcticmodal();});
//кладр
$(function() {
$('input[name="city"]').kladr({
type: $.kladr.type.city
});
});
});
$(document).ready(function(){
// ----карусель в 4 секции-----
var formTestCarusel = $('.formTest_carusel');
formTestCarusel.owlCarousel({
mouseDrag:false,
touchDrag:false,
pullDrag:false,
freeDrag:false,
items:1,
margin:10,
dots:false,
});
// кастомные кнопки навигации
$(".next").click(function(){
formTestCarusel.trigger('next.owl.carousel');
});
$(".previous").click(function(){
formTestCarusel.trigger('prev.owl.carousel');
});
// вывод окна об успешной отправки в секции 4
$(".contact_form").submit(function( event ) {
$('.formTest_carusel').hide();
$('.submitAfter').show();
});
//вывод предпоследнего окна слайдера
$('.smsTo-js').click(function(){
$('.submitAfter').hide();
$('.formTest_carusel').show();
$('.sms-js').show();
$('.smsTo-js').hide();	
});
// ----карусель в модальном окне передать реквизиты  ----
//форма 1
var form1 = $('.formaFirst');
form1.owlCarousel({
items: 1,
margin: 10,
dots: false,
autoHeight:true,
});
// кастомные кнопки навигации
$(".forvard").click(function(){
form1.trigger('next.owl.carousel');
});
$(".prev").click(function(){
form1.trigger('prev.owl.carousel');
});
// форма 2
var form2 = $('.formaSecond');
form2.owlCarousel({
items: 1,
margin: 10,
dots: false,
autoHeight:true,
});
// кастомные кнопки навигации
$(".forvard2").click(function(){
form2.trigger('next.owl.carousel');
});
$(".prev2").click(function(){
form2.trigger('prev.owl.carousel');
});
});
//номер телефона в результаты
$(document).on('change', '#usph', function(){
$('.userPhone').text($('#usph').val());
});
// модальное окно меню-гамбургера
var burger = document.querySelector(".burger");
var menu = document.querySelector(".menu__list_wrap");
var close = document.querySelector(".closeModal");
burger.addEventListener("click", function () {
menu.classList.toggle("menu__close");
});
close.addEventListener("click", function () {
menu.classList.toggle("menu__close");
});