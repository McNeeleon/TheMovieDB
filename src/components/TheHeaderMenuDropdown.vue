<template>
	<ul class="menu-dromdown rounded-3 rounded-top-0">
		<li class="nav">
			<a href="#">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="18"
					height="18"
					fill="#6c757d"
					class="bi bi-camera-video"
					viewBox="0 0 16 16"
				>
					<path
						fill-rule="evenodd"
						d="M0 5a2 2 0 0 1 2-2h7.5a2 2 0 0 1 1.983 1.738l3.11-1.382A1 1 0 0 1 16 4.269v7.462a1 1 0 0 1-1.406.913l-3.111-1.382A2 2 0 0 1 9.5 13H2a2 2 0 0 1-2-2V5zm11.5 5.175 3.5 1.556V4.269l-3.5 1.556v4.35zM2 4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h7.5a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H2z"
					/>
				</svg>
				<span>Movie </span></a
			>
		</li>
		<li class="nav">
			<a href="#">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="16"
					height="16"
					fill="#6c757d"
					class="bi bi-film"
					viewBox="0 0 16 16"
				>
					<path
						d="M0 1a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V1zm4 0v6h8V1H4zm8 8H4v6h8V9zM1 1v2h2V1H1zm2 3H1v2h2V4zM1 7v2h2V7H1zm2 3H1v2h2v-2zm-2 3v2h2v-2H1zM15 1h-2v2h2V1zm-2 3v2h2V4h-2zm2 3h-2v2h2V7zm-2 3v2h2v-2h-2zm2 3h-2v2h2v-2z"
					/>
				</svg>
				<span>Serial</span></a
			>
		</li>
		<li class="nav">
			<a href="#"
				><svg
					xmlns="http://www.w3.org/2000/svg"
					width="16"
					height="16"
					fill="#6c757d"
					class="bi bi-bar-chart-line"
					viewBox="0 0 16 16"
				>
					<path
						d="M11 2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v12h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3h1V7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7h1V2zm1 12h2V2h-2v12zm-3 0V7H7v7h2zm-5 0v-3H2v3h2z"
					/>
				</svg>
				<span>Top</span>
			</a>
		</li>
		<li class="nav">
			<a href="#">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="16"
					height="16"
					fill="#6c757d"
					class="bi bi-stopwatch"
					viewBox="0 0 16 16"
				>
					<path
						d="M8.5 5.6a.5.5 0 1 0-1 0v2.9h-3a.5.5 0 0 0 0 1H8a.5.5 0 0 0 .5-.5V5.6z"
					/>
					<path
						d="M6.5 1A.5.5 0 0 1 7 .5h2a.5.5 0 0 1 0 1v.57c1.36.196 2.594.78 3.584 1.64a.715.715 0 0 1 .012-.013l.354-.354-.354-.353a.5.5 0 0 1 .707-.708l1.414 1.415a.5.5 0 1 1-.707.707l-.353-.354-.354.354a.512.512 0 0 1-.013.012A7 7 0 1 1 7 2.071V1.5a.5.5 0 0 1-.5-.5zM8 3a6 6 0 1 0 .001 12A6 6 0 0 0 8 3z"
					/>
				</svg>
				<span>Soon</span>
			</a>
		</li>
	</ul>
</template>

<style lang="scss">
$menu-color: #2a2a2b;

.isShow .menu-dromdown {
	visibility: visible;
	opacity: 1;
}

.menu-dromdown {
	transition: all 0.2s;
	visibility: hidden;
	opacity: 0;
	position: absolute;
	top: 0;
	width: 110%;

	overflow: hidden;

	background-color: $menu-color;
	padding: 60px 20px 10px;
	min-height: 200px;

	li {
		margin-bottom: 10px;
	}
	a {
		display: flex;
		align-items: center;
		text-decoration: none;
		font-size: 1.2em;
		color: #6c757d;
		font-weight: 600;

		&:hover {
			color: #fff;
		}

		&:hover svg {
			fill: #fff;
		}

		svg {
			margin-right: 10px;
		}
	}
}
</style>
