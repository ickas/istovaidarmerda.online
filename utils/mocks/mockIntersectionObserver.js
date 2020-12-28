/* eslint-disable class-methods-use-this */
/**
 * mockIntersectionObserver.ts
 *
 * Mocks an implementation of IntersectionObserver
 */
export default class {
  constructor() {
    this.root = null;
    this.rootMargin = "";
    this.thresholds = [];
  }

  disconnect() {}

  observe() {}

  unobserve() {}
}
