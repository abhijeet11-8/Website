
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

const NeurobiologyDiagram = () => (
    <g transform="translate(250, 700)" opacity="0.8">
      <image 
        href="/image.png" 
        width="300" 
        height="300"
        x="-150"
        y="-150"
        preserveAspectRatio="xMidYMid slice"
      />
    </g>
  );

const ArchitectureDiagram = () => {
  const colors = {
    blue: 'hsl(160, 60%, 45%)',
    yellow: 'hsl(43, 74%, 66%)',
    purple: 'hsl(280, 65%, 60%)',
    teal: 'hsl(174, 44.1%, 70%)',
    text: 'hsl(0, 0%, 63.9%)',
    stroke: 'hsl(0, 0%, 98%)',
  };

  const commonStyle = {
    fillOpacity: 0.1,
    stroke: colors.stroke,
    strokeWidth: 0.75,
  };
  
  const textStyle = {
    fill: colors.text,
    fontSize: '12px',
    fontFamily: 'var(--font-code)',
  };

  const Cuboid = ({ x, y, w, h, d, color, label, label2 }: {x: number, y: number, w: number, h: number, d: number, color: string, label?: string, label2?: string}) => (
    <g>
      <path d={`M${x},${y} l${d},${-d/2} l${w},0 l${-d},${d/2} Z`} style={{...commonStyle, fill: color}} />
      <path d={`M${x+w},${y} l${d},${-d/2} l0,${h} l${-d},${d/2} Z`} style={{...commonStyle, fill: color, fillOpacity: 0.2}} />
      <rect x={x} y={y} width={w} height={h} style={{...commonStyle, fill: color}} />
      {label && <text x={x + w/2} y={y + h + 15} textAnchor="middle" style={textStyle}>{label}</text>}
      {label2 && <text x={x + w/2} y={y + h + 30} textAnchor="middle" style={textStyle}>{label2}</text>}
    </g>
  );

  const Arrow = ({ d }: {d: string}) => (
    <path d={d} stroke={colors.teal} strokeWidth="1" fill="none" markerEnd="url(#arrow)" />
  );

  return (
    <svg viewBox="0 0 500 950" className="w-full h-full opacity-60">
      <defs>
        <marker id="arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill={colors.teal} />
        </marker>
      </defs>

      <g transform="translate(0, -150)">
        {/* Input Image */}
        <rect x="20" y="240" width="60" height="80" style={{...commonStyle, fill: colors.yellow}} />
        <text x="50" y="335" textAnchor="middle" style={textStyle}>input</text>

        {/* Main Block Chain */}
        <Arrow d="M 85 280 L 120 280" />
        <Cuboid x={125} y={230} w={20} h={100} d={20} color={colors.yellow} label="conv1" />
        <Arrow d="M 170 280 L 190 280" />
        <Cuboid x={195} y={240} w={20} h={80} d={18} color={colors.blue} label="BRB1" />
        <Arrow d="M 240 280 L 260 280" />
        <Cuboid x={265} y={250} w={20} h={60} d={16} color={colors.blue} label="BRB2" />
        <Arrow d="M 310 280 L 330 280" />
        <Cuboid x={335} y={260} w={20} h={40} d={14} color={colors.blue} label="BRB3" />
        <Arrow d="M 380 280 L 400 280" />
        <Cuboid x={405} y={265} w={20} h={30} d={12} color={colors.blue} label="BRB4" />

        {/* Skip Connection 1 */}
        <Arrow d="M 285 250 q -20 -30 -60 -30 l -5 0 q -20 0 -20 20 l 0 20" />

        {/* Bottom Path */}
        <Arrow d="M 345 305 l 0 70 q 0 10 -10 10 l -40 0" />
        <Cuboid x={245} y={370} w={40} h={20} d={10} color={colors.blue} label="BRB2 x 3" />
        <Arrow d="M 240 380 l -20 0" />
        <Cuboid x={155} y={370} w={60} h={20} d={10} color={colors.blue} label="BRB2 x 1" />

        {/* Predictor Heads */}
        <Arrow d="M 420 260 C 450 240, 460 180, 440 160" />
        <Cuboid x={360} y={100} w={50} h={50} d={15} color={colors.yellow} label="predictor1" />

        <Arrow d="M 290 370 l 0 -60 q 0 -20 20 -20 l 40 0 C 400 290, 460 270, 440 250" />
        <Cuboid x={360} y={190} w={50} h={50} d={15} color={colors.yellow} label="predictor2" />

        <Arrow d="M 150 380 C 100 380, 80 450, 150 480 L 355 490" />
        <Cuboid x={360} y={430} w={50} h={50} d={15} color={colors.yellow} label="predictor3" />
        
        {/* Final Output */}
        <path d="M 450 125 L 450 455 L 480 425 L 480 95 Z" style={{...commonStyle, fill: colors.purple}} />
        <Arrow d="M 415 125 L 445 125" />
        <Arrow d="M 415 215 L 460 295" />
        <Arrow d="M 415 455 L 455 385" />
      </g>
      <NeurobiologyDiagram />
    </svg>
  );
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
    <div className="absolute inset-y-0 right-8 left-1/2 font-code text-[10px] text-muted-foreground whitespace-pre-wrap hidden sm:block sm:left-2/3">
      <ArchitectureDiagram />
    </div>
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
