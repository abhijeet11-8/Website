
import type { Metadata } from "next";
import { Roboto, Lora } from "next/font/google";
import { Toaster } from "@/components/ui/toaster";
import { PageWrapper } from "@/components/page-wrapper";
import { AppHeader } from "@/components/app-header";
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
    <pre className="absolute inset-y-0 left-8 right-1/2 font-code text-[10px] text-muted-foreground whitespace-pre-wrap sm:right-2/3">
      <code
        dangerouslySetInnerHTML={{
          __html: `<span class="text-chart-5">import</span> numpy <span class="text-chart-5">as</span> np
<span class="text-chart-5">import</span> torch
<span class="text-chart-5">import</span> torch.nn <span class="text-chart-5">as</span> nn
<span class="text-chart-5">from</span> torch.utils.data <span class="text-chart-5">import</span> <span class="text-chart-4">DataLoader</span>, <span class="text-chart-4">TensorDataset</span>

<span class="text-muted-foreground/60"># --- Configuration ---</span>
learning_rate = <span class="text-chart-3">0.001</span>
batch_size = <span class="text-chart-3">64</span>
num_epochs = <span class="text-chart-3">20</span>
input_dim = <span class="text-chart-3">784</span>  <span class="text-muted-foreground/60"># 28x28 pixels for MNIST</span>
hidden_dim = <span class="text-chart-3">256</span>
output_dim = <span class="text-chart-3">10</span>   <span class="text-muted-foreground/60"># 10 classes for digits 0-9</span>
device = torch.device(<span class="text-chart-2">"cuda"</span> <span class="text-primary">if</span> torch.cuda.is_available() <span class="text-primary">else</span> <span class="text-chart-2">"cpu"</span>)

<span class="text-muted-foreground/60"># --- Model Definition ---</span>
<span class="text-chart-5">class</span> <span class="text-chart-4">NeuralNet</span>(nn.Module):
    <span class="text-chart-5">def</span> <span class="text-accent">__init__</span>(<span class="text-primary">self</span>, input_size, hidden_size, num_classes):
        <span class="text-foreground">super</span>(<span class="text-chart-4">NeuralNet</span>, <span class="text-primary">self</span>).<span class="text-accent">__init__</span>()
        <span class="text-primary">self</span>.fc1 = nn.Linear(input_size, hidden_size)
        <span class="text-primary">self</span>.relu = nn.ReLU()
        <span class="text-primary">self</span>.fc2 = nn.Linear(hidden_size, num_classes)

    <span class="text-chart-5">def</span> <span class="text-accent">forward</span>(<span class="text-primary">self</span>, x):
        out = <span class="text-primary">self</span>.fc1(x)
        out = <span class="text-primary">self</span>.relu(out)
        out = <span class="text-primary">self</span>.fc2(out)
        <span class="text-chart-5">return</span> out

model = <span class="text-chart-4">NeuralNet</span>(input_dim, hidden_dim, output_dim).to(device)

<span class="text-muted-foreground/60"># --- Loss and Optimizer ---</span>
criterion = nn.CrossEntropyLoss()
optimizer = torch.optim.Adam(model.parameters(), lr=learning_rate)

<span class="text-muted-foreground/60"># --- Data Loading (Placeholder) ---</span>
<span class="text-muted-foreground/60"># In a real scenario, you would load a dataset like MNIST here</span>
<span class="text-chart-5">def</span> <span class="text-accent">get_placeholder_data</span>(num_samples, input_dim, output_dim):
    X = torch.randn(num_samples, input_dim)
    y = torch.randint(<span class="text-chart-3">0</span>, output_dim, (num_samples,))
    <span class="text-chart-5">return</span> <span class="text-chart-4">TensorDataset</span>(X, y)

train_dataset = <span class="text-accent">get_placeholder_data</span>(<span class="text-chart-3">50000</span>, input_dim, output_dim)
train_loader = <span class="text-chart-4">DataLoader</span>(dataset=train_dataset, batch_size=batch_size, shuffle=<span class="text-primary">True</span>)

test_dataset = <span class="text-accent">get_placeholder_data</span>(<span class="text-chart-3">10000</span>, input_dim, output_dim)
test_loader = <span class="text-chart-4">DataLoader</span>(dataset=test_dataset, batch_size=batch_size, shuffle=<span class="text-primary">False</span>)

<span class="text-foreground">print</span>(<span class="text-chart-2">f"--- Starting Training on </span>{device}<span class="text-chart-2"> ---"</span>)

<span class="text-muted-foreground/60"># --- Training Loop ---</span>
total_steps = <span class="text-foreground">len</span>(train_loader)
<span class="text-primary">for</span> epoch <span class="text-primary">in</span> <span class="text-foreground">range</span>(num_epochs):
    <span class="text-primary">for</span> i, (images, labels) <span class="text-primary">in</span> <span class="text-foreground">enumerate</span>(train_loader):
        <span class="text-muted-foreground/60"># Move tensors to the configured device</span>
        images = images.reshape(-<span class="text-chart-3">1</span>, input_dim).to(device)
        labels = labels.to(device)

        <span class="text-muted-foreground/60"># Forward pass</span>
        outputs = model(images)
        loss = criterion(outputs, labels)

        <span class="text-muted-foreground/60"># Backward and optimize</span>
        optimizer.zero_grad()
        loss.backward()
        optimizer.step()

        <span class="text-primary">if</span> (i + <span class="text-chart-3">1</span>) % <span class="text-chart-3">100</span> == <span class="text-chart-3">0</span>:
            <span class="text-foreground">print</span>(<span class="text-chart-2">f'Epoch [</span>{epoch+<span class="text-chart-3">1</span>}<span class="text-chart-2">/</span>{num_epochs}<span class="text-chart-2">], Step [</span>{i+<span class="text-chart-3">1</span>}<span class="text-chart-2">/</span>{total_steps}<span class="text-chart-2">], Loss: </span>{loss.item():.4f}<span class="text-chart-2">'</span>)

<span class="text-muted-foreground/60"># --- Evaluation ---</span>
model.eval()  <span class="text-muted-foreground/60"># Set model to evaluation mode</span>
<span class="text-primary">with</span> torch.no_grad():
    correct = <span class="text-chart-3">0</span>
    total = <span class="text-chart-3">0</span>
    <span class="text-primary">for</span> images, labels <span class="text-primary">in</span> test_loader:
        images = images.reshape(-<span class="text-chart-3">1</span>, input_dim).to(device)
        labels = labels.to(device)
        outputs = model(images)
        _, predicted = torch.max(outputs.data, <span class="text-chart-3">1</span>)
        total += labels.size(<span class="text-chart-3">0</span>)
        correct += (predicted == labels).sum().item()

    accuracy = <span class="text-chart-3">100</span> * correct / total
    <span class="text-foreground">print</span>(<span class="text-chart-2">f'Accuracy of the network on the 10000 test images: </span>{accuracy:.2f}<span class="text-chart-2"> %'</span>)

<span class="text-muted-foreground/60"># --- Save Model ---</span>
torch.save(model.state_dict(), <span class="text-chart-2">'model_state.pth'</span>)
<span class="text-foreground">print</span>(<span class="text-chart-2">"Model saved to model_state.pth"</span>)

<span class="text-muted-foreground/60"># --- Additional Utilities ---</span>
<span class="text-chart-5">def</span> <span class="text-accent">predict_single_image</span>(model, image_tensor):
    <span class="text-chart-2">"""Predicts the class for a single image tensor."""</span>
    model.eval()
    <span class="text-primary">with</span> torch.no_grad():
        image_tensor = image_tensor.reshape(-<span class="text-chart-3">1</span>, input_dim).to(device)
        output = model(image_tensor)
        _, predicted = torch.max(output.data, <span class="text-chart-3">1</span>)
        <span class="text-chart-5">return</span> predicted.item()

<span class="text-muted-foreground/60"># Example of using the utility</span>
sample_image = torch.randn(<span class="text-chart-3">1</span>, input_dim)
prediction = <span class="text-accent">predict_single_image</span>(model, sample_image)
<span class="text-foreground">print</span>(<span class="text-chart-2">f"Prediction for a random sample image: </span>{prediction}<span class="text-chart-2">"</span>)
`,
        }}
      />
    </pre>
    <pre className="absolute inset-y-0 right-8 left-1/2 font-code text-[10px] text-muted-foreground whitespace-pre-wrap hidden sm:block sm:left-2/3">
      <code
        dangerouslySetInnerHTML={{
          __html: `<span class="text-accent">[Input]</span>
  <span class="text-muted-foreground/60">│</span>
  <span class="text-muted-foreground/60">V</span>
<span class="text-chart-2">┌──────────────────┐</span>
<span class="text-chart-2">│ Conv Layer (7x7) │</span>
<span class="text-chart-2">│ MaxPool (3x3)    │</span>
<span class="text-chart-2">└──────────────────┘</span>
  <span class="text-muted-foreground/60">│</span>
  <span class="text-muted-foreground/60">V</span> <span class="text-muted-foreground/40">// ResBlock x3</span>
<span class="text-muted-foreground/60">  ┌────────────────┐</span>
<span class="text-chart-4">┌─┤ Residual Block ├─┐</span>
<span class="text-chart-4">│ │ (Conv 3x3, 64) │ │</span>
<span class="text-chart-4">└─┤ (Conv 3x3, 64) ├&lt;──┘</span>
<span class="text-muted-foreground/60">  └──────(+)───────┘</span>
           <span class="text-primary">│</span>
           <span class="text-muted-foreground/60">V</span> <span class="text-muted-foreground/40">// ResBlock x4</span>
<span class="text-muted-foreground/60">  ┌────────────────┐</span>
<span class="text-chart-5">┌─┤ Residual Block ├─┐</span>
<span class="text-chart-5">│ │ (Conv 3x3, 128)│ │</span>
<span class="text-chart-5">└─┤ (Conv 3x3, 128)├&lt;──┘</span>
<span class="text-muted-foreground/60">  └──────(+)───────┘</span>
           <span class="text-primary">│</span>
           <span class="text-muted-foreground/60">V</span>
<span class="text-chart-3">┌──────────────────┐</span>
<span class="text-chart-3">│ AvgPool          │</span>
<span class="text-chart-3">│ Fully Connected  │</span>
<span class="text-chart-3">│ Softmax          │</span>
<span class="text-chart-3">└──────────────────┘</span>
  <span class="text-muted-foreground/60">│</span>
  <span class="text-muted-foreground/60">V</span>
<span class="text-accent">[Output]</span>
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
      <body className="font-sans antialiased relative">
        <CodeBackground />
        <AppHeader />
        <PageWrapper>{children}</PageWrapper>
        <Toaster />
      </body>
    </html>
  );
}
