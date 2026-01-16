import { neon } from '@neondatabase/serverless';

export default async function handler(req: any, res: any) {
  // Ensure we have the database URL
  if (!process.env.DATABASE_URL) {
    return res.status(500).json({ error: 'DATABASE_URL not configured' });
  }

  const sql = neon(process.env.DATABASE_URL);

  try {
    // Ensure table exists (Lazy migration)
    await sql`
      CREATE TABLE IF NOT EXISTS player_progress (
        user_id TEXT PRIMARY KEY,
        data JSONB NOT NULL,
        updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      )
    `;

    if (req.method === 'GET') {
      const { userId } = req.query;
      
      if (!userId) {
        return res.status(400).json({ error: 'Missing userId' });
      }

      const result = await sql`
        SELECT data FROM player_progress WHERE user_id = ${userId}
      `;

      if (result.length > 0) {
        return res.status(200).json(result[0].data);
      } else {
        return res.status(404).json({ message: 'User not found' });
      }
    } 
    
    else if (req.method === 'POST') {
      // Handle cases where body might not be parsed
      const body = typeof req.body === 'string' ? JSON.parse(req.body) : req.body;
      const { userId, data } = body;

      if (!userId || !data) {
        return res.status(400).json({ error: 'Missing userId or data' });
      }

      // Upsert: Insert or Update if exists
      await sql`
        INSERT INTO player_progress (user_id, data, updated_at)
        VALUES (${userId}, ${data}, NOW())
        ON CONFLICT (user_id) 
        DO UPDATE SET data = ${data}, updated_at = NOW()
      `;

      return res.status(200).json({ success: true });
    }

    return res.status(405).json({ error: 'Method not allowed' });

  } catch (error) {
    console.error('Database error:', error);
    return res.status(500).json({ error: 'Internal Server Error', details: String(error) });
  }
}