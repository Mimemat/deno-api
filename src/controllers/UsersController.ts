import { Oak } from '../../deps.ts';

import { dex, db } from '../db/index.ts';


interface ctx {
  request: Oak.Request,
  response: Oak.Response
}

class UsersController {
  async create({request, response}: ctx) {
    const { username, email } = await request.body().value;
    const insertQuery = dex.queryBuilder()
      .insert({username, email})
      .into('users')
      .toString();
    try {
    db.query(insertQuery);
    }
    catch (err) {
      console.error(err);
    }
    response.body = 'Ok!'
  }
}
export const usersController = new UsersController();
