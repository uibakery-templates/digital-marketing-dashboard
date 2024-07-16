const search = {{ui.searchInput.value}};
return {{data}}.map((item) => {
  return { ...item, productName: item.productName.replace(new RegExp(search, 'ig'), '<b style="background-color:Tomato;padding: 0 5px; color: white">' + search + '</b>') };
});