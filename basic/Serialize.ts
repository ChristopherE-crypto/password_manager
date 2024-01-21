import * as fs from 'fs';
import * as util from 'util';

const writeFileAsync = util.promisify(fs.writeFile);
const readFileAsync = util.promisify(fs.readFile);

class Serialize {
  private static filePath: string;

  static async serialize(user: User): Promise<void> {
    const serializedUser = JSON.stringify(user);
    await writeFileAsync(Serialize.filePath, serializedUser, 'utf8');
    console.log('User serialized and saved to file:', Serialize.filePath);
  }

  static async deserialize(): Promise<User | null> {
    try {
      const serializedData = await readFileAsync(Serialize.filePath, 'utf8');
      const userObject = JSON.parse(serializedData);
      const user = new User(userObject.nick, userObject.pin, userObject.accounts);
      console.log('User deserialized from file:', Serialize.filePath);
      return user;
    } catch (error) {
      console.error('Error deserializing user from file:', Serialize.filePath, error);
      return null;
    }
  }
}
