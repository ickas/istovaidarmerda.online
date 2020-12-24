/**
 * @typedef {object} IPersonasValues
 *
 * @property {string} url
 * @property {string} name
 * @property {string} avatar
 * @property {string} job
 */

/**
 * @typedef {object} IPersonasProps
 * @property {IPersonasValues[]} values
 * @property {string} title
 */

/**
 * @typedef {object} ISchedule
 * @property {string} date
 * @property {string} area
 * @property {string} title
 * @property {IPersonasValues[]} moderator
 * @property {IPersonasValues[]} speakers
 * @property {number} index
 */

/**
 * @typedef {object} IScheduleProps
 * @property {ISchedule[]} events
 */

/**
 * @typedef {object} IEventsProps
 * @property {ISchedule[]} events
 */
