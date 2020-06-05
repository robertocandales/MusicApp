import Demographic from "./Demographic";

class Song {
  constructor(
    song_name,
    album,
    total_plays_number,
    unique_play_number,
    artists,
    image_url = null,
    demographics = new Demographic()
  ) {
    this.song_name = song_name;
    this.album = album;
    this.total_plays_number = total_plays_number;
    this.unique_plays_number = unique_play_number;
    this.image_url = image_url;
    this.artists = artists;
    this.demographics = demographics;
  }

  /**
   *
   * @param {Demographic} demographics
   */
  set_demographics(demographics) {
    if (demographics instanceof Demographic)
      this.demographics = demographics;
  }

}

/**
 * Transforms the given array to an array of Song instances
 * @param data
 * @returns {*}
 */
function parse_data(data) {
  // todo: change the hardcoded image link
  return data.map(
    (value, index, array) =>
      new Song(
        value.songs,
        value.albums,
        value.total_events,
        null,
        value.artists,
        'https://agenciaajn.com/new/wp-content/uploads/sia.jpg',
      ),
  );
}

export default Song;

export {parse_data};
