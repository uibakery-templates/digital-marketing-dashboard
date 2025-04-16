const search = {{ui.searchInput.value}};

const highlight = (text, search) => {
  if (!search) {
    return text;
  }
  return text.replace(new RegExp(search, 'ig'), '<b style="background-color:Tomato;padding: 0 5px; color: white">' + search + '</b>');
};

return {{data}}.map((item) => {
  return {
    ...item,
    productName: highlight(item.productName, search)
  };
});