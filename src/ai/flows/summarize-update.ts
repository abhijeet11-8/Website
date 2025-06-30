'use server';

/**
 * @fileOverview Summarizes work updates using an AI summarization tool.
 *
 * - summarizeUpdate - A function that summarizes a work update.
 * - SummarizeUpdateInput - The input type for the summarizeUpdate function.
 * - SummarizeUpdateOutput - The return type for the summarizeUpdate function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SummarizeUpdateInputSchema = z.object({
  updateText: z.string().describe('The work update text to summarize.'),
});

export type SummarizeUpdateInput = z.infer<typeof SummarizeUpdateInputSchema>;

const SummarizeUpdateOutputSchema = z.object({
  summary: z.string().describe('The concise summary of the work update.'),
});

export type SummarizeUpdateOutput = z.infer<typeof SummarizeUpdateOutputSchema>;

export async function summarizeUpdate(input: SummarizeUpdateInput): Promise<SummarizeUpdateOutput> {
  return summarizeUpdateFlow(input);
}

const summarizeUpdatePrompt = ai.definePrompt({
  name: 'summarizeUpdatePrompt',
  input: {schema: SummarizeUpdateInputSchema},
  output: {schema: SummarizeUpdateOutputSchema},
  prompt: `Summarize the following work update in a concise manner:

{{{updateText}}}`,
});

const summarizeUpdateFlow = ai.defineFlow(
  {
    name: 'summarizeUpdateFlow',
    inputSchema: SummarizeUpdateInputSchema,
    outputSchema: SummarizeUpdateOutputSchema,
  },
  async input => {
    const {output} = await summarizeUpdatePrompt(input);
    return output!;
  }
);
