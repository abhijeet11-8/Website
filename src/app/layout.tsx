
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
    <pre className="absolute inset-y-0 left-8 right-1/2 font-code text-[10px] text-foreground/40 whitespace-pre-wrap">
      <code
        dangerouslySetInnerHTML={{
          __html: `<span class="code-bg-token-keyword">import</span> numpy <span class="code-bg-token-keyword">as</span> np
<span class="code-bg-token-keyword">import</span> torch
<span class="code-bg-token-keyword">import</span> torch.nn <span class="code-bg-token-keyword">as</span> nn
<span class="code-bg-token-keyword">from</span> torch.utils.data <span class="code-bg-token-keyword">import</span> DataLoader<span class="code-bg-token-punctuation">,</span> TensorDataset

<span class="code-bg-token-comment"># --- Configuration ---</span>
learning_rate <span class="code-bg-token-operator">=</span> <span class="code-bg-token-number">0.001</span>
batch_size <span class="code-bg-token-operator">=</span> <span class="code-bg-token-number">64</span>
num_epochs <span class="code-bg-token-operator">=</span> <span class="code-bg-token-number">20</span>
input_dim <span class="code-bg-token-operator">=</span> <span class="code-bg-token-number">784</span>  <span class="code-bg-token-comment"># 28x28 pixels for MNIST</span>
hidden_dim <span class="code-bg-token-operator">=</span> <span class="code-bg-token-number">256</span>
output_dim <span class="code-bg-token-operator">=</span> <span class="code-bg-token-number">10</span>   <span class="code-bg-token-comment"># 10 classes for digits 0-9</span>
device <span class="code-bg-token-operator">=</span> torch<span class="code-bg-token-punctuation">.</span><span class="code-bg-token-function">device</span><span class="code-bg-token-punctuation">(</span><span class="code-bg-token-string">"cuda"</span> <span class="code-bg-token-keyword">if</span> torch<span class="code-bg-token-punctuation">.</span>cuda<span class="code-bg-token-punctuation">.</span><span class="code-bg-token-function">is_available</span><span class="code-bg-token-punctuation">(</span><span class="code-bg-token-punctuation">)</span> <span class="code-bg-token-keyword">else</span> <span class="code-bg-token-string">"cpu"</span><span class="code-bg-token-punctuation">)</span>

<span class="code-bg-token-comment"># --- Model Definition ---</span>
<span class="code-bg-token-keyword">class</span> <span class="code-bg-token-function">NeuralNet</span><span class="code-bg-token-punctuation">(</span>nn<span class="code-bg-token-punctuation">.</span>Module<span class="code-bg-token-punctuation">)</span><span class="code-bg-token-punctuation">:</span>
    <span class="code-bg-token-keyword">def</span> <span class="code-bg-token-function">__init__</span><span class="code-bg-token-punctuation">(</span>self<span class="code-bg-token-punctuation">,</span> input_size<span class="code-bg-token-punctuation">,</span> hidden_size<span class="code-bg-token-punctuation">,</span> num_classes<span class="code-bg-token-punctuation">)</span><span class="code-bg-token-punctuation">:</span>
        <span class="code-bg-token-function">super</span><span class="code-bg-token-punctuation">(</span>NeuralNet<span class="code-bg-token-punctuation">,</span> self<span class="code-bg-token-punctuation">)</span><span class="code-bg-token-punctuation">.</span><span class="code-bg-token-function">__init__</span><span class="code-bg-token-punctuation">(</span><span class="code-bg-token-punctuation">)</span>
        self<span class="code-bg-token-punctuation">.</span>fc1 <span class="code-bg-token-operator">=</span> nn<span class="code-bg-token-punctuation">.</span><span class="code-bg-token-function">Linear</span><span class="code-bg-token-punctuation">(</span>input_size<span class="code-bg-token-punctuation">,</span> hidden_size<span class="code-bg-token-punctuation">)</span>
        self<span class="code-bg-token-punctuation">.</span>relu <span class="code-bg-token-operator">=</span> nn<span class="code-bg-token-punctuation">.</span><span class="code-bg-token-function">ReLU</span><span class="code-bg-token-punctuation">(</span><span class="code-bg-token-punctuation">)</span>
        self<span class="code-bg-token-punctuation">.</span>fc2 <span class="code-bg-token-operator">=</span> nn<span class="code-bg-token-punctuation">.</span><span class="code-bg-token-function">Linear</span><span class="code-bg-token-punctuation">(</span>hidden_size<span class="code-bg-token-punctuation">,</span> num_classes<span class="code-bg-token-punctuation">)</span>

    <span class="code-bg-token-keyword">def</span> <span class="code-bg-token-function">forward</span><span class="code-bg-token-punctuation">(</span>self<span class="code-bg-token-punctuation">,</span> x<span class="code-bg-token-punctuation">)</span><span class="code-bg-token-punctuation">:</span>
        out <span class="code-bg-token-operator">=</span> self<span class="code-bg-token-punctuation">.</span>fc1<span class="code-bg-token-punctuation">(</span>x<span class="code-bg-token-punctuation">)</span>
        out <span class="code-bg-token-operator">=</span> self<span class="code-bg-token-punctuation">.</span>relu<span class="code-bg-token-punctuation">(</span>out<span class="code-bg-token-punctuation">)</span>
        out <span class="code-bg-token-operator">=</span> self<span class="code-bg-token-punctuation">.</span>fc2<span class="code-bg-token-punctuation">(</span>out<span class="code-bg-token-punctuation">)</span>
        <span class="code-bg-token-keyword">return</span> out

model <span class="code-bg-token-operator">=</span> <span class="code-bg-token-function">NeuralNet</span><span class="code-bg-token-punctuation">(</span>input_dim<span class="code-bg-token-punctuation">,</span> hidden_dim<span class="code-bg-token-punctuation">,</span> output_dim<span class="code-bg-token-punctuation">)</span><span class="code-bg-token-punctuation">.</span><span class="code-bg-token-function">to</span><span class="code-bg-token-punctuation">(</span>device<span class="code-bg-token-punctuation">)</span>

<span class="code-bg-token-comment"># --- Loss and Optimizer ---</span>
criterion <span class="code-bg-token-operator">=</span> nn<span class="code-bg-token-punctuation">.</span><span class="code-bg-token-function">CrossEntropyLoss</span><span class="code-bg-token-punctuation">(</span><span class="code-bg-token-punctuation">)</span>
optimizer <span class="code-bg-token-operator">=</span> torch<span class="code-bg-token-punctuation">.</span>optim<span class="code-bg-token-punctuation">.</span><span class="code-bg-token-function">Adam</span><span class="code-bg-token-punctuation">(</span>model<span class="code-bg-token-punctuation">.</span><span class="code-bg-token-function">parameters</span><span class="code-bg-token-punctuation">(</span><span class="code-bg-token-punctuation">)</span><span class="code-bg-token-punctuation">,</span> lr<span class="code-bg-token-operator">=</span>learning_rate<span class="code-bg-token-punctuation">)</span>

<span class="code-bg-token-comment"># --- Data Loading (Placeholder) ---</span>
<span class="code-bg-token-comment"># In a real scenario, you would load a dataset like MNIST here</span>
<span class="code-bg-token-keyword">def</span> <span class="code-bg-token-function">get_placeholder_data</span><span class="code-bg-token-punctuation">(</span>num_samples<span class="code-bg-token-punctuation">,</span> input_dim<span class="code-bg-token-punctuation">,</span> output_dim<span class="code-bg-token-punctuation">)</span><span class="code-bg-token-punctuation">:</span>
    X <span class="code-bg-token-operator">=</span> torch<span class="code-bg-token-punctuation">.</span><span class="code-bg-token-function">randn</span><span class="code-bg-token-punctuation">(</span>num_samples<span class="code-bg-token-punctuation">,</span> input_dim<span class="code-bg-token-punctuation">)</span>
    y <span class="code-bg-token-operator">=</span> torch<span class="code-bg-token-punctuation">.</span><span class="code-bg-token-function">randint</span><span class="code-bg-token-punctuation">(</span><span class="code-bg-token-number">0</span><span class="code-bg-token-punctuation">,</span> output_dim<span class="code-bg-token-punctuation">,</span> <span class="code-bg-token-punctuation">(</span>num_samples<span class="code-bg-token-punctuation">,</span><span class="code-bg-token-punctuation">)</span><span class="code-bg-token-punctuation">)</span>
    <span class="code-bg-token-keyword">return</span> <span class="code-bg-token-function">TensorDataset</span><span class="code-bg-token-punctuation">(</span>X<span class="code-bg-token-punctuation">,</span> y<span class="code-bg-token-punctuation">)</span>

train_dataset <span class="code-bg-token-operator">=</span> <span class="code-bg-token-function">get_placeholder_data</span><span class="code-bg-token-punctuation">(</span><span class="code-bg-token-number">50000</span><span class="code-bg-token-punctuation">,</span> input_dim<span class="code-bg-token-punctuation">,</span> output_dim<span class="code-bg-token-punctuation">)</span>
train_loader <span class="code-bg-token-operator">=</span> <span class="code-bg-token-function">DataLoader</span><span class="code-bg-token-punctuation">(</span>dataset<span class="code-bg-token-operator">=</span>train_dataset<span class="code-bg-token-punctuation">,</span> batch_size<span class="code-bg-token-operator">=</span>batch_size<span class="code-bg-token-punctuation">,</span> shuffle<span class="code-bg-token-operator">=</span><span class="code-bg-token-keyword">True</span><span class="code-bg-token-punctuation">)</span>

test_dataset <span class="code-bg-token-operator">=</span> <span class="code-bg-token-function">get_placeholder_data</span><span class="code-bg-token-punctuation">(</span><span class="code-bg-token-number">10000</span><span class="code-bg-token-punctuation">,</span> input_dim<span class="code-bg-token-punctuation">,</span> output_dim<span class="code-bg-token-punctuation">)</span>
test_loader <span class="code-bg-token-operator">=</span> <span class="code-bg-token-function">DataLoader</span><span class="code-bg-token-punctuation">(</span>dataset<span class="code-bg-token-operator">=</span>test_dataset<span class="code-bg-token-punctuation">,</span> batch_size<span class="code-bg-token-operator">=</span>batch_size<span class="code-bg-token-punctuation">,</span> shuffle<span class="code-bg-token-operator">=</span><span class="code-bg-token-keyword">False</span><span class="code-bg-token-punctuation">)</span>

<span class="code-bg-token-function">print</span><span class="code-bg-token-punctuation">(</span><span class="code-bg-token-string">f"--- Starting Training on {device} ---"</span><span class="code-bg-token-punctuation">)</span>

<span class="code-bg-token-comment"># --- Training Loop ---</span>
total_steps <span class="code-bg-token-operator">=</span> <span class="code-bg-token-function">len</span><span class="code-bg-token-punctuation">(</span>train_loader<span class="code-bg-token-punctuation">)</span>
<span class="code-bg-token-keyword">for</span> epoch <span class="code-bg-token-keyword">in</span> <span class="code-bg-token-function">range</span><span class="code-bg-token-punctuation">(</span>num_epochs<span class="code-bg-token-punctuation">)</span><span class="code-bg-token-punctuation">:</span>
    <span class="code-bg-token-keyword">for</span> i<span class="code-bg-token-punctuation">,</span> <span class="code-bg-token-punctuation">(</span>images<span class="code-bg-token-punctuation">,</span> labels<span class="code-bg-token-punctuation">)</span> <span class="code-bg-token-keyword">in</span> <span class="code-bg-token-function">enumerate</span><span class="code-bg-token-punctuation">(</span>train_loader<span class="code-bg-token-punctuation">)</span><span class="code-bg-token-punctuation">:</span>
        <span class="code-bg-token-comment"># Move tensors to the configured device</span>
        images <span class="code-bg-token-operator">=</span> images<span class="code-bg-token-punctuation">.</span><span class="code-bg-token-function">reshape</span><span class="code-bg-token-punctuation">(</span><span class="code-bg-token-operator">-</span><span class="code-bg-token-number">1</span><span class="code-bg-token-punctuation">,</span> input_dim<span class="code-bg-token-punctuation">)</span><span class="code-bg-token-punctuation">.</span><span class="code-bg-token-function">to</span><span class="code-bg-token-punctuation">(</span>device<span class="code-bg-token-punctuation">)</span>
        labels <span class="code-bg-token-operator">=</span> labels<span class="code-bg-token-punctuation">.</span><span class="code-bg-token-function">to</span><span class="code-bg-token-punctuation">(</span>device<span class="code-bg-token-punctuation">)</span>

        <span class="code-bg-token-comment"># Forward pass</span>
        outputs <span class="code-bg-token-operator">=</span> model<span class="code-bg-token-punctuation">(</span>images<span class="code-bg-token-punctuation">)</span>
        loss <span class="code-bg-token-operator">=</span> criterion<span class="code-bg-token-punctuation">(</span>outputs<span class="code-bg-token-punctuation">,</span> labels<span class="code-bg-token-punctuation">)</span>

        <span class="code-bg-token-comment"># Backward and optimize</span>
        optimizer<span class="code-bg-token-punctuation">.</span><span class="code-bg-token-function">zero_grad</span><span class="code-bg-token-punctuation">(</span><span class="code-bg-token-punctuation">)</span>
        loss<span class="code-bg-token-punctuation">.</span><span class="code-bg-token-function">backward</span><span class="code-bg-token-punctuation">(</span><span class="code-bg-token-punctuation">)</span>
        optimizer<span class="code-bg-token-punctuation">.</span><span class="code-bg-token-function">step</span><span class="code-bg-token-punctuation">(</span><span class="code-bg-token-punctuation">)</span>

        <span class="code-bg-token-keyword">if</span> <span class="code-bg-token-punctuation">(</span>i <span class="code-bg-token-operator">+</span> <span class="code-bg-token-number">1</span><span class="code-bg-token-punctuation">)</span> <span class="code-bg-token-operator">%</span> <span class="code-bg-token-number">100</span> <span class="code-bg-token-operator">==</span> <span class="code-bg-token-number">0</span><span class="code-bg-token-punctuation">:</span>
            <span class="code-bg-token-function">print</span><span class="code-bg-token-punctuation">(</span><span class="code-bg-token-string">f'Epoch [{epoch+1}/{num_epochs}], Step [{i+1}/{total_steps}], Loss: {loss.item():.4f}'</span><span class="code-bg-token-punctuation">)</span>

<span class="code-bg-token-comment"># --- Evaluation ---</span>
model<span class="code-bg-token-punctuation">.</span><span class="code-bg-token-function">eval</span><span class="code-bg-token-punctuation">(</span><span class="code-bg-token-punctuation">)</span>  <span class="code-bg-token-comment"># Set model to evaluation mode</span>
<span class="code-bg-token-keyword">with</span> torch<span class="code-bg-token-punctuation">.</span>no_grad<span class="code-bg-token-punctuation">(</span><span class="code-bg-token-punctuation">)</span><span class="code-bg-token-punctuation">:</span>
    correct <span class="code-bg-token-operator">=</span> <span class="code-bg-token-number">0</span>
    total <span class="code-bg-token-operator">=</span> <span class="code-bg-token-number">0</span>
    <span class="code-bg-token-keyword">for</span> images<span class="code-bg-token-punctuation">,</span> labels <span class="code-bg-token-keyword">in</span> test_loader<span class="code-bg-token-punctuation">:</span>
        images <span class="code-bg-token-operator">=</span> images<span class="code-bg-token-punctuation">.</span><span class="code-bg-token-function">reshape</span><span class="code-bg-token-punctuation">(</span><span class="code-bg-token-operator">-</span><span class="code-bg-token-number">1</span><span class="code-bg-token-punctuation">,</span> input_dim<span class="code-bg-token-punctuation">)</span><span class="code-bg-token-punctuation">.</span><span class="code-bg-token-function">to</span><span class="code-bg-token-punctuation">(</span>device<span class="code-bg-token-punctuation">)</span>
        labels <span class="code-bg-token-operator">=</span> labels<span class="code-bg-token-punctuation">.</span><span class="code-bg-token-function">to</span><span class="code-bg-token-punctuation">(</span>device<span class="code-bg-token-punctuation">)</span>
        outputs <span class="code-bg-token-operator">=</span> model<span class="code-bg-token-punctuation">(</span>images<span class="code-bg-token-punctuation">)</span>
        _<span class="code-bg-token-punctuation">,</span> predicted <span class="code-bg-token-operator">=</span> torch<span class="code-bg-token-punctuation">.</span>max<span class="code-bg-token-punctuation">(</span>outputs<span class="code-bg-token-punctuation">.</span>data<span class="code-bg-token-punctuation">,</span> <span class="code-bg-token-number">1</span><span class="code-bg-token-punctuation">)</span>
        total <span class="code-bg-token-operator">+=</span> labels<span class="code-bg-token-punctuation">.</span><span class="code-bg-token-function">size</span><span class="code-bg-token-punctuation">(</span><span class="code-bg-token-number">0</span><span class="code-bg-token-punctuation">)</span>
        correct <span class="code-bg-token-operator">+=</span> <span class="code-bg-token-punctuation">(</span>predicted <span class="code-bg-token-operator">==</span> labels<span class="code-bg-token-punctuation">)</span><span class="code-bg-token-punctuation">.</span><span class="code-bg-token-function">sum</span><span class="code-bg-token-punctuation">(</span><span class="code-bg-token-punctuation">)</span><span class="code-bg-token-punctuation">.</span><span class="code-bg-token-function">item</span><span class="code-bg-token-punctuation">(</span><span class="code-bg-token-punctuation">)</span>

    accuracy <span class="code-bg-token-operator">=</span> <span class="code-bg-token-number">100</span> <span class="code-bg-token-operator">*</span> correct <span class="code-bg-token-operator">/</span> total
    <span class="code-bg-token-function">print</span><span class="code-bg-token-punctuation">(</span><span class="code-bg-token-string">f'Accuracy of the network on the 10000 test images: {accuracy:.2f} %'</span><span class="code-bg-token-punctuation">)</span>

<span class="code-bg-token-comment"># --- Save Model ---</span>
torch<span class="code-bg-token-punctuation">.</span><span class="code-bg-token-function">save</span><span class="code-bg-token-punctuation">(</span>model<span class="code-bg-token-punctuation">.</span><span class="code-bg-token-function">state_dict</span><span class="code-bg-token-punctuation">(</span><span class="code-bg-token-punctuation">)</span><span class="code-bg-token-punctuation">,</span> <span class="code-bg-token-string">'model_state.pth'</span><span class="code-bg-token-punctuation">)</span>
<span class="code-bg-token-function">print</span><span class="code-bg-token-punctuation">(</span><span class="code-bg-token-string">"Model saved to model_state.pth"</span><span class="code-bg-token-punctuation">)</span>

<span class="code-bg-token-comment"># --- Additional Utilities ---</span>
<span class="code-bg-token-keyword">def</span> <span class="code-bg-token-function">predict_single_image</span><span class="code-bg-token-punctuation">(</span>model<span class="code-bg-token-punctuation">,</span> image_tensor<span class="code-bg-token-punctuation">)</span><span class="code-bg-token-punctuation">:</span>
    <span class="code-bg-token-string">"""Predicts the class for a single image tensor."""</span>
    model<span class="code-bg-token-punctuation">.</span><span class="code-bg-token-function">eval</span><span class="code-bg-token-punctuation">(</span><span class="code-bg-token-punctuation">)</span>
    <span class="code-bg-token-keyword">with</span> torch<span class="code-bg-token-punctuation">.</span>no_grad<span class="code-bg-token-punctuation">(</span><span class="code-bg-token-punctuation">)</span><span class="code-bg-token-punctuation">:</span>
        image_tensor <span class="code-bg-token-operator">=</span> image_tensor<span class="code-bg-token-punctuation">.</span><span class="code-bg-token-function">reshape</span><span class="code-bg-token-punctuation">(</span><span class="code-bg-token-operator">-</span><span class="code-bg-token-number">1</span><span class="code-bg-token-punctuation">,</span> input_dim<span class="code-bg-token-punctuation">)</span><span class="code-bg-token-punctuation">.</span><span class="code-bg-token-function">to</span><span class="code-bg-token-punctuation">(</span>device<span class="code-bg-token-punctuation">)</span>
        output <span class="code-bg-token-operator">=</span> model<span class="code-bg-token-punctuation">(</span>image_tensor<span class="code-bg-token-punctuation">)</span>
        _<span class="code-bg-token-punctuation">,</span> predicted <span class="code-bg-token-operator">=</span> torch<span class="code-bg-token-punctuation">.</span>max<span class="code-bg-token-punctuation">(</span>output<span class="code-bg-token-punctuation">.</span>data<span class="code-bg-token-punctuation">,</span> <span class="code-bg-token-number">1</span><span class="code-bg-token-punctuation">)</span>
        <span class="code-bg-token-keyword">return</span> predicted<span class="code-bg-token-punctuation">.</span><span class="code-bg-token-function">item</span><span class="code-bg-token-punctuation">(</span><span class="code-bg-token-punctuation">)</span>

<span class="code-bg-token-comment"># Example of using the utility</span>
sample_image <span class="code-bg-token-operator">=</span> torch<span class="code-bg-token-punctuation">.</span><span class="code-bg-token-function">randn</span><span class="code-bg-token-punctuation">(</span><span class="code-bg-token-number">1</span><span class="code-bg-token-punctuation">,</span> input_dim<span class="code-bg-token-punctuation">)</span>
prediction <span class="code-bg-token-operator">=</span> <span class="code-bg-token-function">predict_single_image</span><span class="code-bg-token-punctuation">(</span>model<span class="code-bg-token-punctuation">,</span> sample_image<span class="code-bg-token-punctuation">)</span>
<span class="code-bg-token-function">print</span><span class="code-bg-token-punctuation">(</span><span class="code-bg-token-string">f"Prediction for a random sample image: {prediction}"</span><span class="code-bg-token-punctuation">)</span>
`,
        }}
      />
    </pre>
  </div>
);

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`dark ${roboto.variable} ${lora.variable}`}>
      <body className="font-sans antialiased flex flex-col min-h-screen relative">
        <CodeBackground />
        <Header />
        <PageWrapper>{children}</PageWrapper>
        <Toaster />
      </body>
    </html>
  );
}
