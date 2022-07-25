<template>
	<div>
		<apexchart
			id="chart"
			type="area"
			height="350px"
			:options="chartOptions"
			:series="series"
		></apexchart>
	</div>
</template>

<script>
import VueApexCharts from 'vue3-apexcharts';
import { ref } from 'vue';
import { formatDate } from '../utils/formatDate';

export default {
	components: {
		apexchart: VueApexCharts,
	},
};
</script>
<script setup>
const props = defineProps({
	mediaData: {
		type: Array,
		default: () => [],
	},
});

const vote = ref([]);
const date = ref([]);
const title = ref([]);

props.mediaData.forEach((el) => {
	if (el.vote !== 0) {
		vote.value.push(el.vote);
		title.value.push(el.title);
		date.value.push(
			formatDate(el.createTime, {
				year: '2-digit',
				month: '2-digit',
				day: 'numeric',
			})
		);
	}
});

const series = [
	{
		name: false,
		data: vote.value,
	},
];
const chartOptions = {
	chart: {
		type: 'area',

		// foreColor: '#ccc',
		zoom: {
			enabled: true,
		},
	},
	colors: ['#ffd17c'],
	dataLabels: {
		enabled: false,
	},
	stroke: {
		curve: 'straight',
		width: '2',
	},
	title: {
		text: 'User votes',
		style: {
			fontSize: '16px',
			fontWeight: 'normal',
			fontFamily: 'inherit',
			color: '#ff9d00',
		},
	},

	xaxis: {
		categories: date.value,
		labels: {
			show: true,
		},
	},
	yaxis: {
		show: true,
		min: 1,
		max: 10,
		opposite: true,
	},
	legend: {
		horizontalAlign: 'left',
	},
	grid: {
		borderColor: '#555',
		clipMarkers: false,
		yaxis: {
			lines: {
				show: false,
			},
		},
	},
	fill: {
		gradient: {
			enabled: true,
			opacityFrom: 0.7,
			opacityTo: 0,
		},
	},
	markers: {
		size: 3,
		colors: ['#ffa600'],
		strokeColor: '#ffd17c',
		strokeWidth: 2,
		hover: {
			size: 4,
		},
	},

	tooltip: {
		custom: function ({ series, seriesIndex, dataPointIndex, w }) {
			return (
				'<div class="chart-tooltip rounded px-2 py-1 text-white fs-6">' +
				'<span class="d-block lh-1 ">' +
				series[seriesIndex][dataPointIndex] +
				'</span>' +
				title.value[dataPointIndex] +
				'</div>'
			);
		},
	},

	responsive: [
		{
			breakpoint: 1200,
			options: {
				chart: {
					height: '300px',
				},
			},
		},
		{
			breakpoint: 768,
			options: {
				chart: {
					height: '250px',
				},
			},
		},
		{
			breakpoint: 576,
			options: {
				chart: {
					height: '250px',
				},
				yaxis: {
					show: false,
				},
				markers: {
					size: 2,
					strokeWidth: 2,
				},
			},
		},
	],
};
</script>
<style lang="scss">
#chart {
	margin: 35px auto;

	.chart-tooltip {
		background: #ffa600;
	}

	.apexcharts-tooltip {
		transform: translateY(-40px);
		overflow: visible !important;
		white-space: normal !important;
	}

	.apexcharts-menu-icon {
		display: none;
	}

	@media (max-width: 600px) {
		#chart {
			.apexcharts-toolbar {
				gap: 5px;
			}

			.apexcharts-zoomin-icon,
			.apexcharts-zoomout-icon,
			.apexcharts-reset-icon {
				transform: scale(0.9);
			}
		}
	}
}
</style>
