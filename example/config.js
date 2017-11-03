// defines all availa auth options, though all are not required...
module.exports = {
  siteID: process.env.SITE_ID || '1234', // optional
  siteName: process.env.SITE_NAME || 'acme',
  webExID: process.env.SECURE_ADMIN_ID || 'admin@acme.com',
  email: process.env.SECURE_ADMIN_EMAIL || 'admin@acme.com', // optional
  password: process.env.SECURE_ADMIN_PASSWORD || 's3cret', // password or session ticket required
  partnerID: process.env.SECURE_PARTNER_ID || '5678', // optional
  sessionTicket: process.env.SECURE_SESSION_TICKET || 'abc123', // password or session ticket required
};
