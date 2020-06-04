import Demographic from "./Demographic";

/**
 * This will be the wrapper class to hold on all the fetched information
 */
export default class Artist {

  constructor(name, songs = [], demographics = new Demographic(), image = null) {
    this.name = name;
    this.image = image; // profile picture
    this.songs = songs; // songs is meant to be an array of Song model class instances
    this.set_demographics(demographics); // demographics is meant to be an object of Demographic model class instance
  }

  /**
   *
   * @param {Song[]} songs: Array of Song instances
   */
  set_songs(songs) {
    if (songs) this.songs = songs;
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
