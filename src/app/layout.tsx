
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
          __html: `<span class="text-primary">import</span> numpy <span class="text-primary">as</span> np
<span class="text-primary">import</span> torch
<span class="text-primary">import</span> torch.nn <span class="text-primary">as</span> nn
<span class="text-primary">from</span> torch.utils.data <span class="text-primary">import</span> DataLoader, TensorDataset

<span class="text-muted-foreground/60"># --- Configuration ---</span>
learning_rate = <span class="text-accent">0.001</span>
batch_size = <span class="text-accent">64</span>
num_epochs = <span class="text-accent">20</span>
input_dim = <span class="text-accent">784</span>  <span class="text-muted-foreground/60"># 28x28 pixels for MNIST</span>
hidden_dim = <span class="text-accent">256</span>
output_dim = <span class="text-accent">10</span>   <span class="text-muted-foreground/60"># 10 classes for digits 0-9</span>
device = torch.device(<span class="text-accent">"cuda"</span> <span class="text-primary">if</span> torch.cuda.is_available() <span class="text-primary">else</span> <span class="text-accent">"cpu"</span>)

<span class="text-muted-foreground/60"># --- Model Definition ---</span>
<span class="text-primary">class</span> <span class="text-foreground">NeuralNet</span>(nn.Module):
    <span class="text-primary">def</span> <span class="text-foreground">__init__</span>(<span class="text-primary">self</span>, input_size, hidden_size, num_classes):
        <span class="text-foreground">super</span>(NeuralNet, <span class="text-primary">self</span>).<span class="text-foreground">__init__</span>()
        <span class="text-primary">self</span>.fc1 = nn.Linear(input_size, hidden_size)
        <span class="text-primary">self</span>.relu = nn.ReLU()
        <span class="text-primary">self</span>.fc2 = nn.Linear(hidden_size, num_classes)

    <span class="text-primary">def</span> <span class="text-foreground">forward</span>(<span class="text-primary">self</span>, x):
        out = <span class="text-primary">self</span>.fc1(x)
        out = <span class="text-primary">self</span>.relu(out)
        out = <span class="text-primary">self</span>.fc2(out)
        <span class="text-primary">return</span> out

model = NeuralNet(input_dim, hidden_dim, output_dim).to(device)

<span class="text-muted-foreground/60"># --- Loss and Optimizer ---</span>
criterion = nn.CrossEntropyLoss()
optimizer = torch.optim.Adam(model.parameters(), lr=learning_rate)

<span class="text-muted-foreground/60"># --- Data Loading (Placeholder) ---</span>
<span class="text-muted-foreground/60"># In a real scenario, you would load a dataset like MNIST here</span>
<span class="text-primary">def</span> <span class="text-foreground">get_placeholder_data</span>(num_samples, input_dim, output_dim):
    X = torch.randn(num_samples, input_dim)
    y = torch.randint(<span class="text-accent">0</span>, output_dim, (num_samples,))
    <span class="text-primary">return</span> TensorDataset(X, y)

train_dataset = get_placeholder_data(<span class="text-accent">50000</span>, input_dim, output_dim)
train_loader = DataLoader(dataset=train_dataset, batch_size=batch_size, shuffle=<span class="text-primary">True</span>)

test_dataset = get_placeholder_data(<span class="text-accent">10000</span>, input_dim, output_dim)
test_loader = DataLoader(dataset=test_dataset, batch_size=batch_size, shuffle=<span class="text-primary">False</span>)

<span class="text-foreground">print</span>(<span class="text-accent">f"--- Starting Training on </span>{device}<span class="text-accent"> ---"</span>)

<span class="text-muted-foreground/60"># --- Training Loop ---</span>
total_steps = <span class="text-foreground">len</span>(train_loader)
<span class="text-primary">for</span> epoch <span class="text-primary">in</span> <span class="text-foreground">range</span>(num_epochs):
    <span class="text-primary">for</span> i, (images, labels) <span class="text-primary">in</span> <span class="text-foreground">enumerate</span>(train_loader):
        <span class="text-muted-foreground/60"># Move tensors to the configured device</span>
        images = images.reshape(-<span class="text-accent">1</span>, input_dim).to(device)
        labels = labels.to(device)

        <span class="text-muted-foreground/60"># Forward pass</span>
        outputs = model(images)
        loss = criterion(outputs, labels)

        <span class="text-muted-foreground/60"># Backward and optimize</span>
        optimizer.zero_grad()
        loss.backward()
        optimizer.step()

        <span class="text-primary">if</span> (i + <span class="text-accent">1</span>) % <span class="text-accent">100</span> == <span class="text-accent">0</span>:
            <span class="text-foreground">print</span>(<span class="text-accent">f'Epoch [</span>{epoch+<span class="text-accent">1</span>}<span class="text-accent">/</span>{num_epochs}<span class="text-accent">], Step [</span>{i+<span class="text-accent">1</span>}<span class="text-accent">/</span>{total_steps}<span class="text-accent">], Loss: </span>{loss.item():.4f}<span class="text-accent">'</span>)

<span class="text-muted-foreground/60"># --- Evaluation ---</span>
model.eval()  <span class="text-muted-foreground/60"># Set model to evaluation mode</span>
<span class="text-primary">with</span> torch.no_grad():
    correct = <span class="text-accent">0</span>
    total = <span class="text-accent">0</span>
    <span class="text-primary">for</span> images, labels <span class="text-primary">in</span> test_loader:
        images = images.reshape(-<span class="text-accent">1</span>, input_dim).to(device)
        labels = labels.to(device)
        outputs = model(images)
        _, predicted = torch.max(outputs.data, <span class="text-accent">1</span>)
        total += labels.size(<span class="text-accent">0</span>)
        correct += (predicted == labels).sum().item()

    accuracy = <span class="text-accent">100</span> * correct / total
    <span class="text-foreground">print</span>(<span class="text-accent">f'Accuracy of the network on the 10000 test images: </span>{accuracy:.2f}<span class="text-accent"> %'</span>)

<span class="text-muted-foreground/60"># --- Save Model ---</span>
torch.save(model.state_dict(), <span class="text-accent">'model_state.pth'</span>)
<span class="text-foreground">print</span>(<span class="text-accent">"Model saved to model_state.pth"</span>)

<span class="text-muted-foreground/60"># --- Additional Utilities ---</span>
<span class="text-primary">def</span> <span class="text-foreground">predict_single_image</span>(model, image_tensor):
    <span class="text-accent">"""Predicts the class for a single image tensor."""</span>
    model.eval()
    <span class="text-primary">with</span> torch.no_grad():
        image_tensor = image_tensor.reshape(-<span class="text-accent">1</span>, input_dim).to(device)
        output = model(image_tensor)
        _, predicted = torch.max(output.data, <span class="text-accent">1</span>)
        <span class="text-primary">return</span> predicted.item()

<span class="text-muted-foreground/60"># Example of using the utility</span>
sample_image = torch.randn(<span class="text-accent">1</span>, input_dim)
prediction = predict_single_image(model, sample_image)
<span class="text-foreground">print</span>(<span class="text-accent">f"Prediction for a random sample image: </span>{prediction}<span class="text-accent">"</span>)
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
