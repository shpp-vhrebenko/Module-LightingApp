"use strict";angular.module("moduleLightingApp",["ngRoute"]).config(["$routeProvider",function(e){e.when("/",{templateUrl:"views/main.html",controller:"MainCtrl",controllerAs:"main"}).when("/about",{templateUrl:"views/about.html",controller:"AboutCtrl",controllerAs:"about"}).otherwise({redirectTo:"/"})}]),function(){angular.module("moduleLightingApp").factory("factoryReflectCoef",function(){return{selectArray:[{name:"Пол-10%, стены-30%, потолок-50%",value:"10,30,50"},{name:"Пол-30%, стены-30%, потолок-50%",value:"30,30,50"},{name:"Пол-30%, стены-50%, потолок-50%",value:"30,50,50"},{name:"Пол-20%, стены-50%, потолок-70%",value:"20,50,70"},{name:"Пол-30%, стены-50%, потолок-70%",value:"30,50,70"},{name:"Пол-30%, стены-50%, потолок-80%",value:"30,50,80"}]}}),angular.module("moduleLightingApp").factory("factorySafetyFactor",function(){return{selectArray:[{name:"Стандартные помещения",value:.8},{name:"Сверхзагрязненные помещения",value:.67}]}}),angular.module("moduleLightingApp").factory("factoryRequiredIllumination",function(){return{selectArray:[{name:"Чердаки",value:5},{name:"Лестницы",value:100},{name:"Коридоры",value:50},{name:"Вестибюли",value:150},{name:"Склады в зоне хранения товара",value:50},{name:"Склады в зоне приема товара",value:200},{name:"гаражи",value:200},{name:"парикмахерские",value:400},{name:"объединенные залы и буфеты",value:200},{name:"торговые залы магазинов",value:400},{name:"конференц-залы и залы заседаний",value:200},{name:"проектрные и конструкторские бюро",value:500},{name:"Читальные залы",value:300},{name:"Учебные аудитории и классы",value:300},{name:"Учебные аудитории и классы",value:400},{name:"Офисные помещения",value:500},{name:"Рабочий кабинет",value:500}]}})}(),function(){angular.module("moduleLightingApp").factory("factoryLightUseRate",function(){return{useRateArray:{"30,50,80":{.6:.33,.8:.41,1:.47,1.25:.53,1.5:.58,2:.65,2.5:.7,3:.64,4:.79,5:.83},"30,50,70":{.6:.32,.8:.39,1:.45,1.25:.51,1.5:.55,2:.62,2.5:.67,3:.71,4:.75,5:.78},"30,30,70":{.6:.25,.8:.32,1:.38,1.25:.44,1.5:.48,2:.56,2.5:.61,3:.65,4:.7,5:.74},"20,50,70":{.6:.45,.8:.56,1:.64,1.25:.71,1.5:.77,2:.83,2.5:.88,3:.91,4:.96,5:.98},"30,50,50":{.6:.3,.8:.36,1:.42,1.25:.47,1.5:.51,2:.57,2.5:.61,3:.64,4:.68,5:.71},"30,30,50":{.6:.24,.8:.3,1:.35,1.25:.41,1.5:.45,2:.52,2.5:.56,3:.6,4:.64,5:.68},"10,30,50":{.6:.24,.8:.29,1:.34,1.25:.39,1.5:.43,2:.49,2.5:.53,3:.56,4:.6,5:.62}}}})}(),angular.module("moduleLightingApp").controller("MainCtrl",["$scope","factoryReflectCoef","factorySafetyFactor","factoryRequiredIllumination","factoryLightUseRate",function(e,a,r,t,n){var l=this,o=e;o.showSpecification=!1,o.numbeLamps,e.room={},e.room.lamp={},l.reflectCoeffArray=a.selectArray,l.safetyFactorArray=r.selectArray,l.requiredIlluminationArray=t.selectArray,e.room.reflectCoeff="20,50,70",e.room.heightRoomLighting=.8,e.room.safetyFactor="0.8",e.room.requiredIllumination="300",e.room.lamp.numbeLamps="1";var u=[.6,.8,1,1.25,1.5,2,2.5,3,4,5],m=n.useRateArray;this.isTypeLed=function(e){return"led"===e},this.calcLightning=function(e){for(var a=e.space/((e.height-e.heightRoomLighting)*(e.perimeter/2)),r=0;r<u.length;r++){if(r+1==u.length){a=u[r];break}if(a==u[r])break;if(a>u[r]&&a<u[r+1]){a=u[r+1];break}}"led"===e.lamp.typeLamp&&(e.lamp.numbeLamps=1);var t=m[e.reflectCoeff][a],n=Math.round(e.requiredIllumination*e.space/(t*(e.lamp.numbeLamps*e.lamp.luminousFlux)*e.safetyFactor));n*e.lamp.numbeLamps*e.lamp.power;o.numbeLamps=n,o.showSpecification=!0}}]),angular.module("moduleLightingApp").controller("AboutCtrl",function(){});