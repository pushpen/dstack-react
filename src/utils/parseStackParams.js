export default attachments => {
    const fields = {};

    if (!attachments || !attachments.length)
        return;

    attachments.forEach(i => {
        Object.keys(i.params).forEach(key => {
            if (fields[key])
                fields[key].options.push(i.params[key]);
            else
                fields[key] = {options: [i.params[key]]};
        });
    });

    Object.keys(fields).forEach(key => {
        if (typeof fields[key].options[0] === 'string') {
            fields[key].type = 'select';

            fields[key].options = fields[key].options
                .filter((a, b) => fields[key].options.indexOf(a) === b)
                .map(i => ({
                    label: i,
                    value: i,
                }));
        }

        if (typeof fields[key].options[0] === 'boolean') {
            fields[key].type = 'checkbox';
        }

        if (typeof fields[key].options[0] === 'number') {
            const options = fields[key].options;

            fields[key].type = 'slider';
            fields[key].min = Math.min.apply(null, options);
            fields[key].max = Math.max.apply(null, options);

            fields[key].options = {};

            options
                .filter((a, b) => options.indexOf(a) === b)
                .forEach(i => fields[key].options[i] = i);
        }
    });

    return fields;
};