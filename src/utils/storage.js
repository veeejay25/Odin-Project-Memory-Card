const BEST_SCORE_KEY = "bestScore";

/**
 * Retrieve the best score from localStorage.
 * @returns {number} The stored best score, or 0 if none found / on error.
 */
export function getBestScore() {
  try {
    const stored = localStorage.getItem(BEST_SCORE_KEY);
    const parsed = parseInt(stored, 10);
    return isNaN(parsed) ? 0 : parsed;
  } catch (err) {
    console.error("Failed to read best score from storage:", err);
    return 0;
  }
}

/**
 * Persist a new best score to localStorage.
 * @param {number} score – The new best score to save.
 */
export function setBestScore(score) {
  try {
    localStorage.setItem(BEST_SCORE_KEY, String(score));
  } catch (err) {
    console.error("Failed to write best score to storage:", err);
  }
}

/**
 * Clear the best score from localStorage (for resetting / testing).
 */
export function clearBestScore() {
  try {
    localStorage.removeItem(BEST_SCORE_KEY);
  } catch (err) {
    console.error("Failed to clear best score from storage:", err);
  }
}
