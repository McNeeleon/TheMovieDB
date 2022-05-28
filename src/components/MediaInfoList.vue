<script setup>
const props = defineProps({
	mediaInfo: {
		type: Object,
		default: () => {},
	},
});

const checkForEmpty = (val) => (val === '' ? '—' : val);

const getMergeedData = Object.keys(props.mediaInfo).reduce((acc, curr) => {
	if (typeof props.mediaInfo[curr] === 'object') {
		for (const key in props.mediaInfo[curr]) {
			if (key === 'openingWeekendUSA') {
				continue;
			}

			acc[key] = checkForEmpty(props.mediaInfo[curr][key]);
		}
	} else {
		acc[curr] = checkForEmpty(props.mediaInfo[curr]);
	}
	return acc;
}, {});

const fromCamelCase = (value) => {
	const spaced = value.replace(/([a-z])([A-Z])/g, '$1 $2');
	return spaced
		.split(' ')
		.map((el, id) =>
			id === 0
				? el[0].toUpperCase() + el.slice(1)
				: el === 'USA'
				? el
				: el[0].toLowerCase() + el.slice(1)
		)
		.join(' ');
};

const formatListKeys = (key) => {
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
					class="text-wrap col-5 text-muted"
					style="color: rgba(0, 0, 0, 0.4)"
				>
					{{ formatListKeys(key) }}
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
