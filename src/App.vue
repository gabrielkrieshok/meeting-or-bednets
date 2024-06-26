<template>
<div id="app">

<section class="hero is-primary">

<div class="hero-body">
  <div class="container has-text-centered">
  <div class="column is-8 is-offset-2 has-text-centered">
    <img src="./assets/mosquito.png" width="150"/>
    <h1 id="heading" class="title is-size-1 is-spaced">Meeting or Bednets</h1>
    <h1 id="subheading" class="subtitle is-size-4">How many anti-malaria bednets could be bought in lieu of the resources required for this particular meeting? Let's do the math...</h1>
  </div>
  </div>
</div>

<div class="hero-body">
  <div class="container has-text-centered">

    <div id="inputs" class="container has-text-left">
      <div class="columns">
        
        <div class="column is-1"></div>

        <div class="form-group column" v-bind:class="{ 'form-group--error': $v.hours.$error }">
          <input
          class="input is-medium form__input"
          v-model.trim="hours"
          type="number"
          @input="handleHours"
          placeholder="duration">
          <span class="form-group__message">Duration of the meeting (in hours)</span>
        </div>

        <div class="form-group column" v-bind:class="{ 'form-group--error': $v.attendees.$error }">
          <input
          class="input is-medium form__input"
          v-model.trim="attendees"
          type="number"
          @input="handleAttendees"
          placeholder="# meeting attendees">
          <p class="form-group__message">Number of attendees</p>
          <p class="form-group__message" v-if="!$v.attendees.between">Must be no more than {{$v.attendees.$params.between.max}}</p>
        </div>

        <div class="form-group column" v-bind:class="{ 'form-group--error': $v.salary.$error }">
          <input
          class="input is-medium form__input"
          v-model="displayValue"
          @blur="isInputActive = false"
          @focus="isInputActive = true"
          placeholder="salary">
          <span class="form-group__message">Average salary of the attendees (ballpark)</span>
        </div>
        
        <div class="column is-1"></div>

      </div>
    </div>
    <hr />
    <h1 class="title is-size-3">This meeting could buy the equivalent of <span class="bednetnumber">{{ bednets }}</span> bednets</h1>
  </div>

  <div class="column is-6 is-offset-3">
    <transition-group name="slide-fade" v-if="bednetImagesLarge > 0">
      <div v-for="largeNet in bednetImagesLarge" :key="largeNet+'large'" class="bednet large"><span class="centered title is-size-1">1,000</span></div>
    </transition-group>
<br />
    <transition-group name="slide-fade" v-if="bednetImagesMedium > 0">
      <div v-for="mediumNet in bednetImagesMedium" :key="mediumNet+'medium'" class="bednet medium"><span class="centered title is-size-3">100</span></div>
    </transition-group>
<br />
    <transition-group name="slide-fade"  v-if="bednetImagesSmall > 0">
      <div v-for="smallNet in bednetImagesSmall" :key="smallNet+'small'" class="bednet small"></div>
    </transition-group>




      

  </div>
</div>

    <div class="container">
    <div class="column is-6 is-offset-3 has-text-centered">
    </div>
    </div>

<div id="band">
  <div class="column is-8 is-offset-2 has-text-centered">
    <h1 class="subtitle is-size-4 has-text-white">Every two minutes, a child dies from malaria - a deadly, yet preventable disease.</h1>
    <h1 class="subtitle is-size-4 has-text-white">One great way to help is to support the <a class="has-text-white" href="https://nothingbutnets.net/">UN's 'Nothing But Nets' Campaign.</a></h1>
  </div>
</div>

<div class="hero-foot">

  <div class="container">

    <div class="column is-6 is-offset-3">

    <p><strong>The Formula: </strong>{{ attendees }} attendees · {{ hours }} hours · ( {{ displayValue }} yearly salary / 2,087 billable hours<sup>1</sup>) = ${{ bednetsMoney }}(USD) = {{ bednets }} Bednets<sup>2</sup></p>
    <p><strong>1) </strong><a href="https://www.opm.gov/policy-data-oversight/pay-leave/pay-administration/fact-sheets/computing-hourly-rates-of-pay-using-the-2087-hour-divisor/">According to OPM</a>, 2,087 as the average number of work hours in a calendar year reasonably accommodates the year-to-year fluctuations in work hours, thus salary/2,087 for hourly salary.</p>
    <p><strong>2) </strong>There is a lot of variability in bednet costs -- accounting for manufacturing, pre-treated, and shipping costs, a <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3348006/">generally recognized figure of $2.50 per bednet</a> is used.</p>
  </div>
  </div>
  <div class="container">
    <div class="column is-10 is-offset-1 has-text-centered">

      <h1 class="title is-size-6">Made with ♥ by <a href="https://gabrielkrieshok.com">Gabriel Krieshok</a> as a way to learn <a href="https://vuejs.org">Vue.js</a>, hosted on <a href="https://github.com/gabrielkrieshok/mosquitoes-vs-meetings">Github</a>.</h1>
    </div>
  </div>
</div>

</section>

</div>
</template>

<script>

export default {
  name: 'app',
  data () {
    return {
      attendees: 5,
      hours: 1,
      salary: 60000,
      salaryDisplay: null,
      bednetImages: null,
      isInputActive: false
    }
  },
  computed: {
    displayValue: {
      get: function () {
        if (this.isInputActive && this.salary != null) {
          // Cursor is inside the input field. unformat display salary for user
          return this.salary.toString()
        } else if (this.salary == null) {
          // Default page load where salary is null
          return ''
        } else {
          // User is not modifying now. Format display salary for user interface
          return '$ ' + this.salary.toFixed(0).replace(/(\d)(?=(\d{3})+(?:\.\d+)?$)/g, '$1,')
        }
      },
      set: function (modifiedValue) {
        // Recalculate salary after ignoring "$" and "," in user input
        let newValue = parseFloat(modifiedValue.replace(/[^\d.]/g, ''))
        // Ensure that it is not NaN
        if (isNaN(newValue)) {
          newValue = 0
        }
        this.salary = newValue
      }
    },
    bednets: function () {
      // cost of bednets: $2.50
      // According to OPM, 2,087 as the average number of work hours in a calendar year reasonably accommodates the year-to-year fluctuations in work hours, thus salary/2,087 for hourly salary.
      const bednetsCalc = ((this.attendees * this.hours) * ((this.salary) / 2087)) / 2.50
      return bednetsCalc.toFixed(0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    },
    bednetsMoney: function () {
      const bednetsMoney = ((this.attendees * this.hours) * ((this.salary) / 2087))
      return bednetsMoney.toFixed(0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    },
    bednetImagesTotal: function () {
      return Math.floor(((this.attendees * this.hours) * ((this.salary) / 2087)) / 2.50)
    },
    bednetImagesLarge: function () {
      return Math.floor(this.bednetImagesTotal / 1000)
    },
    bednetImagesMedium: function () {
      return Math.floor((this.bednetImagesTotal % 1000) / 100)
    },
    bednetImagesSmall: function () {
      return Math.floor(this.bednetImagesTotal % 100)
    },
    socialMessage: function () {
      return 'We could have bought ' + this.bednets.toString() + ' anti-malaria bednets instead of having this meeting.'
    }
  },
  methods: {
    handleAttendees: function (event) {
      var value = Number(event.target.value)
      if (value > 99) {
        this.attendees = 99
      } else if (value < 0 || Number.isNaN(value)) {
        this.attendees = 0
      }
    },
    handleHours: function (event) {
      var value = Number(event.target.value)
      if (value > 99) {
        this.hours = 99
      } else if (value < 0 || Number.isNaN(value)) {
        this.hours = 0
      }
    }
  }
}
</script>



<style lang = "scss">

// Import Bulma's core
@import "~bulma/sass/utilities/_all";

// Set your colors
$primary: #f0f0f0;
$primary-invert: findColorInvert($primary);
$info: #90b9e2;

// Setup $colors to use as bulma classes (e.g. 'is-twitter')
$colors: (
    "white": ($white, $black),
    "black": ($black, $white),
    "light": ($light, $light-invert),
    "dark": ($dark, $dark-invert),
    "primary": ($primary, $primary-invert),
    "info": ($info, $info-invert),
    "success": ($success, $success-invert),
    "warning": ($warning, $warning-invert),
    "danger": ($danger, $danger-invert),
);




// Links
$link: $primary;
$link-invert: $primary-invert;
$link-focus-border: $primary;

// Import Bulma and Buefy styles
@import "~bulma";
@import "~buefy/src/scss/buefy";

html {
  background-color: $primary;
}

a {
  color: #90b9e2;
  text-decoration: none;
  border-bottom: 2px dashed #90b9e2;
}

p {
  margin-bottom: 1.2em;
}

.hero-body {
  padding-top: 0px;
  padding-bottom: 0px;
}

.bednetnumber {
  color: #b3363c;
  font-size: 1.1em;
  margin-top: -.5em;
  margin-right: auto;
}

#heading {
  margin-top: .5em;
}

#subheading {
  margin-top: 1em;
}

#band {
  background-color: $light-invert;
  margin-bottom: 1em;
  padding: 1em 1em;
}

.slide-fade-enter-active {
  transition: all .8s ease;
}
.slide-fade-leave-active {
  transition: all .8s ease;
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}

.large {
  width: 800px;
  height: 800px;
  display: block;
}

.medium {
  width: 300px;
  height: 300px;
  display: inline-block
}

.small {
  width: 50px;
  height: 50px;
  display: inline-block
}

.small.bednet:after {
  opacity: 1;
}

.bednet {
  position: relative;
  margin: 0 auto;
  background-size: contain;
  background-repeat: no-repeat;
}

.bednet:after {
    content: ' ';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
    opacity: 0.3;
    background-image: url('./assets/bednet.svg');
    background-repeat: no-repeat;
    background-position: 50% 0;
    background-size: cover;
}

.centered {
    opacity: 1;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    white-space:nowrap;
    z-index: 1;
}

.form-group {
  margin-bottom: 20px;
}

      ul {
        padding: 0;
        list-style: none;
      }
      ul i.fa {
        margin-right: 5px;
      }

      li {
        display: inline;
      }


</style>
