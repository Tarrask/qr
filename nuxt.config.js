const routerBase = process.env.DEPLOY_ENV === 'GH_PAGES' ? {
  base: '/qr/'
} : {}

module.exports = {
  router: {
      ...routerBase
  }
};
