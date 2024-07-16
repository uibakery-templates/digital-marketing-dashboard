const colors = ['success', 'warning', 'danger', 'info', 'basic', 'control', 'primary'];
const lines = {{data}}.map((item, index) => {
  const color = colors[index] ? colors[index] : 0;
  return { value: item.productLine, label: item.productLine, color };
});

lines.unshift({ value: null, label: 'No Category' });
return lines;