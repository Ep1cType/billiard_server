'use strict';

/**
 * tournaments service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::tournaments.tournaments');
