<template>
	<main class="main-container">
		<div class="toggle">
			<input class="toggle-input" type="checkbox">
			<div class="toggle-handle-wrapper">
				<div class="toggle-handle">
					<div class="toggle-handle-knob"></div>
					<div class="toggle-handle-bar-wrapper">
						<div class="toggle-handle-bar"></div>
					</div>
				</div>
			</div>
			<div class="toggle-base">
				<div class="toggle-base-inside"></div>
			</div>
		</div>
		<div class="toggle">
			<input class="toggle-input" type="checkbox" checked>
			<div class="toggle-handle-wrapper">
				<div class="toggle-handle">
					<div class="toggle-handle-knob"></div>
					<div class="toggle-handle-bar-wrapper">
						<div class="toggle-handle-bar"></div>
					</div>
				</div>
			</div>
			<div class="toggle-base">
				<div class="toggle-base-inside"></div>
			</div>
		</div>
	</main>
</template>

<script setup>
definePageMeta({
	layout: 'codepen',
});
</script>

<style lang="scss" scoped>
// stylelint-disable
@use 'sass:math';

.main-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
	padding-top: 1.5em;
  min-height: 100vh;
  font-size: 1em;
  row-gap: 4em;
}

$knob-size: 1.75em;

.toggle {
  display: flex;
  justify-content: center;
  position: relative;
}

.toggle-input {
  position: absolute;
  z-index: 2;
  bottom: 132.5%;
  border-radius: 50%;
  transform: rotate(-25deg);
  transform-origin: 50% 4.75em;
  width: $knob-size;
  height: $knob-size;
  opacity: 0;
  transition: transform .24s cubic-bezier(.65, 1.35, .5, 1);
  cursor: pointer;

  &:checked {
    transform: rotate(25deg);
  }
}

.toggle-handle-wrapper {
  position: absolute;
  z-index: 1;
  bottom: -135%;
  -webkit-mask-image: linear-gradient(to bottom, #000 62.125%, transparent 50%);
  mask-image: linear-gradient(to bottom, #000 62.125%, transparent 50%);
  width: 200%;
  overflow: hidden;
}

.toggle-handle {
  display: flex;
  flex-direction: column;
  align-items: center;
  transform: rotate(-25deg);
  transform-origin: bottom center;
  transition: transform .24s cubic-bezier(.65, 1.35, .5, 1);
	will-change: transform;

  .toggle-input:checked + .toggle-handle-wrapper > & {
    transform: rotate(25deg);
  }
}

.toggle-handle-knob {
  position: relative;
  z-index: 1;
  border-radius: 50%;
  width: $knob-size;
  height: $knob-size;
  background-image: radial-gradient(farthest-corner at 70% 30%, #fedee2 4%, #d63534 12% 24%, #a81a1a 50% 65%, #d63534 75%);
  transition: transform .24s cubic-bezier(.65, 1.35, .5, 1);

  .toggle-input:checked + .toggle-handle-wrapper & {
    transform: rotate(-90deg);
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    border-radius: inherit;
    width: 100%;
    height: 100%;
    box-shadow: inset 0 0 8px 2px rgb(255 255 255 / .4);
    opacity: 0;
    transition: opacity .2s;

    @media (hover: hover) {
      @at-root {
        .toggle-input:hover + .toggle-handle-wrapper &,
        .toggle-input:focus-visible + .toggle-handle-wrapper & {
          opacity: 1;
        }
      }
    }
  }
}

.toggle-handle-bar-wrapper {
  position: relative;
  width: .5em;
  height: 3em;
}

.toggle-handle-bar {
  position: absolute;
  top: -(math.div($knob-size, 2));
  left: 0;
  width: 100%;
  height: calc(100% + #{math.div($knob-size, 2)});
  background-image: linear-gradient(to right, #777475, #a4a4a4, #fff 45% 55%, #a4a4a4, #777475);
  background-position-x: .06125em;
  transition: background-position-x .24s cubic-bezier(.65, 1.35, .5, 1);
  box-shadow: inset 0 1em .25em rgb(0 0 0 / .4);

  .toggle-input:checked + .toggle-handle-wrapper & {
    background-position-x: -.06125em;
  }
}

.toggle-base {
  position: relative;
  border-radius: 3.125em;
  padding: .25em;
  width: 3.5em;
  height: 1.125em;
  background-color: #fff;
  background-image: linear-gradient(to bottom, #fff, #d7d7d7);
  box-shadow:
    0 -.25em .5em #fff,
    0 .25em .5em #d7d7d7,
  ;
}

.toggle-base-inside {
  position: relative;
  border-radius: inherit;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(to bottom, #a6a6a6, #7d7d7d);
  box-shadow:
    inset 0 .0625em rgb(255 255 255 / .2),
    inset 0 -.03125em rgb(255 255 255 / 1),
    inset 0 -.0625em .25em rgb(0 0 0 / .1),
  ;

  // toggle base inside active
  &::after {
    content: '';
    position: absolute;
    border-radius: inherit;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(to bottom, #5ab054, #438c3c);
    box-shadow: inherit;
    opacity: 0;
    transition: opacity .24s cubic-bezier(.65, 1.35, .5, 1);

    @at-root .toggle-input:checked ~ .toggle-base & {
      opacity: 1;
    }
  }
}
</style>
