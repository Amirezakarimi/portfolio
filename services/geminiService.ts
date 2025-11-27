import { GoogleGenAI } from "@google/genai";

export const generateContactReply = async (
  userName: string,
  userMessage: string
): Promise<string> => {
  try {
    // Initialize Gemini AI inside the function to ensure process.env is accessible at runtime
    // and to avoid issues with top-level execution in some environments.
    // API_KEY must be set in the environment variables.
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    const modelId = 'gemini-2.5-flash';
    
    const systemInstruction = `
      You are a helpful AI assistant for a Senior Frontend Engineer's portfolio website.
      The user (a potential client or recruiter) has just sent a message via the contact form.
      
      Your goal is to generate a polite, professional, and brief acknowledgement in English.
      
      Context:
      - The Engineer's name is "Arash".
      - The user's name is "${userName}".
      - The user's message is about: "${userMessage}".
      
      Tone: Professional, modern, warm, and minimal.
      Language: English.
      Output: Just the reply message text. Do not add markdown headers.
    `;

    const response = await ai.models.generateContent({
      model: modelId,
      contents: `Please write a short reply to ${userName} acknowledging receipt of their message regarding: ${userMessage}`,
      config: {
        systemInstruction: systemInstruction,
        temperature: 0.7,
      },
    });

    return response.text || "Thank you, your message has been received.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    // Fallback message in English
    return "Your message has been successfully recorded. I will get back to you soon.";
  }
};