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
 */

/**
 * @typedef {"agenda" | "rubrics"} EventType
 */

/**
 * @typedef {object} ISchedule
 * @property {string} [date]
 * @property {string} [area]
 * @property {string} title
 * @property {IPersonasValues[]} [moderator]
 * @property {IPersonasValues[]} speakers
 * @property {[]} speakers
 * @property {number} index
 * @property {EventType} type
 */

/**
 * @typedef {object} IScheduleProps
 * @property {ISchedule[]} agenda
 * @property {ISchedule[]} rubrics
 */

/**
 * @typedef {object} IEventsProps
 * @property {ISchedule[]} events
 * @property {EventType} type
 */
