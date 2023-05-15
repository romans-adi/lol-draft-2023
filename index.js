(()=>{"use strict";var e=document.querySelector(".nav-menu"),t=document.querySelector(".nav-toggle"),a=document.querySelectorAll(".nav-link"),s=document.querySelector(".burger-line-top"),n=document.querySelector(".burger-line-bottom");function o(){var a=window.innerWidth,o="false"===e.getAttribute("data-visible")&&a<768;t.setAttribute("aria-expanded",o),e.setAttribute("data-visible",o),e.setAttribute("aria-expanded",o),n.style.y=o?"45":"0",s.style.y=o?"45":"80"}t.addEventListener("click",o),a.forEach((function(e){return e.addEventListener("click",o)})),document.addEventListener("click",(function(t){var a=t.target.closest("#wrapper"),s=e.getAttribute("data-visible");a&&"true"===s&&o()}));var i=document.querySelector("#prospects-set");[{id:1,fullname:"Walter Scott",team:"Sin Valley Stars",age:19,position:"F",description:"This is a potentially transformational player who’s earned his status around the league as a near-unanimous No. 1 prospect, which doesn’t happen as often as you think, nor does it usually happen this early in the process.",image:"assets/img/prospects/player-1.png"},{id:2,fullname:"Chad Lester",team:"Credwell Steeds",age:18,position:"G",description:"Lester holds the early crown as the top incoming college guard prospect as an unusually gifted improviser and energy-bringer who should be able to play point guard full time in the NBA.",image:"assets/img/prospects/player-2.png"},{id:3,fullname:"Adalberto Najera",team:"Johnstown Milebreakers",age:19,position:"PG",description:"He has every physical tool in the box, good leadership traits, and offers a pretty high floor as a starting-caliber point guard, not to mention a star trajectory. Najera can get into the paint when he wants, knock down shots off the bounce, and already has terrific pick-and-roll acumen.",image:"assets/img/prospects/player-3.png"},{id:4,fullname:"John Karanowsky",team:"Werkstone Crocodiles",age:18,position:"G/F",description:"At 6'7”, his speed and passing gives him a bit of a failsafe if his shot doesn’t come all the way around, as he should be a threat to play downhill in the halfcourt and generate offense in transition. He also projects as a plus defender, with great foot speed, a long stride and plus shot-blocking ability for a wing.",image:"assets/img/prospects/player-4.png"},{id:5,fullname:"Chung Kuo",team:"Stonebo Fires",age:18,position:"F",description:"Factoring in his athletic profile, productivity and room for skill development on top of that, Kuo has quite a bit of untapped upside to offer, and there’s a big opportunity for him to rise over the course of the season.",image:"assets/img/prospects/player-5.png"},{id:6,fullname:"Thomas E. Field",team:"North Clarecro Manatees",age:19,position:"G/F",description:"Boasting electric athleticism comparable to that of his twin brother and a more aggressive mentality as both a defender and scorer, Thomas presents plenty of upside in his own right.",image:"assets/img/prospects/player-6.png"},{id:7,fullname:"German Herrmann",team:"Sonbay Hawks",age:19,position:"F",description:"While he doesn’t boast any one elite skill at this stage, he’s an advanced, well-balanced player who understands team basketball and has good-but-not-elite size on the wing.",image:"assets/img/prospects/player-7.png"},{id:8,fullname:"Yunus Jabr Handal",team:"Wilshe Stormhunters",age:19,position:"F",description:"Handal has taken an estimable step forward over the past year, and now couples his enormous frame and above-average coordination with an improved mentality and ball skills.",image:"assets/img/prospects/player-8.png"},{id:9,fullname:"Mitchell Moghadam",team:"Amesmil Stings",age:18,position:"G",description:"While not exceptionally fast or quick, Mitchell has a strong frame, good length, and a terrific instinct for blowing up plays on the defensive end. He’s smooth with the ball, rarely gets sped up, and enters college with a developed floater and a pretty reliable jump shot.",image:"assets/img/prospects/player-9.png"},{id:10,fullname:"Eugene Bryant Jr.",team:"New Lawperth Watchmen",age:18,position:"G",description:"Bryant Jr. is on the short list of top bucket-getters in this year’s freshman class and has real on-ball scoring ability that sets him apart from his peers. He relies more on skill and craft than athleticism and can be a streaky shooter, but he’s highly confident and there’s not much he can’t do offensively.",image:"assets/img/prospects/player-10.png"}].forEach((function(e){var t=document.createElement("div");t.classList.add("prospect-body"),t.setAttribute("id",e.id),e.id>2&&t.classList.add("hidden","md:flex"),t.innerHTML='\n    <div class="prospect-card flex mb-10 gap-6 justify-center">\n      <img src="'.concat(e.image,'" width="100%" class="rounded place-self-start pt-2 prospect-photo" alt="').concat(e.fullname,'">\n      <div class="prospect-card-content relative flex flex-col tems-stretch">\n        <h3 class="prospect-card-heading text-lg font-semibold">').concat(e.fullname,'</h3>\n        <h4 class="prospect-info text-lg">').concat(e.position,", ").concat(e.age,'</h4>\n        <p class="italic text-orange"><span class="text-black">College team:<br /></span>').concat(e.team,"</p>\n        <p>").concat(e.description,"</p>\n      </div>\n    </div>\n  "),i.appendChild(t)})),document.getElementById("show-more").addEventListener("click",(function(){var e,t,a;e=document.getElementById("show-more"),t=window.innerWidth,"true"===(a=e.getAttribute("data-opened"))&&t<768?e.setAttribute("data-opened",!1):"false"===a&&e.setAttribute("data-opened",!0)})),document.querySelectorAll(".prospect-body").forEach((function(e){var t=document.getElementById("show-more");"false"===t.getAttribute("data-opened")&&t.addEventListener("click",(function(){e.classList.remove("hidden");var a=t.getAttribute("data-opened"),s=document.querySelector(".chevron"),n=document.querySelector(".btn-more-text");"true"===a?(s.style.transform="scaleY(-1)",n.textContent="Hide"):"false"===a&&(s.style.transform="scaleY(1)",n.textContent="More",t.classList.add("bg-white"),e.id>2&&e.classList.add("hidden"))}))}))})();