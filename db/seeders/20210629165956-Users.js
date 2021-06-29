'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
     //     {name, userName, email, password, profileImg, bio},
      return queryInterface.bulkInsert('Users', [
        {'Benas Svipas', 'BnsSvps', 'BnsSvps@gmail.com', 'password', 'https://thispersondoesnotexist.com/', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'},
        {'CoenraadS', 'CnrdS','CnrdS@gmail.com', 'password', 'https://thispersondoesnotexist.com/', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'},
        {'Dirk Baeumer', 'DrkBmr','DrkBmr@gmail.com', 'password', 'https://thispersondoesnotexist.com/', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'},
        {'HookyQR', 'HkyQR', 'HkyQR@gmail.com', 'password', 'https://thispersondoesnotexist.com/', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'},
        {'quicktype', 'qcktyp', 'qcktyp@gmail.com', 'password', 'https://thispersondoesnotexist.com/', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'},
        {'Aaron Bond', 'rnBnd', 'rnBnd@gmail.com', 'password', 'https://thispersondoesnotexist.com/', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'},
        {'Kevin Rose', 'KvnRs', 'KvnRs@gmail.com', 'password', 'https://thispersondoesnotexist.com/', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'},
        {'tombonnike', 'tmbnnk', 'tmbnnk@gmail.com', 'password', 'https://thispersondoesnotexist.com/', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'},
        { 'Eric Amodio', 'Ercmdo', 'Ercmdo@gmail.com', 'password', 'https://thispersondoesnotexist.com/', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'},
        {'Microsoft', 'Mcrsft', 'Mcrsft@gmail.com', 'password', 'https://thispersondoesnotexist.com/', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'},
        {'CodeStream', 'Cdstrm', 'Cdstrm@gmail.com', 'password', 'https://thispersondoesnotexist.com/', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'},
        { 'Arjun Attum', 'Ajnattm', 'Ajnattm@gmail.com', 'password', 'https://thispersondoesnotexist.com/', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'},
        {'Maxfield Walker', 'Mxfldwlkr', 'Mxfldwlkr@gmail.com', 'password', 'https://thispersondoesnotexist.com/', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'},
        { 'Philipp Kief', 'Phlppkf', 'Phlppkf@gmail.com', 'password', 'https://thispersondoesnotexist.com/', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'},
        {'Derek Sifford', 'Drksffrd', 'Drksffrd@gmail.com', 'password', 'https://thispersondoesnotexist.com/', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'},
        {'GitHub', 'Gthb', 'Gthb@gmail.com', 'password', 'https://thispersondoesnotexist.com/', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'},
        {'Ahmad Awais', 'Ahmdws', 'Ahmdws@gmail.com', 'password', 'https://thispersondoesnotexist.com/', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'},
        {'Monokai', 'Mnk', 'Mnk@gmail.com', 'password', 'https://thispersondoesnotexist.com/', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'},
      ]);
    //     {name, userName, email, password, profileImg, bio},
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
      return queryInterface.bulkDelete('Users', null, {});
  }
};
