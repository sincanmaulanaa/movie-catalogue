import NowPlaying from '../views/pages/now-playing';
import Detail from '../views/pages/detail';
import Upcoming from '../views/pages/upcoming';

const routes = {
  '/': NowPlaying, // default page
  '/now-playing': NowPlaying,
  '/upcoming': Upcoming,
  '/detail/:id': Detail,
};

export default routes;
