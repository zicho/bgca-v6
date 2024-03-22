import { eq } from 'drizzle-orm';
import { failedOperation, successfulOperation, type TDbOperation } from '../TDbOperation';
import { db } from '../db';
import { userTable, type TUser } from '../schema/users';

export async function getUser({ username }: { username: string }): Promise<TDbOperation<TUser>> {
	try {
		const user = await db.query.userTable.findFirst({
			where: eq(userTable.username, username)
		});

        if(!user) {
            return failedOperation({ message: `Could not find user '${username}'` });    
        }

		return successfulOperation({ data: user });
	} catch (err) {
		return failedOperation({ message: `Failed to retrieve user ${username}` });
	}
}
