(function(){$(function(){var e,t,n,r,i,s;Grid.init({target:".grid1"}),$(".collage").collagePlus(),$("body").scrollspy({target:".list"}),i=function(){return $(".books-old-season").addClass("hidden")},setTimeout(i,3e3),$(".slider-lazy").slick({lazyLoad:"ondemand",slidesToShow:4,slidesToScroll:1,onInit:function(e){return console.log("init")},responsive:[{breakpoint:1024,settings:{slidesToShow:3,slidesToScroll:3,infinite:!0,dots:!0}},{breakpoint:600,settings:{slidesToShow:2,slidesToScroll:2}},{breakpoint:480,settings:{slidesToShow:1},slidesToScroll:1}]}),$(".switch-season").on("click",function(e){var t,n,r;e.preventDefault(),t=$(this).data("target"),n=$("[data-season~="+t+"]"),r=$("[data-target~="+t+"]"),console.log(r);if(!n.is(":visible"))return $("[data-season]").addClass("hidden"),n.removeClass("hidden"),$("ul.season-swithcers > li").removeClass("active"),r.parent("li").addClass("active")}),$(".tip").tooltip(),$(".send-mail").on("click",function(e){var t,n;return n=$(this),t=$(".contact-form"),n.button("loading"),e.preventDefault(),$.ajax({type:"POST",url:"http://boxmailer.herokuapp.com",data:t.serialize(),cache:!1,error:function(e){return n.button("reset"),alert("O envio falhou, tente novamente mais tarde.")},success:function(e){return n.button("reset"),t[0].reset(),$("#contact-modal").modal("show")}})}),$('.section-nav a[href^="#"]').on("click",function(e){var t,n,r;return e.preventDefault(),$(".section-nav a.current").removeClass("current"),$(this).addClass("current"),n=this.hash,t=$(n),r=t.offset().top,$(this).data("offset")&&(r-=parseInt($(this).data("offset"))),$("html, body").stop().animate({scrollTop:r},900,"swing")}),n=$("nav.section-nav li").children(),e=[],s=0;while(s<n.length)t=n[s],r=$(t).attr("href"),e.push(r),s++;$(window).scroll(function(){var t,n,r,i,o,u,a,f;f=$(window).scrollTop(),a=$(window).height(),r=$(document).height(),s=0;while(s<e.length)u=e[s],i=$("a[href^='"+u+"']"),n=$(u).offset().top,i.data("offset")&&(n-=parseInt(i.data("offset"))),t=$(u).height(),f>=n&&f<n+t?$("a[href='"+u+"']").addClass("current"):$("a[href='"+u+"']").removeClass("current"),s++;f+a===r&&($("nav li:last-child a").hasClass("current")||(o=$(".current").attr("href"),$("a[href='"+o+"']").removeClass("current"),$("nav li:last-child a").addClass("current")))})})}).call(this);