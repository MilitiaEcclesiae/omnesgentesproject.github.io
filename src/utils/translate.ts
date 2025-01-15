import { TranslationServiceClient, protos } from '@google-cloud/translate';

// Constants for configuration
const projectId = import.meta.env.GOOGLE_CLOUD_PROJECT_ID;
const apiKey = import.meta.env.GOOGLE_CLOUD_API_KEY;

const location = 'global'; // Use 'global' for the Translation API

// Initialize the Translation client
const translationClient = new TranslationServiceClient(
  projectId,
  apiKey,
);

/**
 * Translates text into the target language using Google Cloud Translation API.
 * @param text - The text to translate.
 * @param targetLanguage - The target language code (e.g., 'es' for Spanish).
 * @returns The translated text.
 * @throws Error if translation fails.
 */
export async function translateText(text: string, targetLanguage: string): Promise<string> {
  try {
    // Construct the translation request
    const request: protos.google.cloud.translation.v3.ITranslateTextRequest = {
      parent: `projects/${projectId}/locations/${location}`,
      contents: [text],
      mimeType: 'text/plain',
      targetLanguageCode: targetLanguage,
    };

    // Execute the translation request
    const [response] = await translationClient.translateText(request);

    // Extract and return the translated text
    if (!response.translations || response.translations.length === 0) {
      throw new Error('No translations found in the response.');
    }

    return response.translations[0].translatedText || '';
  } catch (error) {
    console.error('Translation failed:', error);
    throw new Error(`Translation failed: ${error instanceof Error ? error.message : 'Unknown error'}`);
  }
}