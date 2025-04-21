'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    // Menambahkan foreign key userId di tabel Submissions
    await queryInterface.addColumn('Submissions', 'userId', {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'Users',  // Menghubungkan ke model Users
        key: 'id',       // Menghubungkan ke kolom id di Users
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    });
  },

  async down(queryInterface, Sequelize) {
    // Menghapus kolom userId jika migrasi dibatalkan
    await queryInterface.removeColumn('Submissions', 'userId');
  }
};
