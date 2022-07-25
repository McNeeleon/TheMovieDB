export const formatDataToArray = (data) =>
	data.map((item) => {
		const info = {};

		const id = item.name.split('/');
		const createTime = item.createTime;

		info.id = id[id.length - 1];
		info.createTime = createTime;

		for (const key in item.fields) {
			const element = item.fields[key].mapValue.fields;

			Object.entries(element).forEach(([key, val]) => {
				for (const el in val) {
					info[key] = el === 'integerValue' ? +val[el] : val[el];
				}
			});
		}

		return info;
	});
