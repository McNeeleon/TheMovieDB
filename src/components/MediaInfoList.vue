<script setup>
import fromCamelCase from '../utils/fromCamelCase';
import checkForVoid from '../utils/checkForVoid.js';

const props = defineProps({
	mediaInfo: {
		type: Object,
		default: () => {},
	},
});

const getMergeedData = Object.keys(props.mediaInfo).reduce((acc, curr) => {
	if (typeof props.mediaInfo[curr] === 'object') {
		for (const key in props.mediaInfo[curr]) {
			if (key === 'openingWeekendUSA') {
				continue;
			}

			acc[key] = checkForVoid(props.mediaInfo[curr][key]);
		}
	} else {
		acc[curr] = checkForVoid(props.mediaInfo[curr]);
	}
	return acc;
}, {});

const formaInfoKey = (key) => {
	if (key === 'cumulativeWorldwideGross') {
		return 'Gross worldwid';
	} else if (key === 'runtimeStr') {
		return 'Runtime';
	} else {
		return fromCamelCase(key);
	}
};

const formatBudgetVal = (key, val) => {
	if (key === 'budget') {
		return val.split(' ')[0];
	} else {
		return val;
	}
};
</script>

<template>
	<div class="media-card card-body p-0 ms-0 ms-sm-4 ms-md-4">
		<div class="media-info text-start me-4">
			<h3 class="fs-3 fw-bold">Обзор</h3>

			<div
				v-for="(val, key) in getMergeedData"
				:key="key"
				class="row py-2"
			>
				<div
					class="col-5 text-muted"
					style="color: rgba(0, 0, 0, 0.4)"
				>
					{{ formaInfoKey(key) }}
				</div>
				<div
					class="col-7"
					:class="{ 'fst-italic text-muted': key === 'tagline' }"
					style="font-size: 17px; word-break: break-all"
				>
					<span
						v-if="key === 'contentRating'"
						class="certification px-1 border border-dark border-1 rounded fw-600"
					>
						{{ val }}
					</span>

					<template v-else>
						{{ formatBudgetVal(key, val) }}
					</template>
				</div>
			</div>
		</div>
	</div>
</template>

<style lang="scss"></style>
