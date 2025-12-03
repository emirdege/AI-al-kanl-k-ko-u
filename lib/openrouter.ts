/**
 * OpenRouter API Client
 *
 * This module handles all AI API calls through OpenRouter.
 * API key is read from environment variables - NEVER hardcode keys.
 */

export type ChatMessage = {
  role: 'system' | 'user' | 'assistant'
  content: string
}

type OpenRouterResponse = {
  choices: {
    message: {
      content: string
    }
  }[]
}

/**
 * Call OpenRouter API with chat messages
 *
 * @param messages - Array of chat messages
 * @returns The assistant's response content
 * @throws Error if API key is missing or request fails
 */
export async function callOpenRouter(messages: ChatMessage[]): Promise<string> {
  const apiKey = process.env.OPENROUTER_API_KEY
  const modelId = process.env.MODEL_ID || 'google/gemma-3-27b-it:free'

  if (!apiKey) {
    throw new Error(
      'OPENROUTER_API_KEY is not set. Please add it to your .env.local file.'
    )
  }

  const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
      'HTTP-Referer': 'http://localhost:3000',
      'X-Title': 'AI Habit Coach',
    },
    body: JSON.stringify({
      model: modelId,
      messages,
    }),
  })

  if (!response.ok) {
    const errorText = await response.text()
    throw new Error(`OpenRouter API error (${response.status}): ${errorText}`)
  }

  const data: OpenRouterResponse = await response.json()

  if (!data.choices || !data.choices[0]?.message?.content) {
    throw new Error('Invalid response from OpenRouter API')
  }

  return data.choices[0].message.content
}
