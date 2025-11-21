import { GoogleGenAI, Chat, GenerateContentResponse } from "@google/genai";
import { GEMINI_SYSTEM_INSTRUCTION } from "../constants";

let chatSession: Chat | null = null;

const getAiClient = () => {
  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    console.error("API_KEY is missing from environment variables");
    return null;
  }
  return new GoogleGenAI({ apiKey });
};

export const initializeChat = () => {
  const ai = getAiClient();
  if (!ai) return null;

  // Create a persistent chat session
  chatSession = ai.chats.create({
    model: 'gemini-2.5-flash',
    config: {
      systemInstruction: GEMINI_SYSTEM_INSTRUCTION,
      temperature: 0.7,
    },
  });
  return chatSession;
};

export const sendMessageToGemini = async (message: string): Promise<string> => {
  if (!chatSession) {
    initializeChat();
  }
  
  if (!chatSession) {
    return "I'm sorry, the AI service is currently unavailable. Please try again later.";
  }

  try {
    const result: GenerateContentResponse = await chatSession.sendMessage({ message });
    return result.text || "I didn't catch that. Could you rephrase?";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm having trouble connecting right now. Please try again in a moment.";
  }
};