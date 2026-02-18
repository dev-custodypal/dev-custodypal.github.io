/**
 * Time Ago Calculator
 * Converts dates to relative time strings (e.g., "2 days ago", "1 week ago")
 */

function timeAgo(dateStr) {
  // Parse date-only string (YYYY-MM-DD) in local time to avoid timezone issues
  const parts = dateStr.split('-');
  const date = new Date(parts[0], parts[1] - 1, parts[2]);
  const now = new Date();

  // Compare at day level
  const todayStart = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const dateStart  = new Date(date.getFullYear(), date.getMonth(), date.getDate());
  const days       = Math.floor((todayStart - dateStart) / (1000 * 60 * 60 * 24));
  const weeks      = Math.floor(days / 7);
  const months     = Math.floor(days / 30);
  const years      = Math.floor(days / 365);

  if (days === 0)    return 'today';
  if (days === 1)    return 'yesterday';
  if (days < 7)      return days + ' days ago';
  if (weeks === 1)   return '1 week ago';
  if (weeks < 4)     return weeks + ' weeks ago';
  if (months === 1)  return '1 month ago';
  if (months < 12)   return months + ' months ago';
  if (years === 1)   return '1 year ago';
  return years + ' years ago';
}

// Initialize time-ago elements when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.timeago').forEach(function(el) {
    el.textContent = timeAgo(el.dataset.date);
  });
});
