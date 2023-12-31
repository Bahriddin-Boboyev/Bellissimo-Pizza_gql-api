import bcryptjs from 'bcryptjs';
import db from '../../db/index.js';

export const editUser = async ({ id, ...changes }) => {
  const user = await db('users').where({ id }).first();

  if (!user) {
    throw new NotFoundError('User not found');
  }

  let passwordChange = {};
  if (changes.password) {
    passwordChange.password = await bcryptjs.hash(changes.password, 10);
  }

  return (
    await db('users')
      .where({ id })
      .update({ ...changes, ...passwordChange })
      .returning('*')
  )[0];
};
