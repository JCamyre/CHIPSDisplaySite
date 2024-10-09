import { getIndexSlides } from '../../scripts/db';

export default async function handler(req, res) {
  try {
    const slides = await getIndexSlides();
    res.status(200).json(slides);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch slides' });
  }
}