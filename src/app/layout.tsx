import type { Metadata } from "next";
import { Roboto, Lora } from "next/font/google";
import { Toaster } from "@/components/ui/toaster";
import { Header } from "@/components/header";
import { PageWrapper } from "@/components/page-wrapper";
import "./globals.css";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-sans",
});

const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-headline",
});

export const metadata: Metadata = {
  title: "Gitfolio by Alex Doe",
  description: "A personal portfolio, blog, and update feed.",
};

const CodeBackground = () => (
  <div className="fixed inset-0 z-[-1] overflow-hidden bg-background">
    <pre className="absolute -top-1/4 -left-1/4 -right-1/4 -bottom-1/4 font-code text-[10px] text-foreground/5 whitespace-pre-wrap">
      <code
        dangerouslySetInnerHTML={{
          __html: `
<span class="code-bg-token-comment"># val_loader = DataLoader(val_set, batch_size=batch_size, shuffle=True)</span>
<span class="code-bg-token-comment"># test_loader = DataLoader(test_set, batch_size=batch_size, shuffle=True)</span>

<span class="code-bg-token-string">''' Model helpers and model setup '''</span>

delta <span class="code-bg-token-operator">=</span> <span class="code-bg-token-number">0.1</span> <span class="code-bg-token-comment">#4e-3</span>

<span class="code-bg-token-comment"># recorded into comment</span>
<span class="code-bg-token-comment"># fraction of the elements in the hidden.linear.weight to be zero</span>
mask_prob <span class="code-bg-token-operator">=</span> <span class="code-bg-token-number">0.0</span>

<span class="code-bg-token-comment"># omega init uniform distribution CHECK on rf.py!</span>
omega_a <span class="code-bg-token-operator">=</span> <span class="code-bg-token-number">0.1</span>
omega_b <span class="code-bg-token-operator">=</span> <span class="code-bg-token-number">15.</span>

<span class="code-bg-token-comment"># b_offset init uniform distribution CHECK on rf.py!</span>
b_offset_a <span class="code-bg-token-operator">=</span> <span class="code-bg-token-number">0.1</span>
b_offset_b <span class="code-bg-token-operator">=</span> <span class="code-bg-token-number">1.</span>

<span class="code-bg-token-comment"># LI tau_mem init normal distribution</span>
out_adaptive_tau_mem_mean <span class="code-bg-token-operator">=</span> <span class="code-bg-token-number">0.</span>
out_adaptive_tau_mem_std <span class="code-bg-token-operator">=</span> <span class="code-bg-token-number">0.1</span>

label_last <span class="code-bg-token-operator">=</span> <span class="code-bg-token-keyword">False</span>
sub_seq_length <span class="code-bg-token-operator">=</span> <span class="code-bg-token-number">0</span>

hidden_bias <span class="code-bg-token-operator">=</span> <span class="code-bg-token-keyword">False</span>
output_bias <span class="code-bg-token-operator">=</span> <span class="code-bg-token-keyword">False</span>

num_runs <span class="code-bg-token-operator">=</span> <span class="code-bg-token-number">3</span>
parameters <span class="code-bg-token-operator">=</span> [ <span class="code-bg-token-string">"Learnable_U"</span>, <span class="code-bg-token-string">"adaptive_b_offset"</span>, <span class="code-bg-token-string">"adaptive_omega"</span>, <span class="code-bg-token-string">"TRAIN_THETA"</span>, <span class="code-bg-token-string">"TRAIN_DT"</span>, <span class="code-bg-token-string">"Learnable_V"</span>, <span class="code-bg-token-string">"TRAIN_ZETA"</span>]
schemes <span class="code-bg-token-operator">=</span> [<span class="code-bg-token-string">"euler forward"</span>]
<span class="code-bg-token-comment"># All non-empty combinations</span>
unique_combinations <span class="code-bg-token-operator">=</span> []
<span class="code-bg-token-keyword">for</span> r <span class="code-bg-token-keyword">in</span> <span class="code-bg-token-function">range</span>(<span class="code-bg-token-number">1</span>, <span class="code-bg-token-function">len</span>(parameters)<span class="code-bg-token-operator">+</span><span class="code-bg-token-number">1</span>):
    unique_combinations.extend(itertools.combinations(parameters, r))
`,
        }}
      />
    </pre>
    <div className="absolute inset-0 bg-background [mask-image:radial-gradient(circle_at_center,transparent_30%,hsl(var(--background))_80%)]"></div>
  </div>
);

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`dark ${roboto.variable} ${lora.variable}`}>
      <body className="font-sans antialiased flex flex-col min-h-screen">
        <CodeBackground />
        <Header />
        <PageWrapper>{children}</PageWrapper>
        <Toaster />
      </body>
    </html>
  );
}
