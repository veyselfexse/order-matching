const moment = require('moment');

export class DateTime {
  /**
   *
   */
  static UTCNow() {
    return moment().utc();
  }

  /**
   *
   */
  static UTCNowAsSqlString() {
    return moment().utc().format('YYYY-MM-DD HH:mm:ss.SSS');
  }

  /**
   *
   */
  static Now() {
    return moment();
  }

  /**
   *
   */
  static UnixTimestamp() {
    return moment().unix();
  }

  /**
   *
   */
  static get ServerTimeAsMiliseconds() {
    return moment().valueOf();
  }

  /**
   *
   */
  static ServerTimeAsSeconds() {
    return moment().unix();
  }

  /**
   *
   */
  static DateToMoment(dateObject) {
    return moment(dateObject);
  }
}
