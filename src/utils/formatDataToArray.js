export const formatDataToArray = (data) =>
	data.map((item) => {
		const info = {};

		const id = item.name.split('/');
		const createTime = item.createTime;

		info.id = id[id.length - 1];
		info.createTime = createTime;

		for (const key in item.fields) {
			const isObject = Object.keys(item.fields[key]);

			if (isObject[0] === 'mapValue') {
				const element = item.fields[key].mapValue.fields;
				Object.entries(element).forEach(([key, val]) => {
					for (const el in val) {
						info[key] = el === 'integerValue' ? +val[el] : val[el];
					}
				});
			} else {
				const [keyType, val] = Object.entries(item.fields[key])[0];
				info[key] = keyType === 'integerValue' ? +val : val;
			}
		}

		return info;
	});
