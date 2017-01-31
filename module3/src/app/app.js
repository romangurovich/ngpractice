import '../style/app.css';
import angular from 'angular';
import NarrowItDownController from './controllers/narrow_it_down_controller';
import MenuSearchServiceProvider from './services/menu_search_service';
import FoundItems from './directives/found_items';
import Config from './config';

const MODULE_NAME = 'NarrowItDownApp';
angular.module(MODULE_NAME, [])
  .controller('NarrowItDownController', NarrowItDownController)
  .config(Config)
  .provider('MenuSearchService', MenuSearchServiceProvider)
  .directive('foundItems', FoundItems);

export default MODULE_NAME;