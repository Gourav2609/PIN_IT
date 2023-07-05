import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import HomeScreen from './screens/HomeScreen';
import DetailScreen from './screens/DetailsScreen';
import StudentLoginScreen from './screens/StudentLoginScreen';
import AdminLoginScreen from './screens/AdminLoginScreen';
import AdminDashboardScreen from './screens/AdminDashboardScreen';
import MoreOptionsScreen from './screens/MoreOptionsScreen';
import AddNoticeScreen from './screens/AddNoticeScreen';
import ViewNoticeScreen from './screens/ViewNoticeScreen';
import AddEventScreen from './screens/AddEventScreen';
import NoticeDetailScreen from './screens/ViewNoticeScreen';
import ContactUs from './screens/ContactUs';


const MainNavigator = createStackNavigator({
  Home: { screen: HomeScreen },
  Details: { screen: DetailScreen },
  StudentLogin: { screen: StudentLoginScreen },
  AdminLogin: { screen: AdminLoginScreen },
  AdminDashboard: { screen: AdminDashboardScreen },
  MoreOptions: { screen: MoreOptionsScreen },
  AddNotice: { screen: AddNoticeScreen },
  ViewNotice: { screen: ViewNoticeScreen },
  AddEvent:{ screen: AddEventScreen},
  NoticeDetail :{screen : NoticeDetailScreen},
  ContactUs: { screen : ContactUs},
});

const AppNavigator = createAppContainer(MainNavigator);

export default AppNavigator;
