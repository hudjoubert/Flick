import HomeView from '../view/HomeView';
import ContactView from '../view/ContactView';
import ProfileView from '../view/ProfileView';
import DiscoverView from '../view/DiscoverView';
import StoriesView from '../view/StoriesView';

const Routes = {
    Home: { screen: HomeView},
    Contact: { screen: ContactView},
    Profile: { screen: ProfileView},
    Discover: { screen: DiscoverView},
    Stories: { screen: StoriesView}
}

export default Routes;