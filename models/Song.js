import Demographic from './Demographic';

class Song {
  constructor(
    song_name,
    album,
    total_plays_number,
    unique_play_number,
    artists,
    image_url = null,
    demographics = new Demographic(),
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
    if (demographics instanceof Demographic) this.demographics = demographics;
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
        'https://firebasestorage.googleapis.com/v0/b/claromusica-b3d26.appspot.com/o/place_holder_playlists.png?alt=media&token=099e7bd0-36e8-461c-b8f4-f460b28a77d7',
      ),
  );
}

export default Song;

export { parse_data };
