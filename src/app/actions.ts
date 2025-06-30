
"use server";

import { summarizeUpdate } from "@/ai/flows/summarize-update";

export async function getSummaryAction(
  updateText: string
): Promise<{ summary?: string; error?: string }> {
  if (!updateText || updateText.length < 20) {
    return { error: "Please enter at least 20 characters to summarize." };
  }

  try {
    const result = await summarizeUpdate({ updateText });
    return { summary: result.summary };
  } catch (error) {
    console.error("Summarization error:", error);
    return { error: "An error occurred while generating the summary." };
  }
}
