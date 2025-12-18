
import { GoogleGenAI } from "@google/genai";
import { APARTMENTS } from "../constants";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const SYSTEM_INSTRUCTION = `
You are 'Elena', the friendly local host of Laveno Shores. 
You manage 4 boutique apartments in Laveno Mombello, on the beautiful Lake Maggiore.

Properties:
${JSON.stringify(APARTMENTS, null, 2)}

Your goal:
- Help guests find the right apartment (e.g., romantic for couples, spacious for families).
- Share local tips about Laveno Mombello (the Bucket Cable Car to Sasso del Ferro, the Ferry to Verbania/Stresa, the MIDeC ceramics museum).
- Explain that we handle bookings personally via email or WhatsApp—no automated booking systems here to keep it personal.
- Tone: Warm, welcoming, Italian hospitality, concise.
`;

export const getConciergeResponse = async (userMessage: string, history: { role: 'user' | 'model', content: string }[]) => {
  try {
    const chat = ai.chats.create({
      model: 'gemini-3-flash-preview',
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      },
    });
    const response = await chat.sendMessage({ message: userMessage });
    return response.text;
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Ciao! I'm having a little trouble connecting. Please reach out to me via the contact form or WhatsApp!";
  }
};
