import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile208799Navigator from '../features/UserProfile208799/navigator';
import Tutorial208798Navigator from '../features/Tutorial208798/navigator';
import NotificationList208770Navigator from '../features/NotificationList208770/navigator';
import Settings208769Navigator from '../features/Settings208769/navigator';
import Settings208761Navigator from '../features/Settings208761/navigator';
import UserProfile208759Navigator from '../features/UserProfile208759/navigator';
import BlankScreen0208737Navigator from '../features/BlankScreen0208737/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
UserProfile208799: { screen: UserProfile208799Navigator },
Tutorial208798: { screen: Tutorial208798Navigator },
NotificationList208770: { screen: NotificationList208770Navigator },
Settings208769: { screen: Settings208769Navigator },
Settings208761: { screen: Settings208761Navigator },
UserProfile208759: { screen: UserProfile208759Navigator },
BlankScreen0208737: { screen: BlankScreen0208737Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
