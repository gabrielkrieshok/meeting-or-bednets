webpackJsonp([1],{13:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=s(1),i=s(16),n=s(20),r=s(59),o=s.n(r),l=s(60),u=s.n(l),c=s(62),d=s.n(c);a.default.use(d.a),a.default.use(u.a),a.default.use(o.a,{defaultIconPack:"fa"}),a.default.config.productionTip=!1,new a.default({el:"#app",router:n.a,template:"<App/>",components:{App:i.a}})},16:function(e,t,s){"use strict";function a(e){s(17)}var i=s(7),n=s(19),r=s(6),o=a,l=r(i.a,n.a,!1,o,null,null);t.a=l.exports},17:function(e,t){},19:function(e,t,s){"use strict";var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"app"}},[s("router-view")],1)},i=[],n={render:a,staticRenderFns:i};t.a=n},20:function(e,t,s){"use strict";var a=s(1),i=s(21),n=s(22);a.default.use(i.a),t.a=new i.a({routes:[{path:"/",name:"Home",component:n.a}]})},22:function(e,t,s){"use strict";function a(e){s(23)}var i=s(8),n=s(57),r=s(6),o=a,l=r(i.a,n.a,!1,o,null,null);t.a=l.exports},23:function(e,t){},57:function(e,t,s){"use strict";var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"app"}},[s("section",{staticClass:"hero is-primary"},[e._m(0),e._v(" "),e._m(1),e._v(" "),s("div",{staticClass:"hero-body"},[s("div",{staticClass:"container has-text-centered"},[s("div",{staticClass:"container has-text-left",attrs:{id:"inputs"}},[s("div",{staticClass:"columns"},[s("div",{staticClass:"column is-1"}),e._v(" "),s("div",{staticClass:"form-group column",class:{"form-group--error":e.$v.attendees.$error}},[s("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.attendees,expression:"attendees",modifiers:{trim:!0}}],staticClass:"input is-medium form__input",attrs:{type:"number",placeholder:"# meeting attendees"},domProps:{value:e.attendees},on:{input:[function(t){t.target.composing||(e.attendees=t.target.value.trim())},e.handleAttendees],blur:function(t){e.$forceUpdate()}}}),e._v(" "),s("p",{staticClass:"form-group__message"},[e._v("Enter the number of attendees")]),e._v(" "),e.$v.attendees.between?e._e():s("p",{staticClass:"form-group__message"},[e._v("Must be no more than "+e._s(e.$v.attendees.$params.between.max))])]),e._v(" "),s("div",{staticClass:"form-group column",class:{"form-group--error":e.$v.hours.$error}},[s("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.hours,expression:"hours",modifiers:{trim:!0}}],staticClass:"input is-medium form__input",attrs:{type:"number",placeholder:"duration"},domProps:{value:e.hours},on:{input:[function(t){t.target.composing||(e.hours=t.target.value.trim())},e.handleHours],blur:function(t){e.$forceUpdate()}}}),e._v(" "),s("span",{staticClass:"form-group__message"},[e._v("Enter the number of hours of the meeting/event")])]),e._v(" "),s("div",{staticClass:"form-group column",class:{"form-group--error":e.$v.salary.$error}},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.displayValue,expression:"displayValue"}],staticClass:"input is-medium form__input",attrs:{placeholder:"salary"},domProps:{value:e.displayValue},on:{blur:function(t){e.isInputActive=!1},focus:function(t){e.isInputActive=!0},input:function(t){t.target.composing||(e.displayValue=t.target.value)}}}),e._v(" "),s("span",{staticClass:"form-group__message"},[e._v("Enter the estimated average yearly salary of the attendees")])]),e._v(" "),s("div",{staticClass:"column is-1"})])]),e._v(" "),s("hr")]),e._v(" "),s("div",{staticClass:"column is-8 is-offset-2"},[s("transition-group",{attrs:{name:"slide-fade"}},[e._l(e.bednetImagesLarge,function(t){return e.bednetImagesTotal>0?s("div",{key:t+"large",staticClass:"bednet large"},[s("span",{staticClass:"centered title is-size-1"},[e._v("1,000")])]):e._e()}),e._v(" "),e._l(e.bednetImagesMedium,function(t){return e.bednetImagesTotal>0?s("div",{key:t+"medium",staticClass:"bednet medium"},[s("span",{staticClass:"centered title is-size-3"},[e._v("100")])]):e._e()}),e._v(" "),e._l(e.bednetImagesSmall,function(t){return e.bednetImagesTotal>0?s("div",{key:t+"small",staticClass:"bednet small"}):e._e()})],2)],1)]),e._v(" "),s("div",{attrs:{id:"band"}},[s("div",{staticClass:"column is-8 is-offset-2 has-text-centered"},[s("h1",{staticClass:"subtitle is-size-4 has-text-white"},[s("strong",{staticClass:"has-text-white"},[e._v(" The Formula: ")]),e._v(e._s(e.attendees)+" attendees · "+e._s(e.hours)+" hours · ( "+e._s(e.displayValue)+" yearly salary / 2,087 billable hours"),s("sup",[e._v("1")]),e._v(") = $"+e._s(e.bednetsMoney)+"(USD) = "+e._s(e.bednets)+" Bednets"),s("sup",[e._v("2")])])])]),e._v(" "),s("div",{staticClass:"hero-foot"},[s("div",{staticClass:"container"},[s("div",{staticClass:"column is-6 is-offset-3 has-text-centered"},[s("h1",{staticClass:"subtitle is-size-3",attrs:{id:"subheading"}},[e._v("Share on social media with how many bednets you could have bought!")]),e._v(" "),s("social-sharing",{attrs:{url:"https://gabrielkrieshok.github.io/mosquitoes-vs-meetings/",title:e.socialMessage,description:e.socialMessage,quote:e.socialMessage,hashtags:"#malaria #meetings #bednets","twitter-user":"gabrielkrieshok"},inlineTemplate:{render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("span",[s("ul",[s("li",[s("network",{attrs:{network:"email",id:"email"}},[s("i",{staticClass:"fa fa-fw fa-envelope  fa-2x"})])],1),e._v(" "),s("li",[s("network",{attrs:{network:"facebook",id:"facebook"}},[s("i",{staticClass:"fa fa-fw fa-facebook  fa-2x"})])],1),e._v(" "),s("li",[s("network",{attrs:{network:"twitter",id:"twitter"}},[s("i",{staticClass:"fa fa-fw fa-twitter fa-2x"})])],1)])])},staticRenderFns:[]}})],1)]),e._v(" "),e._m(2),e._v(" "),e._m(3)])])])},i=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"hero-body"},[a("div",{staticClass:"container has-text-centered"},[a("div",{staticClass:"column is-8 is-offset-2 has-text-centered"},[a("img",{attrs:{src:s(58),width:"150"}}),e._v(" "),a("h1",{staticClass:"title is-size-1 is-spaced",attrs:{id:"heading"}},[e._v("Mosquitoes vs. Meetings")]),e._v(" "),a("h1",{staticClass:"subtitle is-size-4",attrs:{id:"subheading"}},[e._v("How many bednets could be bought in lieu of the resources required for your meeting?")]),e._v(" "),a("h1",{staticClass:"subtitle is-size-6",attrs:{id:"subheading"}},[a("em",[e._v("Creator's Note: I created this simple web app after sitting in one too many meetings that really should have been just been an email in the first place. Just a way to remind us that our time and resources should always be used efficiently and effectively.")]),e._v(" ☺")])])])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"band"}},[s("div",{staticClass:"column is-8 is-offset-2 has-text-centered"},[s("h1",{staticClass:"subtitle is-size-4 has-text-white"},[e._v("Every two minutes, a child dies from malaria - a deadly, yet preventable disease.")]),e._v(" "),s("h1",{staticClass:"subtitle is-size-4 has-text-white"},[e._v("One great way to help is to support the "),s("a",{staticClass:"has-text-white",attrs:{href:"https://nothingbutnets.net/"}},[e._v("UN's 'Nothing But Nets' Campaign.")])])])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"container"},[s("div",{staticClass:"column is-6 is-offset-3"},[s("p",[s("strong",[e._v("1) ")]),s("a",{attrs:{href:"https://www.opm.gov/policy-data-oversight/pay-leave/pay-administration/fact-sheets/computing-hourly-rates-of-pay-using-the-2087-hour-divisor/"}},[e._v("According to OPM")]),e._v(", 2,087 as the average number of work hours in a calendar year reasonably accommodates the year-to-year fluctuations in work hours, thus salary/2,087 for hourly salary.")]),e._v(" "),s("p",[s("strong",[e._v("2) ")]),e._v("There is a lot of variability in bednet costs -- accounting for manufacturing, pre-treated, and shipping costs, a "),s("a",{attrs:{href:"https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3348006/"}},[e._v("generally recognized figure of $2.50 per bednet")]),e._v(" is used.")])])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"container"},[s("div",{staticClass:"column is-10 is-offset-1 has-text-centered"},[s("h1",{staticClass:"title is-size-6"},[e._v("Made with ♥ by "),s("a",{attrs:{href:"https://gabrielkrieshok.com"}},[e._v("Gabriel Krieshok")]),e._v(" as a way to learn "),s("a",{attrs:{href:"https://vuejs.org"}},[e._v("Vue.js")]),e._v(", hosted on "),s("a",{attrs:{href:"https://github.com/gabrielkrieshok/mosquitoes-vs-meetings"}},[e._v("Github")]),e._v(".")])])])}],n={render:a,staticRenderFns:i};t.a=n},58:function(e,t,s){e.exports=s.p+"static/img/mosquito.29a2e3c.png"},7:function(e,t,s){"use strict";t.a={name:"app"}},8:function(e,t,s){"use strict";var a=s(24),i=s.n(a),n=s(37);s.n(n);t.a={name:"app",data:function(){return{attendees:10,hours:10,salary:1e5,salaryDisplay:null,bednetImages:null,isInputActive:!1}},computed:{displayValue:{get:function(){return this.isInputActive&&null!=this.salary?this.salary.toString():null==this.salary?"":"$ "+this.salary.toFixed(0).replace(/(\d)(?=(\d{3})+(?:\.\d+)?$)/g,"$1,")},set:function(e){var t=parseFloat(e.replace(/[^\d.]/g,""));isNaN(t)&&(t=0),this.salary=t}},bednets:function(){return(this.attendees*this.hours*(this.salary/2087)/2.5).toFixed(0).toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")},bednetsMoney:function(){return(this.attendees*this.hours*(this.salary/2087)).toFixed(0).toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")},bednetImagesTotal:function(){return Math.floor(this.attendees*this.hours*(this.salary/2087)/2.5)},bednetImagesLarge:function(){return Math.floor(this.bednetImagesTotal/1e3)},bednetImagesMedium:function(){return Math.floor(this.bednetImagesTotal%1e3/100)},bednetImagesSmall:function(){return Math.floor(this.bednetImagesTotal%100)},socialMessage:function(){return"We could have bought "+this.bednets.toString()+" anti-malaria bednets instead of having this meeting."}},validations:{attendees:{between:Object(n.between)(0,100)},hours:{between:Object(n.between)(0,99)},salary:{between:Object(n.between)(0,9999999)}},methods:{handleAttendees:function(e){var t=Number(e.target.value);t>99?this.attendees=99:(t<0||i()(t))&&(this.attendees=0)},handleHours:function(e){var t=Number(e.target.value);t>99?this.hours=99:(t<0||i()(t))&&(this.hours=0)}}}}},[13]);
//# sourceMappingURL=app.bd2423a987cceecdeb0f.js.map