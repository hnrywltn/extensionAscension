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
        { name: 'Benas Svipas', userName: 'BnsSvps', email: 'BnsSvps@gmail.com', password: 'password', profileImg: 'https://thispersondoesnotexist.com/image', bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', createdAt: new Date(), updatedAt: new Date()},


        { name: 'CoenraadS', userName: 'CnrdS', email: 'CnrdS@gmail.com', password: 'password', profileImg: 'https://thispersondoesnotexist.com/image', bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', createdAt: new Date(), updatedAt: new Date()},


        { name: 'Dirk Baeumer', userName: 'DrkBmr', email: 'DrkBmr@gmail.com', password: 'password', profileImg: 'https://thispersondoesnotexist.com/image', bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', createdAt: new Date(), updatedAt: new Date()},


        { name: 'HookyQR', userName: 'HkyQR', email: 'HkyQR@gmail.com', password: 'password', profileImg: 'https://thispersondoesnotexist.com/image', bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', createdAt: new Date(), updatedAt: new Date()},


        { name: 'quicktype', userName: 'qcktyp', email: 'qcktyp@gmail.com', password: 'password', profileImg: 'https://thispersondoesnotexist.com/image', bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', createdAt: new Date(), updatedAt: new Date()},


        { name: 'Aaron Bond', userName: 'rnBnd', email: 'rnBnd@gmail.com', password: 'password', profileImg: 'https://thispersondoesnotexist.com/image', bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', createdAt: new Date(), updatedAt: new Date()},


        { name: 'Kevin Rose', userName: 'KvnRs', email: 'KvnRs@gmail.com', password: 'password', profileImg: 'https://thispersondoesnotexist.com/image', bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', createdAt: new Date(), updatedAt: new Date()},


        { name: 'tombonnike', userName: 'tmbnnk', email: 'tmbnnk@gmail.com', password: 'password', profileImg: 'https://thispersondoesnotexist.com/image', bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', createdAt: new Date(), updatedAt: new Date()},


        { name: 'Eric Amodio', userName: 'Ercmdo', email: 'Ercmdo@gmail.com', password: 'password', profileImg: 'https://thispersondoesnotexist.com/image', bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', createdAt: new Date(), updatedAt: new Date()},


        {name: 'Microsoft', userName: 'Mcrsft', email: 'Mcrsft@gmail.com', password: 'password', profileImg: 'https://thispersondoesnotexist.com/image', bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', createdAt: new Date(), updatedAt: new Date()},


        { name: 'CodeStream', userName: 'Cdstrm', email: 'Cdstrm@gmail.com', password: 'password', profileImg: 'https://thispersondoesnotexist.com/image', bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', createdAt: new Date(), updatedAt: new Date()},


        { name: 'Arjun Attum', userName: 'Ajnattm', email: 'Ajnattm@gmail.com', password: 'password', profileImg: 'https://thispersondoesnotexist.com/image', bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', createdAt: new Date(), updatedAt: new Date()},


        { name: 'Maxfield Walker', userName: 'Mxfldwlkr', email: 'Mxfldwlkr@gmail.com', password: 'password', profileImg: 'https://thispersondoesnotexist.com/image', bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', createdAt: new Date(), updatedAt: new Date()},


        { name: 'Philipp Kief', userName: 'Phlppkf', email: 'Phlppkf@gmail.com', password: 'password', profileImg: 'https://thispersondoesnotexist.com/image', bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', createdAt: new Date(), updatedAt: new Date()},


        { name: 'Derek Sifford', userName: 'Drksffrd', email: 'Drksffrd@gmail.com', password: 'password', profileImg: 'https://thispersondoesnotexist.com/image', bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', createdAt: new Date(), updatedAt: new Date()},


        { name: 'GitHub', userName: 'Gthb', email: 'Gthb@gmail.com', password: 'password', profileImg: 'https://thispersondoesnotexist.com/image', bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', createdAt: new Date(), updatedAt: new Date()},


        { name: 'Ahmad Awais', userName: 'Ahmdws', email: 'Ahmdws@gmail.com', password: 'password', profileImg: 'https://thispersondoesnotexist.com/image', bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', createdAt: new Date(), updatedAt: new Date()},


        { name: 'Monokai', userName: 'Mnk', email: 'Mnk@gmail.com', password: 'password', profileImg: 'https://thispersondoesnotexist.com/image', bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', createdAt: new Date(), updatedAt: new Date()}
      ])
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
