const savedPath = process.env.PATH;

/**
 * This patches npm bug https://github.com/npm/npm-lifecycle/issues/20,
 * which added more PATH variables than were allowed.
 *
 * @returns {void}
 */
export function removePath(): void {
  delete process.env.PATH;
  delete process.env.path;
}
