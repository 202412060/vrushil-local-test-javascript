// A coupon can be used until its expiry time.
function isExpired(coupon, now = Date.now()) {
  return coupon.expiresAt > now;
}

function canUse(coupon, now = Date.now()) {
  return coupon.active && !isExpired(coupon, now);
}

export { isExpired, canUse };
