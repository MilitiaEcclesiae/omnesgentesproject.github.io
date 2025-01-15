import { translateText } from '../../utils/translate';
import type { APIRoute } from 'astro'; 

/**
 * Fetches content, translates it, and returns the translated content as a response.
 * @param request - The incoming request object.
 * @returns A Response object with the translated content or an error message.
 */
export const get: APIRoute = async ({ request }) => {
  try {
    // Parse the URL and extract the language parameter
    const url = new URL(request.url);
    const lang = url.searchParams.get('lang');

    // Validate the language parameter
    if (!lang) {
      return new Response('Language parameter is missing.', { status: 400 });
    }

    // Fetch the content (replace with your actual content fetching logic)
    const content = await fetchContent('path/to/content.md');

    // Translate the content
    const translatedContent = await translateText(content, lang);

    // Return the translated content as a response
    return new Response(translatedContent, {
      status: 200,
      headers: { 'Content-Type': 'text/html' }, // Set appropriate content type
    });
  } catch (error) {
    console.error('Translation failed:', error);
    return new Response('Internal Server Error', { status: 500 });
  }
};

/**
 * Mock function to fetch content (replace with your actual implementation).
 * @param path - The path to the content file.
 * @returns The content as a string.
 */
async function fetchContent(path: string): Promise<string> {
  // Replace this with your actual content fetching logic
  return 'This is the original content.';
}