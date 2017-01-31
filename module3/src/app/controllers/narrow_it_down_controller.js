NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController (MenuSearchService) {
  let vm = this;

  vm.items = [];
  vm.query = '';
  vm.searchesCount = 0;

  vm.dropItem = (itemIndex) => {
    vm.items.splice(itemIndex, 1);
  };

  vm.loadItems = () => {
    MenuSearchService.getMatchedMenuItems(vm.query).then((items) => {
      vm.items = items;
      vm.searchesCount += 1;
    });
  };
}

export default NarrowItDownController;