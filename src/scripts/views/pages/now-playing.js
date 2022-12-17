import TheMovieDbSource from '../../data/themoviedb-source';

/* eslint-disable no-tabs */
const NowPlaying = {
  async render() {
    return `
		<h2>Now Playing Page</h2>
	`;
  },

  async afterRender() {
    const movies = await TheMovieDbSource.nowPlayingMovies();
    console.log(movies);
  },
};

export default NowPlaying;
