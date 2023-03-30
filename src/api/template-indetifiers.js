export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');

  try {
    const response = await fetch('https://api.novu.co/v1/notification-templates/', {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `ApiKey ${process.env.GATSBY_NOVU_API_KEY}`,
      },
    });
    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    res.status(400).json({ error: true });
  }
}
