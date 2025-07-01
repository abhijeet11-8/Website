
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
          __html: `import numpy as np
import torch
import torch.nn as nn
from torch.utils.data import DataLoader, TensorDataset

# --- Configuration ---
learning_rate = 0.001
batch_size = 64
num_epochs = 20
input_dim = 784  # 28x28 pixels for MNIST
hidden_dim = 256
output_dim = 10   # 10 classes for digits 0-9
device = torch.device("cuda" if torch.cuda.is_available() else "cpu")

# --- Model Definition ---
class NeuralNet(nn.Module):
    def __init__(self, input_size, hidden_size, num_classes):
        super(NeuralNet, self).__init__()
        self.fc1 = nn.Linear(input_size, hidden_size)
        self.relu = nn.ReLU()
        self.fc2 = nn.Linear(hidden_size, num_classes)

    def forward(self, x):
        out = self.fc1(x)
        out = self.relu(out)
        out = self.fc2(out)
        return out

model = NeuralNet(input_dim, hidden_dim, output_dim).to(device)

# --- Loss and Optimizer ---
criterion = nn.CrossEntropyLoss()
optimizer = torch.optim.Adam(model.parameters(), lr=learning_rate)

# --- Data Loading (Placeholder) ---
# In a real scenario, you would load a dataset like MNIST here
def get_placeholder_data(num_samples, input_dim, output_dim):
    X = torch.randn(num_samples, input_dim)
    y = torch.randint(0, output_dim, (num_samples,))
    return TensorDataset(X, y)

train_dataset = get_placeholder_data(50000, input_dim, output_dim)
train_loader = DataLoader(dataset=train_dataset, batch_size=batch_size, shuffle=True)

test_dataset = get_placeholder_data(10000, input_dim, output_dim)
test_loader = DataLoader(dataset=test_dataset, batch_size=batch_size, shuffle=False)

print(f"--- Starting Training on {device} ---")

# --- Training Loop ---
total_steps = len(train_loader)
for epoch in range(num_epochs):
    for i, (images, labels) in enumerate(train_loader):
        # Move tensors to the configured device
        images = images.reshape(-1, input_dim).to(device)
        labels = labels.to(device)

        # Forward pass
        outputs = model(images)
        loss = criterion(outputs, labels)

        # Backward and optimize
        optimizer.zero_grad()
        loss.backward()
        optimizer.step()

        if (i + 1) % 100 == 0:
            print(f'Epoch [{epoch+1}/{num_epochs}], Step [{i+1}/{total_steps}], Loss: {loss.item():.4f}')

# --- Evaluation ---
model.eval()  # Set model to evaluation mode
with torch.no_grad():
    correct = 0
    total = 0
    for images, labels in test_loader:
        images = images.reshape(-1, input_dim).to(device)
        labels = labels.to(device)
        outputs = model(images)
        _, predicted = torch.max(outputs.data, 1)
        total += labels.size(0)
        correct += (predicted == labels).sum().item()

    accuracy = 100 * correct / total
    print(f'Accuracy of the network on the 10000 test images: {accuracy:.2f} %')

# --- Save Model ---
torch.save(model.state_dict(), 'model_state.pth')
print("Model saved to model_state.pth")

# --- Additional Utilities ---
def predict_single_image(model, image_tensor):
    """Predicts the class for a single image tensor."""
    model.eval()
    with torch.no_grad():
        image_tensor = image_tensor.reshape(-1, input_dim).to(device)
        output = model(image_tensor)
        _, predicted = torch.max(output.data, 1)
        return predicted.item()

# Example of using the utility
sample_image = torch.randn(1, input_dim)
prediction = predict_single_image(model, sample_image)
print(f"Prediction for a random sample image: {prediction}")
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

    
